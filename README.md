# FlightIntel X7

A GitHub Pages-ready progressive web app for BA Euroflyer planning workflows, redesigned in a premium red, white and blue glass cockpit theme.

## X6 intelligence features

- Predictive **delay impact lab**: move one slider to see revised EOBT, landing, destination-local time, ETA weather, wind-favoured runway and FDP margin.
- **Arrival intelligence**: forecast weather nearest the planned landing time, visibility, precipitation probability, daylight status and runway-relative wind components.
- **Operational change detection**: save a baseline and highlight material changes after a refresh.
- **Critical path countdown**: live clocks to report, crew-at-gate, EOBT, latest off-blocks before discretion and landing.
- **Mission reminders**: optional browser notifications for key planning markers.
- **Transparent complexity model**: separate Weather, Wind, Airport, Duty and Timing contributions instead of an unexplained score.
- **Data trust layer**: online state, live/fallback weather, feed age, forecast horizon, context age and offline-cache state.
- **Destination context**: sunrise, sunset, public-holiday check and official operational links.
- **Nearby BA Euroflyer airport awareness** with one-tap destination loading (geographic awareness only, not alternate suitability).
- **Flight deck mode**, auto-refresh, quick-action command palette and exportable mission JSON.
- Existing working timeline, FTL/latest off-block planner, runway/wind vectors, airport map, automatic brief and EFB tools remain included.

## Run

Serve the folder over HTTPS or a local web server. For GitHub Pages, upload the files at the archive root to the repository root and enable Pages.

## Production data note

The prototype uses Open-Meteo for model weather, Nager.Date for public-holiday context, OpenStreetMap embeds and external links to approved/public aviation services. A production or commercial deployment should use appropriately licensed, supported data feeds and should not treat browser notifications as operational alerting.

## Safety

FlightIntel is a planning prototype, not an approved EFB, company manual, operational flight plan, chart, METAR/TAF authority, NOTAM source or FTL authority. Verify every operational output against current BA Euroflyer manuals, roster systems, approved charts and authorised data sources.


## X7 duty-planning upgrade

- Comprehensive embedded BA Euroflyer short-haul network, including year-round and seasonal Gatwick destinations.
- Multi-sector FDP planner with editable flight, taxi and turnaround times.
- Backward latest-off-block calculations for every sector, including local time at the departure airport.
- Planned extension validation by sectors and WOCL category.
- Commander discretion reference calculated from the basic maximum FDP, not treated as a planning entitlement.

All airport/runway data is reference-only and must be verified against current approved charts and company systems.
