# India State/UT boundary for the dashboard

Upload the project State/UT boundary GeoJSON here using the exact filename:

`data/boundaries/india_states.geojson`

The dashboard tries this file first. It should contain one feature per State/Union Territory where possible and a State/UT name field such as `shapeName`, `ST_NM`, `STATE`, `STATE_NAME`, `NAME_1`, `NAME`, `name`, `st_nm`, or `state_ut`.

Recommended source: use the same India State/UT boundary dataset used in the URJA-2047 analysis, subject to its licence and national mapping requirements. For a final Government-facing deployment, prefer an authoritative/host-approved Indian boundary source consistent with Bhuvan/NRSC/ISRO or other applicable Government of India geospatial guidance.

Until this file is present, the web dashboard uses a public visualization fallback only to keep the interactive prototype functional. The fallback is not the analytical boundary source.
