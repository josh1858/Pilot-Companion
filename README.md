# FlightIntel X5

A self-contained BA Euroflyer pilot planning PWA.

## Run

Serve this folder over HTTPS or a local web server. For GitHub Pages, upload the files in this folder to the repository root and enable Pages.

## Key changes

- Working mission timeline based on flight date, report time, EOBT and taxi-out.
- Crew-at-gate automatically set to EOBT minus 40 minutes.
- Typical LGW airborne time calculated from route distance; landing, on-blocks and duty-end times populate automatically.
- Runway-relative wind components and separate wind-source compass.
- Live Open-Meteo weather with an always-visible offline fallback.
- OpenStreetMap airport view instead of fictional taxi/terminal graphics.
- ORO.FTL.205 reference-table FDP calculation, latest off-blocks and discretion reference.
- Built-in diagnostics for every module and external link.

## Important

This is a planning prototype, not an approved EFB or company operational source. Verify all outputs against current BA Euroflyer manuals, roster systems, approved charts, weather and NOTAM sources.
