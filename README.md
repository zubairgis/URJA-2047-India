# URJA-2047 India

## Geospatial Energy Transition Intelligence Framework

**URJA-2047 India** is a national geospatial research framework for supporting a sustainable, equitable and climate-resilient energy transition towards **Viksit Bharat 2047**.

The project addresses India's dual energy-transition challenge: (1) decarbonising high-use and fossil-intensive regions, and (2) enabling sustainable energy upliftment in underserved, tribal, mountain, remote, backward, coastal and island regions without creating new fossil-fuel lock-in.

### Core research logic

**USE → NEED → OPPORTUNITY → PATHWAY**

Cross-cutting decision dimensions: **COST | CARBON | CLIMATE | EQUITY**

The framework integrates:

- **PESM — Preliminary Energy-Activity Mismatch:** expected versus observed energy/activity signal.
- **ESAG — Energy-Service Adequacy Gap:** expected energy service minus available energy service.
- **ETFE — Energy Transition Feasibility Envelope:** renewable, storage, grid, land, water and cost constraints.
- **SEUPA — Sustainable Energy Upliftment Priority Areas:** places where developmental energy need, vulnerability and sustainable-energy opportunity converge.
- **2047 Demand Model:** `D_2047 = D_Existing + D_Development + D_Emerging - D_Efficiency`.
- **Scenario Engine:** S0 Current, S1 Least-Cost, S2 Maximum Decarbonisation, S3 Equity First, S4 Integrated Viksit Bharat 2047.
- **URJA-2047 Digital Twin:** interactive geospatial decision-support environment for scenario testing, policy analysis and transparent evidence communication.

## Preliminary proof of concept

A national 1-km PESM v02 structural CatBoost model has been completed as preliminary evidence. It was spatially validated using 100-km grouped folds and achieved an out-of-fold R² of **0.6165**. The final national analytical raster contains **2,280,332 valid 1-km cells**; **15.83%** have standardized PESM ≥ 1 RMSE and **7.67%** have PESM ≥ 2 RMSE. These are screening signals only and must not be interpreted directly as energy poverty or deprivation.

## Repository structure

- `proposal/` — PMRC proposal and supporting documents.
- `docs/` — conceptual framework, methodology, data sources, policy context and references.
- `figures/` — framework, PESM, renewable-energy and multipanel figures.
- `data/` — metadata, small processed tables and data documentation. Large rasters are not stored directly in Git.
- `models/` — model definitions, validation summaries and explainability outputs.
- `notebooks/` — reproducible notebooks by analytical objective.
- `src/` — production scripts for Google Earth Engine, Python and R.
- `results/` — curated analytical outputs and summaries.
- `digital_twin/` — future dashboard, API and configuration components.
- `pilots/` — validation design for representative Indian landscapes.
- `policy/` — policy briefs, government evidence and scenario outputs.
- `reproducibility/` — environment definitions, manifests and workflow documentation.

## Data philosophy

The project prioritises Indian public-data infrastructure and authoritative sources including **Bhuvan/ISRO, MNRE, NIWE, CEA and other Government of India systems**, supplemented by globally consistent Earth-observation and climate datasets where scientifically appropriate. Third-party data remain subject to their original licences and terms of use.

## Status

**Research Chair proposal / preliminary proof-of-concept stage.** The repository will be expanded as the PMRC programme progresses.

## Citation

See `CITATION.cff` for the recommended project citation.
