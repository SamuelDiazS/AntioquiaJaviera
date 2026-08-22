# Día de la Antioqueñidad — I.E. Javier Londoño

Sitio web responsive para gestionar y presentar el evento "Día de la Antioqueñidad":
bases/grupos, productos y precios, silletas, tabla de rotaciones y desarrollo de la jornada.

Construido con **React + Vite + Tailwind CSS**. No requiere backend para mostrar la
información inicial.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Compilar para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para publicarse en cualquier hosting estático.

## Desplegar en Vercel

**Opción A — desde la web de Vercel:**
1. Sube este proyecto a un repositorio de GitHub/GitLab/Bitbucket.
2. En [vercel.com](https://vercel.com), haz clic en "Add New… → Project" e importa el repositorio.
3. Vercel detecta automáticamente que es un proyecto Vite (Build Command: `npm run build`,
   Output Directory: `dist`). El archivo `vercel.json` incluido ya lo deja explícito.
4. Haz clic en "Deploy".

**Opción B — desde la terminal (Vercel CLI):**
```bash
npm install -g vercel
vercel
```
Sigue las instrucciones en pantalla (la primera vez pedirá iniciar sesión y confirmar la
configuración del proyecto). Para publicar a producción:
```bash
vercel --prod
```

## Editar precios y contenidos

Toda la información de los grupos, productos, toppings y precios está centralizada en:

```
src/data/groups.js       -> grupos, productos, toppings, precios, ruta de imagen de silleta
src/data/evento.js       -> datos generales del evento y línea de tiempo
src/data/rotaciones.js   -> tabla de rotaciones y su leyenda
```

Cambia cualquier valor ahí (por ejemplo `price: 0` por `price: 5000`) y se refleja en todo
el sitio automáticamente, sin tocar el diseño.

## Imágenes de las silletas

Coloca las fotos reales en `public/images/silletas/` con estos nombres:

```
11-1.jpg   11-2.jpg   11-3.jpg   11-4.jpg   11-5.jpg   11-6.jpg
```

Mientras el archivo no exista, el sitio muestra automáticamente un placeholder elegante
("Silleta de 11.x — Imagen próximamente").

## Modo de edición local (sin backend)

El botón flotante **"Modo edición"** (esquina inferior derecha) activa un modo en el que:
- los precios se pueden editar haciendo clic sobre ellos, y
- cada tarjeta de grupo permite subir una imagen de silleta desde el computador.

Estos cambios se guardan en el `localStorage` del navegador (solo visibles para quien los
edita, en ese navegador). Es una base lista para conectarse más adelante a un panel de
administración real o a una base de datos, sin rediseñar la interfaz — la estructura de
datos en `src/data/` y el contexto `src/context/AdminContext.jsx` ya están preparados para
eso.

## Estructura del proyecto

```
src/
  data/            Datos separados de la interfaz (grupos, evento, rotaciones)
  context/         Contexto de administración local (precios/imágenes vía localStorage)
  hooks/           Hook de animación al hacer scroll
  components/      Componentes de la interfaz (Hero, tarjetas, tablas, etc.)
  components/decor Ilustraciones SVG decorativas (silleta, montañas, ornamentos)
public/
  images/silletas/ Carpeta para las fotos reales de cada silleta
```
