# AGENTS.md — Eunoria UI Framework

## Description
CSS/JS framework for HTML interfaces on top of GTA V Enhanced. Style inspired by the JetSam job script: black base `#050505` + semi-transparent overlay + amber accent `#f5a623`. Classes use the `eu-` prefix. Responsive minimum 640x480.

## Structure
- `css/eunoria-ui-framework.css` — full framework (tokens, components, responsive).
- `js/eunoria-ui-framework.js` — helpers (tabs, card selection, toasts).
- `index.html` — example page showing every component.
- `README.md` — usage and tokens.
- `.gitignore` — exclusions.

## Conventions
- Class prefix: `eu-` (e.g. `eu-btn`, `eu-card`, `eu-modal`).
- CSS variables: `--eu-*`.
- Data attributes: `data-eu-*`.
- Global toast: `window.euToast(msg, type)`.
- No stripes on the scrollbar (own style).
- Base black `#050505`, overlay `rgba(5, 5, 5, 0.72)`.

## Commands
```powershell
cd C:\Users\gmcp_\source\repos\Eunoria-UI-Framework
git status
git add -A
git commit -m "message"
git push origin main
git tag -a vX.Y.Z -m "vX.Y.Z"
git push origin vX.Y.Z
```

## Consumption (CDN)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/EunoriaNetwork/eunoria-ui-framework@main/css/eunoria-ui-framework.css">
<script src="https://cdn.jsdelivr.net/gh/EunoriaNetwork/eunoria-ui-framework@main/js/eunoria-ui-framework.js"></script>
```

## Notes
- Public repository at `EunoriaNetwork/eunoria-ui-framework`.
- Remote over SSH: `git@github.com:EunoriaNetwork/eunoria-ui-framework.git`.
- Do not copy into `GTA Eunoria` without the user's confirmation.
- The original `Eunoria-UI/gta-ui-framework` folder was removed/moved; this folder is the source of truth.