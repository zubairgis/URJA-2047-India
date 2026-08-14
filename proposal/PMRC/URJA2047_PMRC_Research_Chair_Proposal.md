# PRIME MINISTER RESEARCH CHAIR (PMRC)
## RESEARCH CHAIR PROPOSAL

# URJA-2047 INDIA
## A Geospatial Energy Transition Intelligence Framework for Energy Demand, Energy-Service Equity, Renewable Feasibility and Climate-Resilient Pathways towards Viksit Bharat 2047

**Primary thematic area:** Energy, Sustainability and Climate Change  
**Cross-cutting areas:** Space and Earth Observation; AI and Advanced Computing; Sustainable Development; Energy Security; Tribal and Regional Equity  
**Chair candidate:** Professor Zubairul Islam, PhD — GIS, Remote Sensing and Geospatial AI  
**Proposed host institution:** *PMRC-eligible Government HEI / national research institution to be inserted*  
**Duration:** 60 months  
**Geographic scope:** India; 1-km national equal-area analytical backbone with finer pilot-area analysis  

---

## 1. Executive Summary

India's development pathway to 2047 will be energy intensive, climate constrained and spatially uneven. The country must accommodate rising demand from a very large population and expanding economy while reducing exposure to imported petroleum and natural gas, lowering carbon intensity, strengthening resilience and ensuring that underserved regions gain adequate energy services without creating new fossil-fuel lock-in. Government reporting has highlighted the strategic scale of India's import exposure: during 2024–25 the country met about 88% of crude-oil needs and 51% of gas needs through imports. At the same time, India is rapidly expanding renewable energy; MNRE reports 162.15 GW solar and 57.44 GW wind capacity as of 30 June 2026. The policy challenge is therefore no longer simply to add renewable capacity, but to determine where energy services are inadequate, which low-carbon options are feasible, where grid and storage investments are required, and how cost, carbon, climate and equity should jointly shape investment.

**URJA-2047 India** proposes a national **Geospatial Energy Transition Intelligence Framework** and Digital Twin that integrates remote sensing, GIS, authoritative Indian energy statistics, socioeconomic evidence and artificial intelligence into decision-ready intelligence for a sustainable and equitable transition. The framework is designed around four linked questions: **USE → NEED → OPPORTUNITY → PATHWAY**, evaluated across **COST | CARBON | CLIMATE | EQUITY**.

The Research Chair will develop three principal decision products. **ESAG — Energy-Service Adequacy Gap** will distinguish observed energy/activity from the level of energy service required for adequate development and welfare. **ETFE — Energy Transition Feasibility Envelope** will identify technically, environmentally and economically feasible combinations of solar, wind, bioenergy, small hydro, rooftop systems, storage, grid extension and efficiency. **SEUPA — Sustainable Energy Upliftment Priority Areas** will identify places where developmental energy need and vulnerability converge with feasible sustainable-energy opportunity.

A rapid national proof of concept has already demonstrated technical feasibility. A 1-km baseline integrates GHSL population, built surface and settlement morphology with VIIRS nighttime lights and preliminary ERA5-Land solar and wind resource screening. A structural CatBoost model trained on 35,000 observations and evaluated with 100-km spatially grouped cross-validation achieved out-of-fold R² = **0.6165** and RMSE = **1.1037**. The exact-grid national PESM v02 raster contains **2,280,332 valid analytical cells**; **15.83%** exceed one spatial-validation RMSE below structural expectation and **7.67%** exceed two RMSE. PESM is explicitly treated as a screening signal rather than a direct estimate of electricity access, consumption or energy poverty.

The five-year Chair will expand this proof of concept into a harmonised national energy-transition data cube, independent energy-service adequacy models, authoritative renewable-resource and infrastructure layers, 2047 demand scenarios, cost-carbon-climate-equity optimisation, representative pilot validation and an operational URJA-2047 Digital Twin. The programme will produce national and administrative-level datasets, open reproducible workflows, scientific publications, policy briefs, training programmes and a long-term institutional digital platform for Viksit Bharat 2047.

---

## 2. Strategic Rationale and National Importance

### 2.1 Energy security and import dependence

India's dependence on imported crude oil and natural gas creates exposure to global prices, geopolitical disruption, maritime chokepoints and foreign-exchange pressure. Government briefings during the 2026 West Asia disruption demonstrated that diversification of crude routes, LNG procurement, stock monitoring and priority allocation are now central national energy-security functions. Long-term reduction of fossil import exposure therefore requires spatial intelligence on where electrification, renewable substitution, efficiency, bioenergy, storage and decentralised systems can deliver the highest system and development value.

### 2.2 Rapid renewable growth creates a planning challenge

MNRE reports total renewable capacity including large hydro of approximately 288.59 GW as of 30 June 2026. India is simultaneously planning very large additions in generation, transmission and storage. CEA's planning system includes National Electricity Plans, rolling resource-adequacy studies, pumped-storage planning and transmission plans for integrating more than 500 GW of non-fossil capacity by 2030 and larger volumes thereafter. This scale of transition requires spatial integration of resource quality, demand, grid, storage, land, water, climate exposure and equity.

### 2.3 Developmental energy demand is not the same as observed use

Observed consumption can be low because services are inadequate. Low nighttime radiance may reflect deprivation, but it may also reflect settlement form, economic structure, lighting practices, terrain or other factors. URJA-2047 therefore rejects the assumption that darkness equals energy poverty. It explicitly separates **observed use** from **adequate energy-service need** and requires convergence of multiple evidence streams before policy classification.

### 2.4 Why geospatial intelligence is essential

India's energy transition is geographically heterogeneous. Dense metropolitan regions, industrial corridors, irrigated agricultural belts, tribal districts, Himalayan settlements, arid zones, islands and coastal regions require different technology portfolios. A national average cannot identify where rooftop solar, distributed storage, wind-solar hybrids, grid reinforcement, efficient cooling, productive-use electrification or decentralised systems are most appropriate. Geospatial intelligence is therefore required to translate national targets into place-specific pathways.

---

## 3. Research Gap

India has strong energy statistics, world-class Earth-observation infrastructure and rapidly expanding renewable-energy programmes, but these systems are rarely integrated into one national analytical framework that answers energy-use, adequacy, feasibility, resilience and equity questions together.

The key gaps are:

1. Renewable-resource maps often identify technical resource potential without resolving where developmental energy-service need is greatest.
2. Administrative energy statistics do not naturally align with satellite-derived population, buildings, settlement structure, land, climate risk and renewable-resource surfaces.
3. Energy-access indicators can report connection or coverage while missing adequacy, reliability, affordability and productive-use dimensions.
4. Transition studies commonly optimise cost and carbon but under-represent climate resilience and spatial equity.
5. Existing national digital platforms are not yet integrated into an open, scenario-based geospatial energy-transition Digital Twin linking demand, resource, grid, storage, cost, carbon, climate and equity.

---

## 4. Aim

**To develop, validate and operationalise a national Geospatial Energy Transition Intelligence Framework and Digital Twin that identifies energy-service adequacy gaps, renewable-energy feasibility envelopes and equitable, climate-resilient transition pathways for Viksit Bharat 2047.**

---

## 5. Specific Objectives

1. **National Energy Data Cube:** Build a harmonised national data cube integrating Bhuvan/ISRO, MNRE, NIWE, CEA, PPAC, MoSPI, NITI Aayog, Census/administrative evidence, climate, population, built-environment, land, water and infrastructure data on a 1-km equal-area backbone.
2. **USE and NEED:** Develop and validate PESM and ESAG to distinguish observed energy activity from adequate energy-service need, with specific attention to tribal, mountain, remote, backward and underserved regions.
3. **OPPORTUNITY:** Develop ETFE by integrating solar, wind, bioenergy, small hydro, rooftop potential, storage, grid proximity, land, water, environmental constraints, cost and climate exposure.
4. **2047 Demand and System Matching:** Model existing, developmental and emerging demand, efficiency gains, resource complementarity, grid/storage requirements and climate-sensitive demand to 2047.
5. **PATHWAY and SEUPA:** Identify cost-carbon-climate-equity Pareto-efficient pathways and map Sustainable Energy Upliftment Priority Areas.
6. **Validation, Digital Twin and Translation:** Validate the framework in representative pilot landscapes and deploy the URJA-2047 Digital Twin, APIs, policy briefs, open workflows and capacity-building programmes.

---

## 6. Research Questions

- Where are observed energy/activity signals materially below structural expectation after accounting for population, built environment and settlement context?
- Where are energy services inadequate relative to health, education, livelihoods, cooling, mobility, digital access and public-service requirements?
- Which renewable, storage, grid and efficiency portfolios are feasible in different ecological and administrative settings?
- How will existing, developmental and emerging demand change to 2047 under efficiency, climate and economic-development assumptions?
- Which pathways minimise cost and carbon while improving resilience and equity?
- Where should India prioritise sustainable energy upliftment to avoid both energy-service deprivation and new fossil lock-in?

---

## 7. Core Scientific Constructs

### 7.1 PESM — Preliminary Energy-Activity Mismatch

PESM compares observed nighttime activity with modelled structural expectation:

`PESM = (Expected log NTL - Observed log NTL) / Spatial-CV RMSE`

Positive values indicate nighttime activity below expectation given population, built environment and settlement context. PESM is a screening signal only.

### 7.2 ESAG — Energy-Service Adequacy Gap

`ESAG = Expected Energy Service - Available Energy Service`

ESAG will incorporate service-specific evidence for households, health, education, cooling, livelihoods, mobility, digital access and public infrastructure. Darkness alone will never be sufficient to classify deprivation.

### 7.3 ETFE — Energy Transition Feasibility Envelope

ETFE is a feasible set rather than a single arbitrary weighted index:

`ETFE = {solar, wind, bioenergy, hydro, rooftop, storage, grid, land, water, environment, cost, climate}`

Technology options will be filtered through physical, regulatory, environmental and infrastructure constraints and evaluated using scenario and Pareto methods.

### 7.4 SEUPA — Sustainable Energy Upliftment Priority Areas

SEUPA identifies places where **high developmental energy need + vulnerability + feasible sustainable-energy opportunity** converge. SEUPA is therefore an integration product, not a renamed nighttime-lights or PESM map.

---

## 8. Preliminary Proof of Concept

A national proof of concept was completed to establish feasibility before submission.

### 8.1 PESM v02 spatial model

- Training sample: 35,000 balanced observations.
- Spatial grouping: 396 approximately 100-km blocks.
- Validation: 5-fold spatial StratifiedGroupKFold.
- Operational algorithm: CatBoost structural formulation.
- OOF R²: 0.6165.
- Mean fold R²: 0.6140.
- Minimum fold R²: 0.5759.
- RMSE: 1.1037 log-NTL units.
- MAE: 0.7509.

A terrain-conditioned sensitivity formulation achieved higher OOF R² (~0.6480), but the structural model was chosen for operational screening because it gives a clearer population/built-environment expectation baseline and avoids interpreting terrain as developmental need.

### 8.2 National raster result

The final PESM raster uses an exact 3007 × 3625, 1-km equal-area grid and contains 2,280,332 valid analytical cells.

- PESM > 0: 944,997 cells (41.44%).
- PESM ≥ 1: 361,011 cells (15.83%).
- PESM ≥ 2: 174,834 cells (7.67%).

The distribution is spatially heterogeneous. State/UT diagnostics show particularly high screening extent in several Himalayan and Northeast regions, while Rajasthan contributes the largest absolute area above the ≥1 threshold. These patterns are hypotheses for ESAG validation, not conclusions about poverty.

### 8.3 Renewable-resource proof of concept

National 1-km screening products have been generated for 2020–2024 solar resource, 10-m wind climate and solar-wind temporal complementarity using ERA5-Land. These products demonstrate the OPPORTUNITY workflow but are explicitly labelled preliminary: 10-m ERA5-Land wind is not turbine hub-height potential, and the complementarity metric is not an optimised dispatch model.

---

## 9. Data Architecture

The research will prioritise Indian authoritative data and use globally harmonised products where they provide reproducible national coverage.

| Data domain | Priority sources | Planned role |
|---|---|---|
| Indian geospatial base | Bhuvan/NRSC, Bhoonidhi, ISRO thematic services | LULC, EO imagery, thematic layers, NTL, national geospatial context |
| Renewable energy | MNRE, NIWE, NISE/Indian solar products, CEA | Resource assessment, capacity, programme and grid planning |
| Petroleum and gas | PPAC, MoPNG | Import exposure, product demand, fuel substitution context |
| Electricity system | CEA, Ministry of Power, utilities/DISCOMs where available | Demand, generation, transmission, storage, adequacy and reliability |
| Population and settlements | Census/official statistics, GHSL where needed | Population, built environment, settlement context |
| Economy and development | MoSPI, NITI Aayog, administrative programme datasets | Developmental demand, vulnerability, services and equity |
| Climate and water | IMD, India-WRIS/CWC, ERA5-Land and other validated climate sources | Heat, drought, flood, water and renewable-resource variability |
| High-resolution pilots | Sentinel-1/2, Landsat and Indian EO data | Local validation and infrastructure/environment detail |

All datasets will retain source, licence, spatial/temporal reference, uncertainty and evidence-maturity metadata.

---

## 10. Methodology and Work Packages

### WP1 — National Energy Transition Data Cube

Harmonise datasets to a 1-km equal-area national grid. Develop versioned data dictionaries, QA/QC, lineage, administrative aggregation and uncertainty metadata. Finer-resolution pilot cubes will be generated where source data allow.

### WP2 — Energy Use, Activity and Service Adequacy

Extend PESM through independent validation. Build ESAG using service-specific reference variables for households, health, education, productive activities, cooling, digital services and public infrastructure. Model adequacy by settlement and administrative context rather than applying a single national threshold.

### WP3 — Renewable and Infrastructure Feasibility

Construct ETFE for solar, wind, rooftop PV, bioenergy, small hydro, storage and grid options. Incorporate land, slope, water, protected/ecologically sensitive areas, settlement proximity, transmission access, variability, resource complementarity and technology-specific costs.

### WP4 — 2047 Demand, Grid and Storage

Use the formulation:

`D_2047 = D_Existing + D_Development + D_Emerging - D_Efficiency`

Developmental demand will capture improved service levels; emerging demand will include electrified mobility, cooling, digital infrastructure and industrial change; efficiency will reduce gross demand. Climate-sensitive demand and renewable variability will be linked to storage and grid needs.

### WP5 — Multi-objective Pathway Optimisation and SEUPA

Evaluate candidate portfolios through constraints and Pareto efficiency across cost, carbon, climate resilience and equity. Avoid opaque weighted indices where decision trade-offs can be shown explicitly. Produce national, State/UT, district and pilot-level SEUPA outputs.

### WP6 — Validation, Digital Twin and Policy Translation

Validate in representative landscapes, deploy dashboards/APIs, publish policy briefs, maintain open workflows, run training programmes and institutionalise the platform at the host institution.

---

## 11. 2047 Scenarios

- **S0 — Current/Baseline:** continuation of observed infrastructure and policy trajectory.
- **S1 — Least-Cost/Efficiency:** strong efficiency and least-cost system expansion.
- **S2 — Maximum Decarbonisation:** aggressive fossil displacement and renewable/storage expansion.
- **S3 — Equity First:** prioritisation of developmental energy-service adequacy and underserved geographies.
- **S4 — Integrated Viksit Bharat 2047:** balanced cost-carbon-climate-equity pathway.

Scenario outputs will include energy demand, technology mix, storage, grid requirement, avoided fossil use, avoided emissions, cost and spatial equity indicators.

---

## 12. Pilot Validation Strategy

Pilot landscapes will be selected using transparent criteria and host/government consultation rather than convenience sampling. The programme will seek representation of:

1. tribal/mountain landscapes;
2. Northeast India;
3. arid and high-solar regions;
4. coastal/island systems;
5. peri-urban/high-growth transition zones.

Validation will combine field observations, administrative statistics, facility/service evidence, stakeholder knowledge, utility data where accessible and high-resolution Earth observation.

---

## 13. URJA-2047 Digital Twin

The Digital Twin will be a persistent decision-support environment rather than a static website. Planned components include:

- national and administrative dashboards;
- map services and APIs;
- scenario controls;
- demand and technology portfolio comparison;
- PESM/ESAG/ETFE/SEUPA visualisation;
- uncertainty and evidence-maturity display;
- downloadable policy tables and briefs;
- reproducible code and data provenance;
- host-institution training and maintenance documentation.

The design will prioritise open standards, Indian public-data systems, reproducibility and long-term institutional ownership.

---

## 14. Five-Year Implementation Plan

| Year | Major activities |
|---|---|
| Year 1 | Governance, data agreements, national data cube v1, PESM refinement, authoritative Indian data integration, pilot selection |
| Year 2 | ESAG development, service-adequacy validation, renewable/land/grid feasibility layers, training programme launch |
| Year 3 | 2047 demand model, storage/grid modules, cost-carbon-climate models, pilot field validation, Digital Twin beta |
| Year 4 | ETFE/SEUPA national atlas, scenario optimisation, pilot policy co-design, APIs and institutional training school |
| Year 5 | Final Digital Twin, national synthesis, policy handbook, datasets, publications, capacity handover and sustainability plan |

---

## 15. Expected Outputs and KPIs

| Output | Five-year target |
|---|---|
| National data infrastructure | Versioned 1-km Energy Transition Data Cube with metadata and administrative reporting |
| Core scientific products | PESM, ESAG, ETFE, SEUPA and 2047 scenario products |
| Digital infrastructure | Operational URJA-2047 Digital Twin, APIs and scenario engine |
| Scientific publications | 8–10 high-quality peer-reviewed papers across energy, remote sensing, AI and policy |
| Policy translation | National/State atlases, district/pilot briefs, transition-priority guidance |
| Capacity building | PhD/postdoctoral mentorship, annual training school, geospatial-energy short courses and code clinics |
| Partnerships | Government, host-institution, state-energy/utility and research collaborations |
| Open science | Versioned GitHub repository, metadata, reproducible notebooks and public releases where licences permit |

---

## 16. Capacity Building and Institutional Legacy

The Chair will create an interdisciplinary geospatial-energy research group at the host institution and train students and early-career researchers in GIS, remote sensing, energy systems, AI, spatial statistics, reproducible computing and policy translation. Training will be designed around Indian datasets and real planning problems. The Digital Twin, curriculum, codebase, metadata system and government partnerships will remain as institutional assets beyond the Chair period.

---

## 17. Risk Management

| Risk | Mitigation |
|---|---|
| Restricted utility or commercial data | Begin with public/authoritative proxies; establish MoUs; store sensitive data securely; aggregate before publication |
| Misinterpretation of nighttime lights/PESM | Maintain screening-only terminology; require ESAG convergence and independent validation before policy classification |
| Model transferability | Spatial cross-validation, administrative validation, independent pilot validation and explicit uncertainty |
| Renewable-resource uncertainty | Prioritise NIWE/MNRE/ISRO products; compare independent sources; separate climate screening from bankable resource assessment |
| Computational scale | Tiled/cloud/HPC workflows, reproducible environments, versioned intermediate products |
| Policy uptake | Co-design with host institution and government users from Year 1; produce administrative outputs and policy briefs |
| Long-term platform maintenance | Open standards, documented APIs, institutional hosting and staff/student training |

---

## 18. Indicative Budget Framework

The final budget will follow PMRC scheme and host-institution rules. Major heads are expected to include:

- research personnel and fellows;
- high-performance/cloud computing, storage and servers;
- data acquisition and official datasets where paid;
- field validation and stakeholder consultations;
- workstations/GPU and mobile/GNSS survey equipment as permitted;
- Digital Twin/API development and hosting;
- training schools, workshops and policy labs;
- dissemination, publication and open-data release;
- travel and collaboration within approved norms.

A detailed year-wise budget will be finalised with the host institution after confirming available institutional infrastructure and scheme ceilings.

---

## 19. Ethical, Data and Open-Science Principles

URJA-2047 will not infer household deprivation or individual behaviour from remote sensing. Public reporting will use aggregate geospatial units. Sensitive utility or household data will be governed by host-institution ethics, legal agreements and secure access controls. Data provenance and uncertainty will be visible in the Digital Twin. Third-party data will not be redistributed contrary to licence terms. Code, metadata and derived public-good outputs will be released openly where permitted.

---

## 20. Conclusion

URJA-2047 India is designed to convert India's energy statistics, Earth-observation assets and rapidly expanding renewable-energy system into a national geospatial intelligence framework for 2047. Its scientific contribution is the explicit separation of **observed use, adequate need, feasible opportunity and optimised pathway**. Its policy contribution is the ability to identify where decarbonisation, energy security, climate resilience and sustainable energy upliftment should be pursued together.

The national proof of concept demonstrates that the proposed Chair can move rapidly from concept to operational evidence. The PMRC mechanism provides an appropriate institutional platform to scale this work into a long-term Indian research capability and digital public-good infrastructure for energy, sustainability and climate-change decision making.

---

## 21. Key Authoritative References

1. Central Electricity Authority. *National Electricity Plan — Vol. I: Generation* and associated Integrated Resource Planning reports. https://cea.nic.in/documents-of-cea/?lang=en
2. Central Electricity Authority. Integrated Resource Planning-I and resource-adequacy programme. https://cea.nic.in/integrated-resource-planning-division/?lang=en
3. Ministry of New and Renewable Energy. *Physical Achievements*, cumulative renewable capacity as of 30 June 2026. https://mnre.gov.in/en/physical-progress/
4. Petroleum Planning & Analysis Cell, Ministry of Petroleum & Natural Gas. Import/export and petroleum-sector statistics. https://ppac.gov.in/import-export
5. Press Information Bureau, Ministry of Petroleum & Natural Gas, 29 October 2025. Energy and import-dependence statement. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2183703
6. Press Information Bureau, Ministry of Petroleum & Natural Gas, 12 March 2026. Statement on global energy-supply disruptions and energy security. https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2239021
7. Ministry of Statistics and Programme Implementation. *Energy Statistics India 2026*, announced 30 March 2026. https://www.pib.gov.in/PressReleasePage.aspx?PRID=2246819
8. NRSC/ISRO. Bhuvan Indian Geo Platform. https://bhuvan.nrsc.gov.in/home/
9. NRSC/ISRO. Bhuvan WMS/WMTS and thematic services. https://bhuvan.nrsc.gov.in/wiki/index.php/How_to_use_WMS_services
10. ISRO. Earth Observation applications for renewable energy. https://www.isro.gov.in/RenewableEnergy.html
11. URJA-2047 Preliminary Evidence Package, 2026. PESM v02 validation, final national screening statistics, renewable-resource screening and State/UT diagnostics contained in this repository/evidence archive.

---

## Repository-linked Preliminary Evidence

- `docs/preliminary_results.md`
- `models/validation/urja2047_pesm_v02_spatial_cv_summary.csv`
- `models/pesm_v02/urja2047_pesm_v02_structural_feature_importance.csv`
- `results/pesm/urja2047_india_pesm_v02_FINAL_screening_summary.csv`
- `results/pesm/urja2047_india_pesm_v02_FINAL_metadata.json`
- `results/state_ut/urja2047_pesm_v02_state_ut_diagnostics.csv`
- `results/renewable_resources/urja2047_wind_metadata_v01.csv`
- `results/renewable_resources/urja2047_solar_wind_complementarity_metadata_v01.csv`
- `figures/framework/urja_2047_geospatial_energy_framework.svg`
- `figures/pesm/pesm_structural_feature_importance.svg`
- `figures/pesm/pesm_spatial_cv_r2_comparison.svg`
- `figures/state_diagnostics/pesm_top15_state_screening.svg`
