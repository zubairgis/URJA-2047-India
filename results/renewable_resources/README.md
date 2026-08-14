# Preliminary Renewable-Energy Evidence

The files in this folder document the preliminary **OPPORTUNITY** proof of concept. They demonstrate the analytical workflow but are not substitutes for detailed NIWE/MNRE/ISRO/CEA engineering assessments.

## Current preliminary products

### Solar 2020–2024

A national 1-km solar screening raster was generated from ERA5-Land monthly aggregated data for 2020–2024. It is retained in the external evidence archive as `urja2047_india_solar_2020_2024_1km_v01.tif`.

Use: regional solar-climate screening and seasonal comparison.  
Planned upgrade: Indian solar-resource products, rooftop/building constraints, land availability, grid and cost modules.

### Wind 2020–2024

Metadata: [`urja2047_wind_metadata_v01.csv`](urja2047_wind_metadata_v01.csv)

The current product is a **10-m ERA5-Land climate screening layer**, not turbine hub-height wind potential. It must therefore not be interpreted as bankable wind-resource assessment. The proposed Chair will prioritise NIWE wind-atlas/resource evidence and technical hub-height modelling.

### Solar-wind temporal complementarity

Metadata: [`urja2047_solar_wind_complementarity_metadata_v01.csv`](urja2047_solar_wind_complementarity_metadata_v01.csv)

Preliminary complementarity is defined as:

`C = (1 - r_monthly_climatology) / 2`

where `r` is the correlation between 12-month solar and wind climatologies. A simple equal-weight hybrid variability surface was also produced after normalising each resource by its own climatological mean.

This is an exploratory temporal-resource indicator, not an optimised dispatch, storage or generation model.

## Planned ETFE upgrade

The Chair programme will integrate:

- NIWE wind resource and technical constraints;
- MNRE/NISE/ISRO solar evidence;
- rooftop PV potential;
- bioenergy feedstock and logistics;
- small-hydro and pumped-storage evidence;
- transmission/grid access;
- land, water, protected-area and ecological constraints;
- climate hazards and interannual variability;
- technology cost and storage;
- demand proximity and service-equity need.

These components will form the **Energy Transition Feasibility Envelope (ETFE)** rather than a single arbitrary weighted suitability index.
