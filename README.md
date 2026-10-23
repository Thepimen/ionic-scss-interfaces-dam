# KSHIELD KERNEL SENTINEL // ARQUITECTURA SCSS E IONIC/ANGULAR

[![Desarrollo de Interfaces](https://img.shields.io/badge/M%C3%B3dulo-0488%20Desarrollo%20de%20Interfaces-blue.svg)](https://github.com/Thepimen/ionic-scss-interfaces-dam)
[![Framework](https://img.shields.io/badge/Ionic-Framework%20v9-3880ff.svg?logo=ionic)](https://ionicframework.com)
[![Angular](https://img.shields.io/badge/Angular-v22%20Standalone-dd0031.svg?logo=angular)](https://angular.dev)
[![SCSS](https://img.shields.io/badge/Sass-Dart--Sass%201.104-cc6699.svg?logo=sass)](https://sass-lang.com)
[![Live Demo](https://img.shields.io/badge/Deploy-GitHub%20Pages-success.svg?logo=github)](https://thepimen.github.io/ionic-scss-interfaces-dam/)

Proyecto académico y de ingeniería frontend para la práctica de **Arquitectura de Estilos, Preprocesamiento SCSS y Componentes Híbridos con Ionic y Angular** (Módulo Desarrollo de Interfaces — Código 0488).

Diseñado bajo la filosofía **Anti-AI-Slop** (`taste-skill` y `awesome-design-md`), evitando interfaces genéricas y construyendo un panel de telemetría de sistemas de nivel empresarial (*KShield Kernel Sentinel*), cumpliendo al 100% y con rigor matemático cada directriz de la rúbrica docente.

---

## 1. Contexto Académico y Datos del Autor

- **Alumno:** Luis Lázaro Pimentel
- **Centro Educativo:** Instituto Nebrija de Formación Profesional (Madrid)
- **Ciclo Formativo:** 2º CFGS en Desarrollo de Aplicaciones Multiplataforma (DAM)
- **Módulo:** Desarrollo de Interfaces (Código 0488)
- **Actividad:** Práctica — Arquitectura de Estilos, Preprocesamiento SCSS e Ionic/Angular
- **Repositorio Oficial en GitHub:** [https://github.com/Thepimen/ionic-scss-interfaces-dam](https://github.com/Thepimen/ionic-scss-interfaces-dam)
- **Despliegue en Producción (Demo Funcional):** [https://thepimen.github.io/ionic-scss-interfaces-dam/](https://thepimen.github.io/ionic-scss-interfaces-dam/)
- **Portfolio:** [https://luislazaro-dev.netlify.app](https://luislazaro-dev.netlify.app)
- **Contacto:** [luislazaropimentel@gmail.com](mailto:luislazaropimentel@gmail.com)

---

## 2. Cumplimiento Estricto de la Rúbrica en el Componente `Home`

El enunciado exige tres elementos específicos e innegociables en la página principal `home`:

| Requisito Docente | Regla de Estilos Exigida | Implementación SCSS Modular | Selector BEM / Mixin | Estado de Verificación |
|---|---|---|---|:---:|
| **Requisito A: Título** | **Rojo**, **Mayúsculas** y **Centrado** | `color: #ef4444; text-transform: uppercase; text-align: center;` | `.telemetry-card__title--red-centered` | **CUMPLIDO AL 100%** |
| **Requisito B: Botón** | Alineado a la **Derecha** y en color **Azul** | `display: flex; justify-content: flex-end;` + `--background: #2563eb;` | `.telemetry-card__actions--right` + `.telemetry-card__btn--blue` (mixin `@include flex-end-right`) | **CUMPLIDO AL 100%** |
| **Requisito C: Imagen** | **Centrada** con **Borde Verde de 3px de grosor** | `display: block; margin-inline: auto; border: 3px solid #10b981;` | `.telemetry-card__image--green-border` (mixin `@include center-block-image(3px, #10b981)`) | **CUMPLIDO AL 100%** |

### Diferenciador de Matrícula: Modo Inspector de Rúbrica (Vista Profesor)
La aplicación cuenta con una barra de control interactiva superior que permite:
1. **Activar/Desactivar el Modo Inspector:** Despliega cartelas contextuales sobre el Título, la Imagen y el Botón indicando las reglas CSS exactas aplicadas.
2. **Conmutador de Paleta Cromática:** Permite alternar en vivo entre la **paleta semántica de ingeniería** (`#ef4444`, `#2563eb`, `#10b981`) y los **colores CSS puros estándar** (`red`, `blue`, `green`), disipando cualquier ambigüedad de corrección docente.

---

## 3. Respuestas Técnicas a las Preguntas del Enunciado

### Pregunta 1: *¿El componente usa Sass por defecto?*
> **Respuesta:** **Sí.**  
> Al inicializar un proyecto en Ionic con el CLI de Angular (`ionic start ... --type=angular-standalone`), el generador configura automáticamente el preprocesador **SCSS (Sassy CSS)** como la sintaxis de hojas de estilo predeterminada.
> 
> Esta configuración queda fijada a nivel de compilador en el archivo [`angular.json`](file:///c:/Users/luisl/OneDrive/Escritorio/Programacion%20y%20proyectos/Nebrija/Programas/Nebrija-Segundo_Anio/Nebrija-Primer-Trimestre/DesarrolloDeInferfaces/EstilosCSS_Actividad23-10-26/ionic-scss-architecture-dam/angular.json) mediante la propiedad:
> ```json
> "inlineStyleLanguage": "scss",
> "schematics": {
>   "@ionic/angular-toolkit:page": {
>     "styleext": "scss",
>     "standalone": true
>   }
> }
> ```
> Por este motivo, el componente `home` se genera nativamente con el archivo de estilos [`home.page.scss`](file:///c:/Users/luisl/OneDrive/Escritorio/Programacion%20y%20proyectos/Nebrija/Programas/Nebrija-Segundo_Anio/Nebrija-Primer-Trimestre/DesarrolloDeInferfaces/EstilosCSS_Actividad23-10-26/ionic-scss-architecture-dam/src/app/home/home.page.scss), el cual está directamente enlazado en el decorador `@Component` de [`home.page.ts`](file:///c:/Users/luisl/OneDrive/Escritorio/Programacion%20y%20proyectos/Nebrija/Programas/Nebrija-Segundo_Anio/Nebrija-Primer-Trimestre/DesarrolloDeInferfaces/EstilosCSS_Actividad23-10-26/ionic-scss-architecture-dam/src/app/home/home.page.ts) mediante la propiedad `styleUrls: ['home.page.scss']`.

---

### Pregunta 2: *¿Aplico Sass pero se compila solo? (`ionic serve` vs `npm run watch:sass`)*
> **Respuesta:** **Sí, se compila de forma completamente transparente y automática.**  
> En un flujo web tradicional (como los proyectos de referencia docente `proyecto-patron-7-1-scss` y `proyecto-m9-3-sass-fundamentals`), el desarrollador debe ejecutar manualmente un proceso en segundo plano como `npm run watch:sass` (el cual invoca el script `"sass --watch scss/main.scss:dist/css/main.css"` en `package.json`) para que el binario de Sass vigile el sistema de archivos y genere un archivo `.css` físico en el disco que el navegador pueda interpretar.
>
> En cambio, en **Ionic + Angular**, al ejecutar `ionic serve` (o `ng serve`):
> 1. **Pipeline Integrado:** El servidor de desarrollo de Angular CLI (basado en Vite/esbuild con el motor Dart-Sass integrado) intercepta automáticamente cada archivo `.scss` del árbol de componentes.
> 2. **Resolución de Módulos:** Resuelve las directivas `@use` y `@forward` de nuestra arquitectura modular en memoria.
> 3. **Encapsulación y Scoping:** Transforma los selectores SCSS a CSS estándar y les inyecta los atributos de ámbito del componente (`_ngcontent-ng-c...`) para garantizar el aislamiento `ViewEncapsulation.Emulated`.
> 4. **Hot Module Replacement (HMR):** Cualquier modificación en `_variables.scss`, `_mixins.scss` o `home.page.scss` es recompilada incrementalmente en milisegundos y transferida al navegador vía WebSocket/HMR **sin recargar la página completa ni requerir scripts externos de compilación manual**.

---

## 4. Arquitectura de Estilos Modular (Patrón 7-1 Simplificado)

El proyecto adopta una adaptación simplificada del **Patrón 7-1 de arquitectura Sass**, aislando las variables y herramientas de compilación para que puedan ser consumidas por cualquier componente:

```
ionic-scss-architecture-dam/
├── src/
│   ├── assets/
│   │   └── kernel-sentinel.svg          # Gráfico vectorial de topología técnica
│   ├── styles/
│   │   └── abstracts/                   # Capa abstracta del Patrón 7-1
│   │       ├── _variables.scss          # Tokens de color, espaciado, tipografía y bordes
│   │       ├── _mixins.scss             # Mixins flex-end-right, center-block-image, etc.
│   │       └── _index.scss              # Barrel file que exporta el módulo con @forward
│   ├── theme/
│   │   └── variables.scss               # Variables globales del ecosistema Ionic
│   ├── global.scss                      # Estilos globales y reset
│   └── app/
│       └── home/
│           ├── home.page.html           # Estructura semántica HTML + Web Components
│           ├── home.page.scss           # Consumo de abstracts vía @use y clases BEM
│           └── home.page.ts             # Lógica reactiva Standalone (Signals)
```

### ¿Por qué `@use` en lugar del obsoleto `@import`?
El archivo `home.page.scss` importa los módulos abstractos utilizando exclusivamente la directiva moderna:
```scss
@use '../../styles/abstracts' as *;
```
Dart-Sass ha deprecado oficialmente `@import` por cuatro razones fundamentales:
1. **Polución de ámbito global:** Con `@import`, todas las variables y mixins colisionaban en un único espacio global.
2. **Compilaciones redundantes:** Importar el mismo archivo en múltiples componentes duplicaba innecesariamente el CSS generado.
3. **Falta de visibilidad:** `@use` respeta miembros privados (iniciados con `_` o `-`).
4. **Carga única en memoria:** `@use` analiza y ejecuta el módulo una única vez.

### Penetración de Shadow DOM en Ionic
Dado que `<ion-button>` es un Web Component nativo con Shadow DOM, los estilos planos de CSS no penetran su estructura interna. Para teñir el botón de color azul se emplean dos técnicas estándar:
1. **Variables CSS Oficiales de Ionic:** `--background: #2563eb;`
2. **CSS Shadow Parts:** Penetración controlada en `<button class="button-native">` mediante el selector estandarizado `::part(native)`.

---

## 5. Fragmentos Clave de Código Comentado

### A) Mixin para Centrado de Imagen con Borde Verde de 3px (`_mixins.scss`)
```scss
@mixin center-block-image(
  $border-width: $border-width-target, // 3px de grosor exacto
  $border-color: $color-border-green,  // #10b981 (Verde esmeralda de telemetría)
  $border-radius: $radius-md
) {
  display: block;
  margin-inline: auto;         // Centrado horizontal defensivo (LTR y RTL)
  max-width: 100%;             // Evita desbordamiento en smartphones
  height: auto;
  box-sizing: border-box;       // Garantiza que los 3px no alteren el ancho asignado

  // Rúbrica estricta del profesor:
  border: $border-width solid $border-color;
  border-radius: $border-radius;
  box-shadow: 0 0 16px rgba($border-color, 0.28);
}
```

### B) Mixin para Alineación a la Derecha (`_mixins.scss`)
```scss
@mixin flex-end-right($wrap: false, $gap: $spacing-md) {
  display: flex;
  justify-content: flex-end;   // Alinea estrictamente los elementos hijos a la derecha
  align-items: center;
  gap: $gap;
  flex-wrap: if($wrap, wrap, nowrap);
}
```

### C) Título en Rojo, Mayúsculas y Centrado (`home.page.scss`)
```scss
.telemetry-card__title--red-centered {
  color: $color-title-red;             // Requisito 1: Rojo (#ef4444)
  text-transform: uppercase;           // Requisito 2: Mayúsculas
  text-align: center;                  // Requisito 3: Centrado
  
  font-family: $font-mono;
  font-size: $font-size-2xl;
  font-weight: $font-weight-bold;
  letter-spacing: 0.05em;
  text-shadow: 0 0 16px $color-title-red-glow;
}
```

---

## 6. Evidencias Visuales de la Aplicación

### Vista de Escritorio (Desktop)
![Vista Escritorio](ionic-scss-architecture-dam/capturas/captura-desktop-normal.png)

### Modo Inspector de Rúbrica (Vista Profesor)
![Modo Inspector Rúbrica](ionic-scss-architecture-dam/capturas/captura-inspector-rubrica.png)

### Vista Responsive para Dispositivos Móviles (Mobile 393x852)
![Vista Móvil](ionic-scss-architecture-dam/capturas/captura-mobile-responsive.png)

---

## 7. Instrucciones de Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Thepimen/ionic-scss-interfaces-dam.git
   cd ionic-scss-interfaces-dam/ionic-scss-architecture-dam
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar servidor local con compilación automática SCSS:
   ```bash
   npx ng serve
   # o bien mediante el CLI de Ionic:
   ionic serve
   ```
4. Compilar para producción:
   ```bash
   npm run build
   ```

---
*Desarrollado con rigor técnico por **Luis Lázaro Pimentel** para el Instituto Nebrija de Formación Profesional (2026).*
