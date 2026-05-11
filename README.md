# Sublime Clínica — Web

Medicina estética y regenerativa · Fuengirola, Málaga.

## Estado
Versión final elegida por el cliente (8-may). Pendiente de datos para deploy producción público.

## Estructura
- `index.html` — versión final
- `assets/css/main.css` — estilos
- `assets/js/` — JS (consent, main)
- `assets/img/` — fotos optimizadas WebP
- `404.html` — página de error

## Stack
HTML5 estático + CSS3 + JS vanilla. Cormorant Infant + Roboto (Google Fonts). Mobile first.

## Pendiente para deploy público producción
- Datos doctora (nombre, nº colegiada Málaga, especialidad, bio)
- Nº NCA centro sanitario + razón social/NIF
- 4 tratamientos médicos faltantes
- 3 reseñas Google a destacar
- Dominio definitivo
- Páginas legales (aviso, privacidad, cookies) con datos cliente
- Quitar `noindex,nofollow` de meta robots
- Quitar `Disallow: /` de robots.txt
- Gate verify_web.py + Lighthouse + axe + Mozilla Observatory
