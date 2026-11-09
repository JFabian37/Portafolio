# Portafolio · Josue Del Río Montoya

Portafolio personal hecho con React y Vite. Una sola página con perfil, stack,
proyectos, certificados y un formulario de contacto que envía por EmailJS.

En línea: <https://portafolio-smoky-theta.vercel.app/>

## Requisitos

- Node.js 20.19 o superior

> La terminal de Laragon suele traer Node 18, que no sirve para Vite 8.
> Comprueba con `node -v` antes de instalar.

## Instalación

```bash
npm install
cp .env.example .env     # en PowerShell: Copy-Item .env.example .env
npm run dev
```

Abre `http://localhost:5173`.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve esa versión para revisarla |
| `npm run lint` | Revisa el código con Oxlint |

## Variables de entorno

| Variable | Descripción |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | Service ID de EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | Template ID de EmailJS |
| `VITE_EMAILJS_PUBLIC_KEY` | Public Key de EmailJS |

Si faltan, la página funciona igual: el formulario avisa que no está
configurado y ofrece el correo directo, en lugar de fallar en silencio.

**Todo lo que empieza con `VITE_` queda incrustado en el JavaScript
público.** No es un secreto. Para que nadie use la cuenta de EmailJS desde
otro sitio, activa *Allowed origins* en el panel de EmailJS y deja solo el
dominio de producción. El `.env` nunca se sube al repositorio.

Las mismas tres variables hay que cargarlas en Vercel, en
*Settings → Environment Variables*.

## Estructura

```text
public/
  certificados/   Certificados publicables (Oracle y Red Hat)
  og-image.png    Vista previa al compartir el enlace
  robots.txt, sitemap.xml
src/
  assets/         Foto, portadas de proyectos
  components/     Un componente por sección, con su CSS al lado
  data/           Perfil, habilidades, proyectos y certificados
  index.css       Tokens de diseño, reset y utilidades compartidas
```

Para actualizar el contenido no hace falta tocar el JSX: todo está en
`src/data/`. Agregar un proyecto es añadir un objeto a `proyectos.js`.

## Decisiones

- **Tokens en `:root`.** Los colores estaban repetidos a mano en los seis
  archivos CSS; ahora se cambian en un solo sitio.
- **Poppins auto-hospedada** con `@fontsource`, en vez de depender de una
  petición a Google Fonts para pintar el texto.
- **Sin enlaces muertos.** Los botones de cada proyecto se generan desde
  `enlaces`; si un proyecto no tiene repositorio público, no aparece el botón.
- **Accesibilidad.** Navegación por teclado con salto al contenido, menú con
  `aria-expanded` que cierra con Escape, foco visible, contraste AA en los
  botones y respeto por `prefers-reduced-motion`.
- **Datos personales fuera.** La constancia de SENATI muestra el DNI, así que
  se lista como texto y no se publica el archivo.

## Despliegue

Vercel, con la rama `main`. Build `npm run build`, salida `dist/`.
