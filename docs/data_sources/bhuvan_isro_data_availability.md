# Bhuvan / ISRO Data Availability for URJA-2047

Bhuvan/NRSC should be treated as a primary India-first geospatial infrastructure for URJA-2047. This note records datasets and services currently relevant to the proposed Energy, Sustainability and Climate Change programme.

## Bhuvan capabilities relevant to the project

| Bhuvan/ISRO resource | Current availability / capability | URJA-2047 use |
|---|---|---|
| Bhuvan NextGen | Standard, thematic, data/scientific, governance and disaster-oriented access modes; national EO and thematic data gateway | National data discovery, Indian EO context and host-platform interoperability |
| Open Data Archive / Bhoonidhi | Download and discovery of Indian Earth-observation products | Pilot and national EO inputs where licence/resolution are suitable |
| Administrative and hydrologic base | State, district, tehsil, village, basin, sub-basin and watershed layers in Bhuvan 2D | Administrative reporting, catchments, policy-scale aggregation |
| LULC thematic services | 1:50,000 LULC datasets available for selected historical periods; Bhuvan also serves thematic layers through OGC services | Land constraint, land-cover change, ETFE and pilot validation |
| WMS / WMTS | OGC-compliant web services for LULC, wasteland, geomorphology, lineament, urban LULC, erosion, water bodies, flood hazard, glacial lakes and other themes | Direct GIS/web integration into the Digital Twin and reproducible spatial overlays |
| Night Time Light portal / atlas | Bhuvan hosts an India NTL portal/atlas for decadal change over 2012–2021 | Independent India-specific comparison and validation of VIIRS-based PESM trends |
| EOS-06 wind products | NICES/Bhuvan updates include EOS-06 wind velocity and wind stress products; 2025 updates extended the archive through March 2025 | Wind-climate validation, especially for Indian EO comparison; ocean/offshore relevance |
| ISRO renewable-energy EO applications | ISRO explicitly describes EO-based solar, wind and wave-energy assessment using geostationary, scatterometer and altimeter/model products | Indian remote-sensing evidence for solar/wind/wave opportunity modules |
| High-resolution Indian EO imagery | Bhuvan provides multiple national satellite views and updated EOS/AWiFS/LISS-III data | Fine-resolution pilot validation and infrastructure/land interpretation |
| Climate/environment and disaster services | Bhuvan hosts climate/environment, lightning, flood and other thematic applications | Climate-risk and resilience overlays for ETFE and pilot work |

## Specific 2026 Bhuvan updates relevant to URJA-2047

Bhuvan's April 2026 update states that the platform was refreshed with EOS, AWiFS and LISS-III datasets and that LULC 1:50K datasets can be requested/downloaded in shapefile format for the years 2015–16, 2011–12 and 2005–06 using district or user-defined AOI selection. This is useful for national/pilot land constraints, though newer land-cover epochs may still require other Indian or international products.

Bhuvan's June 2025 update records EOS-06 wind velocity and wind-stress products, together with merged total-current products, available through NICES for April 2023–March 2025. These are valuable for independent Indian EO checks and offshore/coastal components but should not be confused with turbine hub-height onshore wind-resource assessment.

## Recommended use hierarchy

1. **Use Indian authoritative products first** where they directly answer the research question and are available at suitable resolution and licence terms.
2. **Use globally harmonised products for reproducible national screening** when an India-wide consistent surface is required and an equivalent Indian product is not readily downloadable or temporally harmonised.
3. **Cross-validate key opportunity layers** against NIWE, MNRE/NISE, ISRO/NRSC and CEA evidence before policy interpretation.
4. **Do not redistribute Bhuvan content automatically.** Bhuvan terms retain ownership with DOS/ISRO/NRSC and relevant licensors; source-specific terms must be checked before release.

## Priority Bhuvan integrations for the proposed Chair

### Objective 1 — National Data Cube

- administrative/hydrologic base layers;
- LULC and wasteland products;
- Indian EO imagery and thematic services;
- NTL atlas for independent comparison;
- water, flood and climate/environment services.

### Objective 2 — Energy Use and Adequacy

- Bhuvan NTL atlas as an independent temporal/spatial reference;
- settlement, infrastructure and governance layers where available;
- high-resolution EO for selected underserved-region validation.

### Objective 3 — Renewable Feasibility

- ISRO solar/wind/wave EO products;
- EOS-06 wind fields for comparison/coastal applications;
- LULC, wasteland, geomorphology, water and ecological constraints;
- NIWE/MNRE/CEA integration for bankable/technical interpretation.

### Objective 4–5 — Grid, Storage and Pathways

Bhuvan layers should be combined with CEA transmission/resource-adequacy data, India-WRIS/CWC water evidence, terrain, demand and infrastructure datasets. Bhuvan is a geospatial integration layer, not a substitute for sector-authoritative engineering data.

### Objective 6 — Digital Twin

Bhuvan's OGC services provide a natural interoperability route for Indian thematic services in the URJA-2047 Digital Twin, subject to service terms and availability.

## Official references

- Bhuvan Indian Geo Platform: https://bhuvan.nrsc.gov.in/home/
- Bhuvan April 2026 update: https://bhuvan.nrsc.gov.in/updates/bhuvan_apr2026.html
- Bhuvan June 2025 update: https://bhuvan.nrsc.gov.in/updates/bhuvan_jun2025.html
- Bhuvan WMS/WMTS guidance: https://bhuvan.nrsc.gov.in/wiki/index.php/How_to_use_WMS_services
- Bhuvan 2D documentation: https://bhuvan.nrsc.gov.in/wiki/index.php/Bhuvan_2D
- ISRO Renewable Energy EO applications: https://www.isro.gov.in/RenewableEnergy.html

**Evidence status:** this document describes data/service availability for proposal planning. Every dataset used operationally will require a source-specific metadata and licence check at acquisition time.
