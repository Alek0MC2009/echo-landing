# Práctica — Lenguajes de Marcas

## Preparación para 1º DAW · Landing Page Componetizada con React

---

## 📌 Índice

1. [Introducción](#introducción)
2. [Contexto de la empresa](#contexto-de-la-empresa)
3. [Objetivo de la práctica](#objetivo-de-la-práctica)
4. [Stack técnico obligatorio](#stack-técnico-obligatorio)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Páginas y secciones requeridas](#páginas-y-secciones-requeridas)
7. [Requisitos de diseño y UX](#requisitos-de-diseño-y-ux)
8. [Requisitos técnicos adicionales](#requisitos-técnicos-adicionales)
9. [Datos de ejemplo (mock data)](#datos-de-ejemplo-mock-data)
10. [Entregables](#entregables)
11. [Criterios de evaluación](#criterios-de-evaluación)
12. [Extras opcionales (puntuación adicional)](#extras-opcionales-puntuación-adicional)
13. [Normas de entrega](#normas-de-entrega)
14. [Preguntas frecuentes](#preguntas-frecuentes)

---

## Introducción

En esta práctica pondrás en marcha, de principio a fin, el desarrollo de una **landing page corporativa** completa, componetizada y funcional, aplicando los conocimientos adquiridos en la asignatura de **Lenguajes de Marcas** sobre HTML semántico, componentización con React, estilado con utilidades CSS (Tailwind) y librerías de componentes accesibles (shadcn/ui).

El objetivo no es solo "que se vea bien", sino que demuestres capacidad de:

- Estructurar un proyecto frontend de forma profesional.
- Dividir la interfaz en componentes reutilizables y bien organizados.
- Aplicar un sistema de diseño coherente (colores, tipografías, espaciados).
- Gestionar navegación multi-página con rutas dinámicas.
- Escribir código tipado, limpio y mantenible.

---

## Contexto de la empresa

**Nombre de la empresa:** **ECHO**

**Sector:** Tecnología · Audio · Consumer Electronics

**Descripción:**
ECHO es una marca (ficticia) especializada en auriculares inalámbricos y dispositivos de audio premium. Su propuesta de valor se centra en tres pilares: **diseño minimalista**, **calidad de sonido excepcional** y **tecnología inteligente** (cancelación de ruido activa, sonido espacial, asistente por voz con IA).

El público objetivo son personas de entre 18 y 40 años, con alto poder adquisitivo digital, que valoran el diseño tanto como la funcionalidad — un perfil similar al de los compradores de marcas como Apple, Sony o Bose.

**Misión de la marca (para usar como copy real en la web):**

> "Diseñamos sonido que se siente, no solo se escucha."

**Valores de marca:**

- Diseño minimalista y atemporal.
- Innovación tecnológica constante.
- Sostenibilidad en materiales y packaging.
- Experiencia de usuario sin fricciones.

---

## Objetivo de la práctica

Desarrollar una **landing page multi-página, componetizada y responsive** para ECHO, utilizando:

- **React 18+** con **TypeScript**.
- **Tailwind CSS** como único sistema de estilado.
- **shadcn/ui** como librería de componentes base.
- **lucide-react** como librería de iconografía.
- **React Router (v6+)** para la navegación entre vistas.

El proyecto debe funcionar como una **SPA (Single Page Application)** navegable, con al menos una ruta dinámica funcional, y debe poder ejecutarse localmente siguiendo las instrucciones de tu propio `README.md`.

---

## Stack técnico obligatorio

| Tecnología       | Versión recomendada | Uso obligatorio                                                 |
| ---------------- | ------------------- | --------------------------------------------------------------- | 
| Vite             | ^5.x                | Bundler y entorno de desarrollo                                 |
| React            | ^18.x               | Librería principal de UI                                        |     |
| Tailwind CSS     | ^3.x                | Estilado completo, sin CSS plano salvo excepciones justificadas |
| shadcn/ui        | última              | Componentes de interfaz reutilizables                           |
| lucide-react     | última              | Iconografía en toda la interfaz                                 |
| React Router DOM | ^6.x                | Enrutamiento y navegación                                       |

### Instalación base sugerida

```bash
npm create vite@latest echo-landing
cd echo-landing
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react
npm install react-router-dom
npx shadcn@latest init
```

> 📌 No es obligatorio seguir estos comandos exactos, pero el resultado final debe usar estas tecnologías correctamente configuradas.

---

## Estructura del proyecto

Se recomienda (no obligatorio, pero muy valorado) una estructura de carpetas similar a esta:

```
echo-landing/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes de shadcn (autogenerados)
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── Comparison.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Faq.tsx
│   │   │   └── ContactForm.tsx
│   │   └── shared/
│   │       ├── ProductCard.tsx
│   │       └── SectionTitle.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── data/
│   │   └── products.ts
│   ├── types/
│   │   └── index.ts
│   ├── router/
│   │   └── AppRouter.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

⚠️ **Importante:** Está terminantemente prohibido meter toda la lógica y el JSX en un único fichero `App.tsx`. La componetización es uno de los criterios principales de evaluación.

---

## Páginas y secciones requeridas

### 1. Navbar (componente de layout)

- Fija/sticky al hacer scroll.
- Logo de ECHO (puede ser texto estilizado o un icono de Lucide + nombre).
- Enlaces de navegación: Inicio, Productos, Nosotros, Contacto.
- Botón CTA destacado: "Comprar ahora".
- Versión móvil con menú hamburguesa (`Menu` / `X` de Lucide) usando el componente `Sheet` de shadcn.

### 2. Hero Section

- Título principal grande y llamativo.
- Subtítulo con la propuesta de valor.
- Dos botones CTA: uno primario ("Comprar ahora", icono `ShoppingBag`) y uno secundario ("Ver catálogo", icono `ArrowRight`).
- Imagen o mockup grande del producto (puede ser una imagen de stock libre de derechos).

### 3. Sección de características técnicas ("Features")

Grid de mínimo **4 a 6 tarjetas**, cada una con: icono de Lucide, título corto, descripción breve. Ejemplos sugeridos:

| Icono Lucide  | Característica              |
| ------------- | --------------------------- |
| `Volume2`     | Sonido espacial 360°        |
| `WifiOff`     | Cancelación activa de ruido |
| `BatteryFull` | Hasta 30h de batería        |
| `Droplets`    | Resistencia al agua IPX4    |
| `Bluetooth`   | Conexión multipunto         |
| `Mic`         | Asistente de voz con IA     |

### 4. Catálogo de productos ("ProductGrid")

- Grid responsive de **mínimo 6 productos** (distintos modelos y/o colores de auriculares).
- Cada producto se muestra con el componente `Card` de shadcn e incluye:
  - Imagen del producto.
  - Nombre del modelo.
  - Precio.
  - Icono de favorito (`Heart`) interactivo (toggle de estado).
  - Botón "Añadir al carrito" (`ShoppingCart`).
- Al pulsar sobre una tarjeta, se navega a la página de detalle (`/producto/:id`).

### 5. Página de detalle de producto (ruta dinámica)

Ruta: `/producto/:id`

Debe incluir:

- Galería de imágenes del producto (puede ser un carrusel simple o varias imágenes estáticas).
- Nombre, precio y descripción extendida.
- Especificaciones técnicas (autonomía, peso, conectividad...).
- Selector de color (mínimo 2 opciones).
- Botón de compra.
- Manejo del caso "producto no encontrado" (si el `id` no existe, redirigir o mostrar mensaje).

### 6. Comparativa de modelos

- Tabla comparativa o componente `Tabs` de shadcn comparando 3 modelos (ej: ECHO Lite, ECHO Pro, ECHO Max).
- Debe mostrar diferencias en precio, autonomía, cancelación de ruido, resistencia al agua, etc.
- Uso de icono `Check` (verde) y `X` (gris/rojo) para marcar características incluidas/no incluidas.

### 7. Testimonios / Reseñas

- Grid o carrusel con mínimo 3 testimonios de clientes (ficticios).
- Cada testimonio incluye: nombre, foto/avatar (puede ser un placeholder), texto de la reseña y valoración con iconos `Star`.

### 8. FAQ (Preguntas frecuentes)

- Uso obligatorio del componente `Accordion` de shadcn.
- Mínimo 5 preguntas relacionadas con envíos, garantía, devoluciones, compatibilidad, batería, etc.

### 9. Formulario de contacto

- Ruta independiente: `/contacto`.
- Campos mínimos: nombre, email, asunto, mensaje.
- Validación básica (campos obligatorios, formato de email).
- Iconos en los inputs (`User`, `Mail`, `MessageSquare`).
- Mensaje de confirmación tras el envío (puede ser un `Dialog`/`Toast` de shadcn).

### 10. Footer

- Redes sociales con iconos de Lucide (`Instagram`, `Twitter`, `Youtube`, `Github` o los que se consideren apropiados).
- Newsletter (input de email + botón de suscripción).
- Enlaces legales (Política de privacidad, Términos de uso, Cookies) — pueden ser enlaces sin destino funcional.
- Copyright con el año actual dinámico (`new Date().getFullYear()`).

---

## Requisitos de diseño y UX

- **Mobile-first**: el diseño debe construirse pensando primero en móvil y escalar hacia tablet/desktop con los breakpoints de Tailwind (`sm`, `md`, `lg`, `xl`).
- **Paleta de color** sugerida (puede adaptarse, pero debe mantenerse coherente):
  - Fondo principal: blanco/negro según modo (`#ffffff` / `#0a0a0a`).
  - Texto: escala de grises (`#171717` a `#a3a3a3`).
  - Acento: un color vibrante único, por ejemplo `#00d4ff` o `#ff5722`.
- **Tipografía**: usar una fuente moderna vía Google Fonts (`Inter`, `Manrope` o `Space Grotesk`), diferenciando pesos entre títulos (bold/extrabold) y cuerpo de texto (regular/medium).
- **Espaciado**: generoso, evitando interfaces "apretadas". Uso de `container`, `mx-auto` y paddings consistentes (`px-4 sm:px-6 lg:px-8`).
- **Bordes y sombras**: bordes redondeados sutiles (`rounded-lg`/`rounded-xl`), sombras suaves (`shadow-sm`/`shadow-md`), evitando sombras muy marcadas o "efecto Bootstrap 2015".
- **Micro-interacciones**: transiciones suaves en hover (`transition-all duration-200`), escalado ligero en tarjetas (`hover:scale-105`), cambio de color en botones al pasar el ratón.
- **Accesibilidad básica**: uso de etiquetas HTML semánticas (`<nav>`, `<main>`, `<section>`, `<footer>`), atributos `alt` en imágenes, contraste de color adecuado.

---

## Requisitos técnicos adicionales

- Todo el proyecto debe estar escrito en **TypeScript**, con tipado explícito de props en los componentes (nada de `any` salvo justificación).
- Los datos de productos deben estar centralizados en un archivo `data/products.ts` (no hardcodeados repetidamente en varios componentes).
- Se debe definir al menos una interfaz o tipo (`type Product`, `interface Testimonial`, etc.) en `types/index.ts`.
- El componente `Navbar` y `Footer` deben ser compartidos entre todas las páginas mediante un **Layout** común.
- Uso correcto de `useState` para al menos una interacción real (ej: favoritos, menú móvil, tabs, formulario).
- El proyecto debe compilar sin errores (`npm run build`) y sin warnings críticos de ESLint/TypeScript.

---

## Datos de ejemplo (mock data)

No es necesario conectar a una API real. Los datos pueden vivir en un archivo estático, por ejemplo:

```ts
// src/data/products.ts
export interface Product {
  id: string
  name: string
  price: number
  color: string
  image: string
  description: string
  battery: string
  noiseCancelling: boolean
  waterResistant: boolean
}

export const products: Product[] = [
  {
    id: 'echo-lite',
    name: 'ECHO Lite',
    price: 79.99,
    color: 'Blanco',
    image: '/images/echo-lite.png',
    description: 'Auriculares inalámbricos ligeros para el día a día.',
    battery: '20h',
    noiseCancelling: false,
    waterResistant: true,
  },
  // ...al menos 5 productos más
]
```

---

## Entregables

1. **Repositorio en GitHub** (público o con acceso al profesor) con:
   - Código fuente completo.
   - `README.md` propio explicando:
     - Cómo instalar dependencias.
     - Cómo ejecutar el proyecto en local.
     - Tecnologías utilizadas.
     - Capturas de pantalla del resultado final (desktop y móvil).
2. **Vídeo corto (2-4 min)** o GIF mostrando la navegación completa por la web (todas las rutas y funcionalidades principales).
3. **Documento breve (máx. 1 página, PDF o Markdown)** explicando:
   - El árbol de componentes utilizado.
   - Decisiones de diseño tomadas.
   - Dificultades encontradas y cómo se resolvieron.

---

## Criterios de evaluación

| Criterio                                               | Peso |
| ------------------------------------------------------ | ---- |
| Componetización y organización del código              | 20%  |
| Uso correcto de Tailwind CSS                           | 15%  |
| Integración de shadcn/ui                               | 15%  |
| Uso coherente de Lucide Icons                          | 10%  |
| Enrutamiento con React Router (incluida ruta dinámica) | 15%  |
| Diseño responsive y calidad estética                   | 15%  |
| Contenido y coherencia con la temática de la marca     | 5%   |
| Extras (dark mode, animaciones, TypeScript estricto)   | 5%   |

---

## Extras opcionales (puntuación adicional)

- 🌗 **Modo oscuro/claro** funcional, con persistencia en `localStorage` y toggle con iconos `Sun`/`Moon`.
- 🎬 **Animaciones de entrada** al hacer scroll usando `Framer Motion`.
- 🛒 **Carrito de compra simulado** con contexto de React (`Context API`) mostrando número de productos añadidos.
- 🔍 **Buscador/filtro** de productos por precio o características en el catálogo.
- ♿ **Mejoras de accesibilidad**: navegación completa por teclado, uso de `aria-label` en botones de icono.

---

## Normas de entrega

- La entrega se realizará a través del enlace al repositorio de GitHub indicado por el profesor.
- No se aceptarán entregas sin `README.md` o sin capturas/vídeo de la navegación.
- El código debe estar libre de errores de compilación en el momento de la entrega.
- Se recomienda hacer commits incrementales y descriptivos (evitar un único commit final "proyecto terminado").

---

## Preguntas frecuentes

**¿Puedo usar imágenes de stock o generadas por IA para los productos?**
Sí, siempre que sean de uso libre (Unsplash, Pexels) o generadas por ti mismo/a.

**¿Es obligatorio conectar a una API real?**
No. Los datos mock en `data/products.ts` son suficientes para esta práctica.

**¿Puedo cambiar los nombres de los modelos o colores?**
Sí, mientras se mantenga la coherencia con la temática de auriculares/audio premium.

**¿Puedo usar otra librería de iconos además de Lucide?**
No. Lucide es obligatoria como librería principal de iconografía para toda la interfaz.

**¿Qué pasa si no llego a implementar todas las secciones?**
Se evaluará de forma proporcional según los criterios de la tabla. Es preferible entregar menos secciones pero bien hechas, componetizadas y responsive, que todas las secciones mal implementadas.

---

_Fin del enunciado._