# AGENTS.md — Eunoria UI Framework

## Descripción
Framework de CSS/JS para interfaces HTML sobre GTA V Enhanced. Estilo inspirado en el script de trabajo JetSam: negro base `#050505` + overlay semi-transparente + acento ámbar `#f5a623`. Clases con prefijo `eu-`. Responsive mínimo 640x480.

## Estructura
- `css/eunoria-ui-framework.css` — framework completo (tokens, componentes, responsive).
- `js/eunoria-ui-framework.js` — helpers (tabs, selección de tarjetas, toasts).
- `index.html` — página de ejemplo con todos los componentes.
- `README.md` — uso y tokens.
- `.gitignore` — exclusiones.

## Convenciones
- Prefijo de clases: `eu-` (ej. `eu-btn`, `eu-card`, `eu-modal`).
- Variables CSS: `--eu-*`.
- Atributos data: `data-eu-*`.
- Toast global: `window.euToast(msg, type)`.
- No usar franjas en scrollbar (estilo propio).
- Base negro `#050505`, overlay `rgba(5,5,5,0.72)`.

## Comandos
```powershell
cd C:\Users\gmcp_\source\repos\Eunoria-UI-Framework
git status
git add -A
git commit -m "mensaje"
git push origin main
git tag -a vX.Y.Z -m "vX.Y.Z"
git push origin vX.Y.Z
```

## Consumo (CDN)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/EunoriaNetwork/eunoria-ui-framework@main/css/eunoria-ui-framework.css">
<script src="https://cdn.jsdelivr.net/gh/EunoriaNetwork/eunoria-ui-framework@main/js/eunoria-ui-framework.js"></script>
```

## Notas
- Repositorio público en `EunoriaNetwork/eunoria-ui-framework`.
- Remote por SSH: `git@github.com:EunoriaNetwork/eunoria-ui-framework.git`.
- No copiar a `GTA Eunoria` sin confirmación del usuario.
- La carpeta original `Eunoria-UI/gta-ui-framework` fue eliminada/movida; la fuente de verdad es esta carpeta.