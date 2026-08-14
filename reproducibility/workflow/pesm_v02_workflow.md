# PESM v02 Reproducibility Workflow

This file records the operational proof-of-concept workflow used for the preliminary national PESM v02 result.

## 1. Analytical target

The model predicts the logarithm of mean annual VIIRS nighttime radiance for 2022–2024 from structural settlement variables. PESM is the difference between expected and observed log radiance, standardised by the spatial cross-validation RMSE.

## 2. Structural predictors

Final operational feature set:

1. `ln_pop`
2. `ln_built`
3. `ln_nres`
4. `built_pct`
5. `nres_share`
6. `ln_pop_context_5km`
7. `ln_built_context_5km`
8. `urban_context_5km`
9. `smod_11`
10. `smod_12`
11. `smod_13`
12. `smod_21`
13. `smod_22`
14. `smod_23`
15. `smod_30`

The terrain-conditioned sensitivity model additionally used elevation and slope, but the structural formulation was selected for operational mapping.

## 3. Training design

- 35,000 observations.
- Balanced sampling across GHSL settlement classes 11, 12, 13, 21, 22, 23 and 30.
- Approximately 100-km spatial grouping.
- 396 unique spatial blocks.
- 5-fold `StratifiedGroupKFold` with no group overlap between training and validation partitions.

Algorithms compared: Random Forest, ExtraTrees, XGBoost and CatBoost under structural-only and structural-plus-terrain formulations.

## 4. Operational model

CatBoost structural formulation:

- iterations: 400
- depth: 8
- learning rate: 0.04
- L2 leaf regularisation: 5
- random seed: 2047

Spatial validation:

- OOF R² = 0.6165
- mean fold R² = 0.6140
- minimum fold R² = 0.5759
- RMSE = 1.1037
- MAE = 0.7509

## 5. Earth Engine export strategy

The first national export attempts failed because explicit reprojection of fine-resolution inputs produced excessively large intermediate computations. The successful workflow therefore:

- removed SRTM terrain from the operational export graph;
- avoided explicit `ee.Image.reproject()`;
- aggregated native GHSL/VIIRS sources locally;
- used `setDefaultProjection()` for the 1-km working grid;
- exported an 8 × 8 national tile grid using the exact target CRS and transform;
- exported 10 source bands per tile: observed NTL, eight structural continuous/context variables and SMOD.

## 6. Local CatBoost inference

In Colab, each exported raster tile was read with Rasterio. SMOD was one-hot encoded to the seven model dummy variables and the saved CatBoost model was applied only to valid human-presence pixels.

Output bands:

1. observed NTL
2. expected NTL
3. observed log NTL
4. expected log NTL
5. activity gap in log space
6. signed standardised PESM
7. positive PESM
8. screening class

Screening classes:

- 0: PESM < 1
- 1: 1 ≤ PESM < 2
- 2: PESM ≥ 2

## 7. Exact-grid normalisation

The initial Rasterio merge introduced a one-pixel padded row/column because of output-bound alignment. The canonical product was normalised with a `WarpedVRT` to the authoritative URJA grid:

- CRS: ESRI:54009
- transform origin: left 6,365,000 m; top 4,460,000 m
- pixel size: 1000 × 1000 m
- width: 3007
- height: 3625

The normalised raster reproduced all scientific statistics exactly, confirming that the correction affected only the padded outer extent.

## 8. Interpretation constraint

PESM must always be described as a **preliminary lower-than-expected energy/activity screening signal**. It is not electricity consumption, electricity access, reliability or household energy poverty. Policy interpretation requires convergence with independent ESAG, socioeconomic, reliability and renewable-feasibility evidence.
