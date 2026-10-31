# Eunoria UI Framework

CSS/JS framework for HTML interfaces on top of GTA V Enhanced. Style: black base + semi-transparent overlay + amber accent.

## Files

- `css/eunoria-ui-framework.css` — full framework (tokens, components, responsive).
- `js/eunoria-ui-framework.js` — minimal helpers (tabs, card selection, toasts).
- `index.html` — example page showing every component.
- `README.md` — usage and tokens.
- `AGENTS.md` — context for AI sessions.

## Usage

1. Include fonts and icons (or use the ones from your project).
2. Link `css/eunoria-ui-framework.css`.
3. Wrap your content in `.eu-root` (with `.eu-game-bg` and `.eu-overlay` in the background).
4. Use the `eu-*` classes.

### Consumption via CDN (jsDelivr)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/EunoriaNetwork/eunoria-ui-framework@main/css/eunoria-ui-framework.css">
<script src="https://cdn.jsdelivr.net/gh/EunoriaNetwork/eunoria-ui-framework@main/js/eunoria-ui-framework.js"></script>
```

For production, pin a version with a tag (e.g. `@v1.0.1`) once jsDelivr has indexed it.

## Main tokens

- `--eu-black: #050505` (base black, from the GTA Eunoria project)
- `--eu-overlay: rgba(5, 5, 5, 0.72)` (semi-transparent overlay)
- `--eu-accent: #f5a623` (amber)
- `--eu-font-header: 'Rajdhani'`, `--eu-font-body: 'Inter'`

## Responsive

Supports down to 640x480 as a minimum. Media queries at 900px, 640px and 480px height.

## Components

Typography, buttons, cards, modal/panel, inputs, checkbox/radio/toggle/slider, badges, progress, alerts, tabs, tooltip, toast, list items, table, divider, skeleton, panel with fixed heights, custom gold scrollbar.

## Branches

- `main` — stable, production-ready.
- `development` — testing and work in progress.

## License

Copyright (c) 2026 EunoriaNetwork. All rights reserved.
See `LICENSE` for details. The code may not be copied, modified or
redistributed without prior written permission.

## Contributing

See `CONTRIBUTING.md`.

## Notes

- Custom gold scrollbar (no stripes), own style.
- Small corner radius (4px). For beveled corners use a custom clip-path.
- Compatible with modern CEF. For older CEF (Chromium 63) avoid backdrop-filter and provide fallbacks.
- Repository: https://github.com/EunoriaNetwork/eunoria-ui-framework