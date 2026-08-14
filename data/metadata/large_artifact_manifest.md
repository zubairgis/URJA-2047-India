# Large Artifact Manifest

Large binary outputs are intentionally kept out of ordinary Git history. This repository versions metadata, compact tables, figures and reproducible code; the files below should be stored through institutional storage, Git LFS, release assets or a DOI repository when the hosting arrangement is finalised.

| Artifact | Approx. size | Status / purpose |
|---|---:|---|
| `urja2047_india_pesm_v02_structural_1km_FINAL.tif` | 66.7 MB | Canonical 8-band national PESM v02 raster, 1-km ESRI:54009 grid |
| `urja2047_india_solar_2020_2024_1km_v01.tif` | 131 MB | Preliminary national solar screening raster |
| `urja2047_india_wind10m_screening_2020_2024_1km_v01.tif` | 137 MB | Preliminary 10-m wind-climate screening raster; not hub-height potential |
| `urja2047_india_solar_wind_complementarity_2020_2024_1km_v01.tif` | 123 MB | Preliminary solar-wind temporal complementarity raster |
| `urja2047_pesm_v02_catboost_structural_operational.cbm` | 1.69 MB | Operational structural CatBoost model |
| `urja2047_pesm_v02_spatial_model_sample.csv` | 11.6 MB | 35,000-row modelling sample used for reproducibility |
| `URJA2047_Proposal_Evidence_Package.zip` | ~452 MB | Curated proof-of-concept evidence archive |

## Canonical PESM grid

- CRS: ESRI:54009 / World Mollweide
- Resolution: 1000 m
- Width: 3007 pixels
- Height: 3625 pixels
- Bounds: left 6,365,000; right 9,372,000; bottom 835,000; top 4,460,000 m
- Valid analytical cells: 2,280,332

## Data-access principle

No restricted or third-party source is redistributed in violation of its licence. Bhuvan/ISRO and other Government of India products remain subject to their respective access and terms-of-use conditions. Public releases should include source identifiers, processing scripts, metadata and checksums alongside derived files.
