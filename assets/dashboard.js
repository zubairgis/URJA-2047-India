(() => {
  'use strict';

  const CSV_URL = 'results/state_ut/urja2047_pesm_v02_state_ut_diagnostics.csv';
  const PROJECT_BOUNDARY_URL = 'data/boundaries/india_states.geojson';
  const FALLBACK_TOPO_URL = 'https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@2884453/topojson/india.json';

  const metricConfig = {
    pct_pesm_ge1: {
      title: 'PESM ≥ 1 — % analytical area',
      unit: '%',
      decimals: 2,
      thresholds: [5, 10, 20, 30, 40, 50],
      colors: ['#edf5fb', '#d8eafa', '#b9d8f2', '#83b9df', '#4d97cb', '#1f6faf', '#0b3d70'],
      legendLabels: ['< 5', '5–10', '10–20', '20–30', '30–40', '40–50', '≥ 50']
    },
    pct_pesm_ge2: {
      title: 'PESM ≥ 2 — % analytical area',
      unit: '%',
      decimals: 2,
      thresholds: [2, 5, 10, 15, 25, 35],
      colors: ['#edf5fb', '#d8eafa', '#b9d8f2', '#83b9df', '#4d97cb', '#1f6faf', '#0b3d70'],
      legendLabels: ['< 2', '2–5', '5–10', '10–15', '15–25', '25–35', '≥ 35']
    },
    mean_pesm: {
      title: 'Mean standardized PESM',
      unit: '',
      decimals: 2,
      thresholds: [-0.5, -0.1, 0.1, 0.5, 1.0, 1.3],
      colors: ['#8d99a6', '#c4ccd3', '#eef2f4', '#cde4f5', '#87bce2', '#3a89c5', '#0b4e85'],
      legendLabels: ['< −0.5', '−0.5–−0.1', '−0.1–0.1', '0.1–0.5', '0.5–1.0', '1.0–1.3', '≥ 1.3']
    },
    area_pesm_ge1_km2: {
      title: 'PESM ≥ 1 — area',
      unit: ' km²',
      decimals: 0,
      thresholds: [1000, 5000, 10000, 20000, 40000, 60000],
      colors: ['#edf5fb', '#d8eafa', '#b9d8f2', '#83b9df', '#4d97cb', '#1f6faf', '#0b3d70'],
      legendLabels: ['< 1k', '1k–5k', '5k–10k', '10k–20k', '20k–40k', '40k–60k', '≥ 60k']
    }
  };

  const alias = {
    'nct of delhi': 'delhi',
    'national capital territory of delhi': 'delhi',
    'dadra & nagar haveli and daman & diu': 'dadra and nagar haveli and daman and diu',
    'dadra and nagar haveli & daman and diu': 'dadra and nagar haveli and daman and diu',
    'orissa': 'odisha',
    'uttaranchal': 'uttarakhand',
    'jammu & kashmir': 'jammu and kashmir',
    'andaman & nicobar islands': 'andaman and nicobar islands'
  };

  let map;
  let geoLayer;
  let legendControl;
  let statsRows = [];
  let statsByName = new Map();
  let stateFeatures = [];
  let currentMetric = 'pct_pesm_ge1';

  function normalizeName(value) {
    if (!value) return '';
    let name = String(value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, ' ')
      .trim()
      .replace(/\s+/g, ' ');
    return alias[name] || name;
  }

  function parseCsv(text) {
    const lines = text.trim().split(/\r?\n/);
    const headers = lines[0].split(',').map(v => v.trim());
    return lines.slice(1).filter(Boolean).map(line => {
      const parts = line.split(',');
      const row = {};
      headers.forEach((h, i) => {
        const raw = (parts[i] ?? '').trim();
        if (h === 'state_ut' || h === 'pesm_extent_class') row[h] = raw;
        else row[h] = raw === '' ? null : Number(raw);
      });
      row._key = normalizeName(row.state_ut);
      return row;
    });
  }

  function propertyName(props) {
    const candidates = ['shapeName', 'ST_NM', 'STATE', 'State', 'state', 'STATE_NAME', 'NAME_1', 'NAME', 'name', 'st_nm', 'state_ut'];
    for (const key of candidates) {
      if (props && props[key]) return props[key];
    }
    return 'Unknown';
  }

  function formatValue(value, metric = currentMetric) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return 'No data';
    const cfg = metricConfig[metric];
    const n = Number(value);
    const formatted = cfg.decimals === 0
      ? Math.round(n).toLocaleString('en-IN')
      : n.toLocaleString('en-IN', { minimumFractionDigits: cfg.decimals, maximumFractionDigits: cfg.decimals });
    return `${formatted}${cfg.unit}`;
  }

  function colorFor(value, metric = currentMetric) {
    if (value === null || value === undefined || Number.isNaN(Number(value))) return '#dfe5ea';
    const cfg = metricConfig[metric];
    const n = Number(value);
    let index = 0;
    while (index < cfg.thresholds.length && n >= cfg.thresholds[index]) index += 1;
    return cfg.colors[Math.min(index, cfg.colors.length - 1)];
  }

  function buildFallbackStates(topology) {
    if (!window.topojson || !topology?.objects?.districts) {
      throw new Error('Fallback topology could not be interpreted.');
    }
    const grouped = {};
    topology.objects.districts.geometries.forEach(g => {
      const state = g.properties?.st_nm;
      if (!state) return;
      if (!grouped[state]) grouped[state] = [];
      grouped[state].push(g);
    });

    return Object.entries(grouped).map(([state, geometries]) => ({
      type: 'Feature',
      properties: { state_ut: state, boundary_source: 'fallback' },
      geometry: window.topojson.merge(topology, geometries)
    }));
  }

  async function loadBoundaries() {
    const note = document.getElementById('boundaryNote');
    try {
      const response = await fetch(PROJECT_BOUNDARY_URL, { cache: 'no-store' });
      if (!response.ok) throw new Error('Project boundary not present');
      const geojson = await response.json();
      const features = geojson.type === 'FeatureCollection' ? geojson.features : [geojson];
      note.textContent = 'Boundary source: project-supplied India State/UT GeoJSON in data/boundaries/india_states.geojson.';
      return features;
    } catch (projectError) {
      const response = await fetch(FALLBACK_TOPO_URL);
      if (!response.ok) throw new Error('Neither project nor fallback boundary data could be loaded.');
      const topology = await response.json();
      note.textContent = 'Temporary visualization boundary: public India Maps TopoJSON fallback. Upload the project India State/UT GeoJSON to data/boundaries/india_states.geojson for the preferred boundary source.';
      return buildFallbackStates(topology);
    }
  }

  function joinStatsToFeatures(features) {
    return features.map(feature => {
      const rawName = propertyName(feature.properties || {});
      const key = normalizeName(rawName);
      const stats = statsByName.get(key) || null;
      feature.properties = {
        ...(feature.properties || {}),
        _displayName: stats?.state_ut || rawName,
        _stats: stats
      };
      return feature;
    });
  }

  function updateDetail(stats, displayName) {
    const box = document.getElementById('stateDetail');
    if (!stats) {
      box.innerHTML = `
        <span class="state-kicker">${displayName || 'State / UT'}</span>
        <h3>No PESM diagnostic record</h3>
        <p>The boundary is visible but no matching State/UT diagnostic row was found in the project CSV.</p>`;
      return;
    }
    box.innerHTML = `
      <span class="state-kicker">State / Union Territory</span>
      <h3>${stats.state_ut}</h3>
      <div class="detail-grid">
        <div><strong>${formatValue(stats.pct_pesm_ge1, 'pct_pesm_ge1')}</strong><span>PESM ≥ 1</span></div>
        <div><strong>${formatValue(stats.pct_pesm_ge2, 'pct_pesm_ge2')}</strong><span>PESM ≥ 2</span></div>
        <div><strong>${formatValue(stats.mean_pesm, 'mean_pesm')}</strong><span>Mean PESM</span></div>
        <div><strong>${Math.round(stats.analytical_area_km2 || 0).toLocaleString('en-IN')} km²</strong><span>Analytical area</span></div>
      </div>
      <p><strong>Current map metric:</strong> ${metricConfig[currentMetric].title} = ${formatValue(stats[currentMetric], currentMetric)}.</p>`;
  }

  function renderRanking() {
    const list = document.getElementById('rankingList');
    const rows = [...statsRows]
      .filter(r => Number.isFinite(r[currentMetric]))
      .sort((a, b) => b[currentMetric] - a[currentMetric])
      .slice(0, 8);
    list.innerHTML = rows.map(r => `<li><span>${r.state_ut}</span><b>${formatValue(r[currentMetric])}</b></li>`).join('');
    document.getElementById('metricTitle').textContent = metricConfig[currentMetric].title;
  }

  function buildLegend() {
    if (legendControl) legendControl.remove();
    legendControl = L.control({ position: 'bottomright' });
    legendControl.onAdd = function () {
      const div = L.DomUtil.create('div', 'legend');
      const cfg = metricConfig[currentMetric];
      div.innerHTML = `<strong>${cfg.title}</strong>` + cfg.colors.map((color, i) =>
        `<div class="legend-row"><span class="legend-swatch" style="background:${color}"></span><span>${cfg.legendLabels[i]}${cfg.unit === '%' ? '%' : ''}</span></div>`
      ).join('') + `<div class="legend-row"><span class="legend-swatch" style="background:#dfe5ea"></span><span>No data</span></div>`;
      return div;
    };
    legendControl.addTo(map);
  }

  function renderMap() {
    if (geoLayer) geoLayer.remove();

    geoLayer = L.geoJSON(stateFeatures, {
      style: feature => {
        const stats = feature.properties?._stats;
        const value = stats ? stats[currentMetric] : null;
        return {
          color: '#ffffff',
          weight: 1.1,
          opacity: 1,
          fillColor: colorFor(value),
          fillOpacity: 0.92
        };
      },
      onEachFeature: (feature, layer) => {
        const stats = feature.properties?._stats;
        const name = feature.properties?._displayName || propertyName(feature.properties || {});
        const tooltip = `<strong>${name}</strong><br>${metricConfig[currentMetric].title}: <strong>${stats ? formatValue(stats[currentMetric]) : 'No data'}</strong>`;
        layer.bindTooltip(tooltip, { sticky: true, direction: 'top' });
        layer.on({
          mouseover: e => {
            e.target.setStyle({ weight: 2, color: '#08243e', fillOpacity: 1 });
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) e.target.bringToFront();
          },
          mouseout: e => geoLayer.resetStyle(e.target),
          click: () => updateDetail(stats, name)
        });
      }
    }).addTo(map);

    const bounds = geoLayer.getBounds();
    if (bounds.isValid()) map.fitBounds(bounds, { padding: [16, 16], maxZoom: 5 });
    buildLegend();
    renderRanking();
  }

  async function initMap() {
    const loading = document.getElementById('mapLoading');
    try {
      if (!window.L) throw new Error('Leaflet did not load.');
      const [csvText, boundaries] = await Promise.all([
        fetch(CSV_URL).then(r => {
          if (!r.ok) throw new Error('PESM State/UT CSV could not be loaded.');
          return r.text();
        }),
        loadBoundaries()
      ]);

      statsRows = parseCsv(csvText);
      statsByName = new Map(statsRows.map(r => [r._key, r]));
      stateFeatures = joinStatsToFeatures(boundaries);

      loading.remove();
      map = L.map('map', {
        zoomControl: true,
        attributionControl: true,
        minZoom: 3,
        maxZoom: 8,
        preferCanvas: true
      });
      map.attributionControl.setPrefix('URJA-2047');
      renderMap();

      document.getElementById('metricSelect').addEventListener('change', event => {
        currentMetric = event.target.value;
        renderMap();
      });
    } catch (error) {
      loading.textContent = `Map unavailable: ${error.message}`;
      loading.style.color = '#8f2f2f';
      console.error(error);
    }
  }

  function initFigures() {
    document.querySelectorAll('[data-image]').forEach(wrapper => {
      const image = wrapper.querySelector('img');
      if (!image) return;
      const loaded = () => {
        if (image.naturalWidth > 0) {
          wrapper.classList.add('image-loaded');
          wrapper.classList.remove('image-missing');
        } else {
          wrapper.classList.add('image-missing');
        }
      };
      image.addEventListener('load', loaded);
      image.addEventListener('error', () => wrapper.classList.add('image-missing'));
      if (image.complete) loaded();
    });
  }

  initFigures();
  initMap();
})();
