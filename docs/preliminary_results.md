# Preliminary Results and Proof of Concept

The current repository contains a national proof of concept demonstrating that the proposed URJA-2047 architecture is computationally feasible before the full five-year programme begins.

## PESM v02 operational structural model

The operational model uses population, built surface, non-residential built surface, built percentage, non-residential share, 5-km population context, 5-km built context, 5-km urban context and GHSL settlement classes. Terrain variables were retained only as a sensitivity formulation because the proposal seeks a structurally interpretable operational screening layer.

### Spatial validation

- Training observations: **35,000**
- Spatial blocks: **396 approximately 100-km groups**
- Validation design: **5-fold spatial StratifiedGroupKFold**
- Operational model: **CatBoost structural formulation**
- Out-of-fold R²: **0.6165**
- Mean fold R²: **0.6140**
- Minimum fold R²: **0.5759**
- RMSE: **1.1037 log-NTL units**
- MAE: **0.7509**

The terrain-conditioned CatBoost sensitivity model reached OOF R² ≈ **0.6480**, but the structural model was selected for operational mapping because it is conceptually cleaner for a human/built-environment expectation baseline and avoids terrain becoming part of the policy interpretation of need.

## National PESM raster

The canonical national raster is on an exact **3007 × 3625**, **1-km equal-area** grid. It contains **2,280,332 valid analytical cells**.

- PESM > 0: **944,997 cells (41.44%)**
- PESM ≥ 1 spatial-CV RMSE: **361,011 cells (15.83%)**
- PESM ≥ 2 spatial-CV RMSE: **174,834 cells (7.67%)**
- Mean standardized PESM: **-0.009**
- Median standardized PESM: **-0.184**

These values identify lower-than-expected nighttime activity relative to structural expectation. They are **screening signals only** and must not be described as direct estimates of electricity deprivation or energy poverty.

## Feature behaviour

The final structural CatBoost importance is dominated by contextual built environment and population variables. The largest contributions are 5-km built context, 5-km population context, built percentage and local built surface. This is consistent with the intended interpretation of the model as an expected activity baseline conditioned on settlement structure.

## Renewable-energy proof of concept

National 1-km screening layers have also been generated for:

- solar resource climatology,
- 10-m wind screening,
- solar-wind seasonal complementarity and hybrid variability.

These layers are preliminary evidence for the **OPPORTUNITY** component and will be replaced or strengthened by authoritative Indian resource datasets, higher-resolution products and technical constraints during the proposed Chair programme.

## Proposal significance

The proof of concept is not presented as a completed national energy-transition model. Its purpose is to demonstrate that the Chair can integrate national geospatial evidence, explainable machine learning, renewable-resource screening and policy-facing diagnostics into a reproducible decision framework that can subsequently be expanded to ESAG, ETFE, SEUPA, 2047 demand scenarios and the URJA-2047 Digital Twin.
