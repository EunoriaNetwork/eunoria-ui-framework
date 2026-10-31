# GTA UI Framework

Framework de CSS para interfaces HTML sobre GTA V Enhanced. Estilo inspirado en el script de trabajo JetSam: negro base + overlay semi-transparente + acento ambar.

## Archivos

- `css/gta-ui.css` — framework completo (variables, componentes, responsive).
- `js/gta-ui.js` — helpers minimos (tabs, seleccion de tarjetas, toasts).
- `index.html` — pagina de ejemplo con todos los componentes.

## Uso

1. Incluye las fuentes e iconos (o usa los del proyecto).
2. Enlaza `css/gta-ui.css`.
3. Envuelve tu contenido en `.gta-root` (con `.gta-game-bg` y `.gta-overlay` de fondo).
4. Usa las clases `gta-*`.

```html
<link rel="stylesheet" href="css/gta-ui.css">
<div class="gta-game-bg"></div>
<div class="gta-overlay"></div>
<div class="gta-root">
  <!-- contenido -->
</div>
<script src="js/gta-ui.js"></script>
```

## Tokens principales

- `--gta-black: #050505` (base negro, del proyecto GTA Eunoria)
- `--gta-overlay: rgba(5,5,5,0.72)` (overlay semi-transparente)
- `--gta-accent: #f5a623` (ambar JetSam)
- `--gta-font-header: 'Rajdhani'`, `--gta-font-body: 'Inter'`

## Responsive

Soporta hasta 640x480 como minimo. Media queries en 900px, 640px y 480px de alto.

## Componentes

Tipografia, botones, tarjetas, modal/panel, inputs, checkbox/radio/toggle/slider, badges, progress, alerts, tabs, tooltip, toast, list items, tabla, divider, skeleton, panel con alturas fijas, scrollbar rayado dorado.

## Notas

- Scrollbar dorado solido (sin franjas), estilo propio.
- Esquinas con radio pequeno (4px) segun JetSam. Para esquinas biseladas usar clip-path personalizado.
- Compatible con CEF moderno. Para CEF antiguo (Chromium 63) evitar backdrop-filter y usar fallbacks.
