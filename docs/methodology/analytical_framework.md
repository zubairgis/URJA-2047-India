# Analytical Framework

URJA-2047 is structured around four linked questions:

1. **USE — What energy/activity is currently observed?**
2. **NEED — What level of energy service is required for adequate development and welfare?**
3. **OPPORTUNITY — Which renewable, storage, grid and efficiency pathways are technically and environmentally feasible?**
4. **PATHWAY — Which combinations minimise cost and carbon while maximising resilience and equity?**

## National analytical backbone

The programme uses a harmonised **1-km equal-area national grid** for national comparison and finer spatial resolution in pilot areas where decision detail is required.

## PESM — Preliminary Energy-Activity Mismatch

PESM compares observed nighttime activity with the activity expected from population, built environment and settlement context. The operational proof-of-concept uses a structural CatBoost model. PESM is standardised by the spatial cross-validation RMSE:

`PESM = (Expected log NTL - Observed log NTL) / Spatial-CV RMSE`

Positive values indicate observed nighttime activity below structural expectation. PESM is **not** a direct measure of household energy poverty, electricity access or electricity consumption.

## ESAG — Energy-Service Adequacy Gap

ESAG formalises the distinction between observed use and adequate service:

`ESAG = Expected Energy Service - Available Energy Service`

Energy-service adequacy will be evaluated through service-relevant evidence for households, health, education, productive activity, cooling, mobility, digital access and public infrastructure rather than darkness alone.

## ETFE — Energy Transition Feasibility Envelope

ETFE represents the feasible set of transition options rather than a single arbitrary weighted index. It will integrate solar, wind, bioenergy, small hydro, rooftop potential, storage, grid access, land, water, environmental constraints, cost and climate exposure.

## 2047 demand model

`D_2047 = D_Existing + D_Development + D_Emerging - D_Efficiency`

This explicitly separates current demand from developmental uplift, emerging loads and efficiency gains.

## Scenario engine

- S0 — Current / baseline trajectory
- S1 — Least-cost / efficiency-led
- S2 — Maximum decarbonisation
- S3 — Equity-first
- S4 — Integrated Viksit Bharat 2047

## Multi-objective optimisation

Candidate pathways will be evaluated on **Cost, Carbon, Climate and Equity** using constraints and Pareto-efficient solutions rather than opaque weighted scoring.

## SEUPA — Sustainable Energy Upliftment Priority Areas

SEUPA identifies locations where developmental energy need and vulnerability converge with feasible sustainable-energy opportunity. SEUPA is therefore an integration product, not a renamed PESM layer.

## Validation

Validation will combine spatial cross-validation, independent administrative statistics, source triangulation and representative field/pilot studies covering tribal/mountain, Northeast, arid, coastal/island and peri-urban settings.
