# Official Source Registry

This registry is the proposal-facing index of authoritative Indian sources for URJA-2047. It should be reviewed immediately before PMRC submission and updated whenever a source, release date or national statistic changes.

| Institution / system | Evidence domain | Primary use in URJA-2047 | Main entry point |
|---|---|---|---|
| Ministry of New and Renewable Energy (MNRE) | Renewable capacity, schemes, policy and programme statistics | Renewable-energy baseline, technology deployment, ETFE and scenario calibration | https://mnre.gov.in/ |
| National Institute of Wind Energy (NIWE) | Wind resource, atlas, measurement and technical assessment | Authoritative wind-resource and feasibility assessment | https://niwe.res.in/ |
| Central Electricity Authority (CEA) | Generation, transmission, demand, resource adequacy, National Electricity Plan, storage | Demand, grid, storage, system adequacy and 2047 pathways | https://cea.nic.in/ |
| Ministry of Power | Electricity policy, access, distribution reforms and programmes | Electricity-service, reliability and policy context | https://powermin.gov.in/ |
| Petroleum Planning & Analysis Cell (PPAC) / MoPNG | Petroleum and gas production, consumption, imports/exports and prices | Import dependence, fossil-fuel substitution and energy-security context | https://ppac.gov.in/ |
| Ministry of Statistics and Programme Implementation (MoSPI) | Energy statistics, economic and household indicators | National energy balance, sectoral demand and socioeconomic context | https://www.mospi.gov.in/ |
| NITI Aayog | Energy scenarios, SDGs, development and long-term policy | 2047 scenario framing, transition policy and equity indicators | https://www.niti.gov.in/ |
| NRSC / ISRO Bhuvan | EO imagery, thematic data, NTL, LULC, OGC services, administrative/hydrologic layers | India-first geospatial backbone, pilots, ETFE constraints, Digital Twin interoperability | https://bhuvan.nrsc.gov.in/ |
| ISRO / NRSC / Bhoonidhi | Indian EO data discovery and download | High-resolution pilot validation and national EO products | https://bhoonidhi.nrsc.gov.in/ |
| Census of India / Registrar General of India | Population, settlements, housing and service characteristics | Population, settlement, service-adequacy and equity modelling | https://censusindia.gov.in/ |
| India-WRIS / Central Water Commission | Hydrology, reservoirs, basins and water resources | Water constraints, hydro/storage feasibility and climate resilience | https://indiawris.gov.in/ |
| India Meteorological Department (IMD) | Meteorology, climate and extremes | Climate validation, heat, rainfall, wind and hazard analysis | https://mausam.imd.gov.in/ |
| Ministry of Environment, Forest and Climate Change | Protected areas, environmental policy, climate commitments | Environmental exclusion/constraint layers and climate-policy context | https://moef.gov.in/ |
| Ministry of Tribal Affairs | Tribal development and programme evidence | Equity, pilot selection and service-adequacy context | https://tribal.nic.in/ |

## Complementary globally harmonised sources

These are used where they provide reproducible national coverage or independent validation, while Indian authoritative products remain the preferred policy reference.

| Source | Main role |
|---|---|
| VIIRS annual nighttime lights | Observed nighttime activity for PESM and temporal screening |
| GHSL | Harmonised population, built surface and settlement morphology |
| ERA5 / ERA5-Land | Climate and preliminary solar/wind screening |
| Sentinel-1 / Sentinel-2 | High-resolution pilot and infrastructure/land analysis |
| Landsat | Long-term land-cover and surface-change analysis |
| SRTM / other DEMs | Terrain and topographic constraints where justified |

## Citation and evidence-control rules

1. Prefer the original ministry/agency publication over secondary summaries.
2. Record publication/release date and access date for every time-varying statistic.
3. Do not mix installed capacity, generation, technical potential and economic potential.
4. Distinguish connection/access indicators from reliability, adequacy, affordability and productive use.
5. Distinguish climate-resource screening from bankable renewable-resource assessment.
6. Store source URL, dataset/version, spatial resolution, temporal coverage, licence and processing history in metadata.
7. Re-verify all national headline values immediately before proposal submission or public release.

## Repository cross-references

- `docs/data_sources/authoritative_data_sources.md`
- `docs/data_sources/bhuvan_isro_data_availability.md`
- `docs/policy_context/india_energy_security_and_transition_2026.md`
- `docs/methodology/analytical_framework.md`
