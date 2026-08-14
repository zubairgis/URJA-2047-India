# Authoritative Data Sources for URJA-2047 India

URJA-2047 prioritises Indian public-data infrastructure and Government of India sources, supplemented by internationally harmonised Earth-observation and climate datasets where they improve national consistency or reproducibility.

## Government of India and national platforms

- **Bhuvan / ISRO / NRSC:** land use/land cover, thematic layers, satellite-derived geospatial products, administrative and planning layers where available.
- **Ministry of New and Renewable Energy (MNRE):** installed renewable capacity, programme statistics, scheme information and renewable-energy policy evidence.
- **National Institute of Wind Energy (NIWE):** wind-resource assessment, wind atlases, measurement and potential information.
- **Central Electricity Authority (CEA):** electricity generation, installed capacity, transmission, demand, load, state-sector and national power-system statistics.
- **Ministry of Petroleum and Natural Gas / PPAC:** petroleum and gas consumption, imports, product demand, refining and fuel-market statistics relevant to India’s import dependence and transition burden.
- **Ministry of Power:** national electricity policy, schemes, distribution-sector reforms, access and reliability programmes.
- **NITI Aayog:** energy-transition pathways, India Energy Security Scenarios, SDG and development indicators, long-term transition policy evidence.
- **Census of India and official population/statistical systems:** demographic structure, settlement, housing and service indicators where spatially available.
- **MoSPI:** national and state economic statistics, household and sectoral indicators, energy-use context and development variables.
- **India-WRIS / Central Water Commission:** water resources, hydrology and water constraints relevant to energy feasibility and climate resilience.
- **IMD:** meteorology and climate evidence where accessible for validation and national climate-risk interpretation.

## International / globally harmonised geospatial inputs

- **VIIRS nighttime lights:** observed nighttime activity signal for PESM.
- **GHSL:** harmonised population, built surface and settlement morphology.
- **ERA5 / ERA5-Land:** solar, wind and climate screening variables.
- **Sentinel-1 / Sentinel-2 and Landsat:** detailed pilot-area validation, land-cover and infrastructure-context analysis.
- **SRTM / other DEM products:** terrain screening where scientifically justified.

## Data-governance principle

The repository does not redistribute restricted or very large third-party datasets. It stores source identifiers, metadata, processing scripts, compact derived tables and reproducible workflows. Large national rasters should be maintained in an institutional data store, cloud bucket, DOI repository, Git LFS or release asset rather than ordinary Git history.

## Analytical backbone

The national proof of concept uses a 1-km equal-area grid. Finer-resolution layers are planned for representative pilot landscapes. All indicators must retain source provenance, temporal reference, spatial resolution, processing version and evidence-maturity level.
