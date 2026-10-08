# Ruka Costos & Recetas

Aplicación web progresiva (PWA) para organizar recetas, costos, ingredientes, pedidos, producción, clientes y finanzas de un emprendimiento de pastelería.

## Archivos principales

- `index.html` — entrada principal. Debe quedar en la raíz del repositorio.
- `styles.css` — identidad visual responsive.
- `app.js` — lógica, cálculos y almacenamiento local.
- `manifest.webmanifest` — configuración instalable PWA.
- `service-worker.js` — caché de archivos esenciales.
- `icons/` — íconos 192 × 192, 512 × 512, Apple Touch y favicon.
- `images/` — imágenes visuales de Ruka.

## Cómo abrirla en tu computadora

Descomprimí el ZIP y abrí `index.html` con el navegador. La funcionalidad principal funciona de manera local. Para probar la instalación PWA y el service worker, conviene publicarla con GitHub Pages porque los navegadores exigen HTTPS para esas funciones.

## Cómo subirla a GitHub

1. Creá un repositorio nuevo en GitHub.
2. Descomprimí `Ruka-Costos-y-Recetas-github.zip`.
3. Subí **el contenido de la carpeta** al repositorio.
4. Confirmá que `index.html` quede directamente en la raíz del repositorio.
5. Hacé commit de los archivos.

## Activar GitHub Pages

En el repositorio:

1. `Settings`
2. `Pages`
3. En **Build and deployment**, elegí `Deploy from a branch`.
4. Seleccioná la rama `main`.
5. Elegí `/(root)`.
6. Guardá.
7. Esperá a que GitHub muestre el enlace publicado.

La aplicación usa rutas relativas, por lo que funciona aunque el sitio quede publicado como:

`usuario.github.io/nombre-del-repositorio/`

## Instalar en el celular

### iPhone / iPad

1. Abrí el enlace publicado en **Safari**.
2. Tocá **Compartir**.
3. Elegí **Agregar a pantalla de inicio**.
4. Confirmá el nombre `Ruka Costos & Recetas`.

### Android

1. Abrí el enlace en Chrome.
2. Usá el menú del navegador.
3. Elegí **Instalar aplicación** o **Agregar a pantalla de inicio**.

## Guardado de datos

Esta primera versión utiliza `localStorage`. Los datos permanecen en el mismo navegador y dispositivo mientras no se borren los datos del sitio.

En **Configuración** hay funciones para:

- exportar una copia de seguridad JSON;
- importar una copia de seguridad JSON;
- eliminar los datos de demostración;
- borrar todos los registros.

## Importante

Si la usuaria cambia de celular o borra los datos del navegador, debe usar previamente **Exportar JSON** para conservar una copia de seguridad.
