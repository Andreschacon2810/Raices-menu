# Carta Raíces

Carta digital estática del restaurante Raíces, en Gran Tarajal, Fuerteventura.

La portada (`index.html`) contiene la historia de Raíces y botones para entrar en cada sección. Cada categoría vive en su propia página, por ejemplo `pastas.html`, `del-mar.html` o `postres.html`.

## Abrir en un ordenador

Puedes abrir la carpeta `raices-menu` completa en cualquier editor o copiarla a otro equipo. Todas las rutas son relativas y no hay dependencias externas.

Para verla correctamente como PWA y probar el modo sin conexión, abre la carpeta desde un servidor local, no directamente con doble clic.

## Ejecutar localmente

Desde una terminal dentro de esta carpeta:

```bash
python -m http.server 8080 --bind 0.0.0.0
```

Luego abre:

[http://localhost:8080](http://localhost:8080)

En Windows también puedes ejecutar `start-local.bat`.

Desde la portada puedes entrar a cada sección. También puedes abrir una categoría directamente, por ejemplo:

[http://localhost:8080/pastas.html](http://localhost:8080/pastas.html)

## Verla desde un teléfono

1. Conecta el ordenador y el móvil a la misma red Wi-Fi.
2. Ejecuta el servidor local con el comando anterior.
3. Busca la IP local del ordenador. En Windows puedes usar `ipconfig`.
4. Abre en el móvil una dirección como:

```text
http://192.168.1.50:8080
```

Cambia `192.168.1.50` por la IP real del ordenador.

## Publicar rápidamente

- GitHub Pages: sube la carpeta a un repositorio y activa Pages apuntando a la rama y carpeta donde esté `index.html`.
- Netlify: arrastra y suelta la carpeta `raices-menu` en el panel de Netlify.
- Hosting estático: sube todos los archivos manteniendo la misma estructura de carpetas.

Si el repositorio es `Andreschacon2810/Raices-gran-tarajal` y GitHub Pages apunta a la raíz del proyecto, la web quedará en:

```text
https://andreschacon2810.github.io/Raices-gran-tarajal/
```

## Instalar en la pantalla de inicio

- iPhone: abre la web con Safari, toca compartir y elige "Añadir a pantalla de inicio".
- Android: abre la web con Chrome y usa "Instalar aplicación" o "Añadir a pantalla de inicio".

## Modo sin conexión

El service worker guarda la carta, estilos, scripts, logo e iconos después de la primera visita. A partir de ahí, la web puede seguir mostrando la carta sin conexión.

Importante: el service worker requiere HTTP o HTTPS. No funciona si la web se abre directamente con `file://`.

## Comprimir en ZIP

Comprime la carpeta `raices-menu` completa. No cambies los nombres de las carpetas `assets`, `css` o `js`, porque las rutas de la web dependen de esa estructura.

## Modificar la carta

La estructura, precios e IDs de los productos están en `js/menu-data.js`. Los textos visibles y sus traducciones están en `js/translations.js`.

La carta está disponible en español, inglés, alemán, italiano y francés. El idioma elegido se guarda en `localStorage` con la clave `raices-language`.

Para activar una ficha ampliada de un plato, cambia el producto correspondiente siguiendo el ejemplo comentado del final de `js/menu-data.js`:

```js
interactivo: true,
imagen: "assets/img/platos/entrecot-raices.webp",
descripcionLarga: "...",
ingredientes: ["..."],
alergenos: ["..."]
```

## Datos pendientes

No se han incluido dirección exacta, teléfono, horarios, correo electrónico, redes sociales ni la categoría de bebidas generales, porque no se proporcionaron datos reales.
