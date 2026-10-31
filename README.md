# GTA UI Framework

Framework de CSS para interfaces HTML sobre GTA V Enhanced. Estilo inspirado en el script de trabajo JetSam: negro base + overlay semi-transparente + acento ambar.

## Archivos

- `css/eunoria-ui-framework.css` — framework completo (variables, componentes, responsive).
- `js/eunoria-ui-framework.js` — helpers minimos (tabs, seleccion de tarjetas, toasts).
- `index.html` — pagina de ejemplo con todos los componentes.

## Uso

1. Incluye las fuentes e iconos (o usa los del proyecto).
2. Enlaza `css/eunoria-ui-framework.css`.
3. Envuelve tu contenido en `.eu-root` (con `.eu-game-bg` y `.eu-overlay` de fondo).
4. Usa las clases `eu-*`.

```html
<link rel="stylesheet" href="css/eunoria-framework.css">
<div class="eu-game-bg"></div>
<div class="eu-overlay"></div>
<div class="eu-root">
  <!-- contenido -->
</div>
<script src="js/eunoria-framework.js"></script>
```

## Tokens principales

- `--eu-black: #050505` (base negro, del proyecto GTA Eunoria)
- `--eu-overlay: rgba(5,5,5,0.72)` (overlay semi-transparente)
- `--eu-accent: #f5a623` (ambar JetSam)
- `--eu-font-header: 'Rajdhani'`, `--eu-font-body: 'Inter'`

## Responsive

Soporta hasta 640x480 como minimo. Media queries en 900px, 640px y 480px de alto.

## Componentes

Tipografia, botones, tarjetas, modal/panel, inputs, checkbox/radio/toggle/slider, badges, progress, alerts, tabs, tooltip, toast, list items, tabla, divider, skeleton, panel con alturas fijas, scrollbar rayado dorado.

## Notas

- Scrollbar dorado solido (sin franjas), estilo propio.
- Esquinas con radio pequeno (4px) segun JetSam. Para esquinas biseladas usar clip-path personalizado.
- Compatible con CEF moderno. Para CEF antiguo (Chromium 63) evitar backdrop-filter y usar fallbacks.
