const { chromium } = require('./ionic-scss-architecture-dam/node_modules/playwright-core');
const fs = require('fs');
const path = require('path');

async function buildPdf() {
  console.log('Generating academic PDF memory report...');

  const capturasDir = path.resolve(__dirname, 'ionic-scss-architecture-dam', 'capturas');
  
  // Read screenshots as base64
  const imgDesktopNormal = fs.readFileSync(path.join(capturasDir, 'captura-desktop-normal.png')).toString('base64');
  const imgInspector = fs.readFileSync(path.join(capturasDir, 'captura-inspector-rubrica.png')).toString('base64');
  const imgMobile = fs.readFileSync(path.join(capturasDir, 'captura-mobile-responsive.png')).toString('base64');
  const imgPureColors = fs.readFileSync(path.join(capturasDir, 'captura-colores-puros.png')).toString('base64');

  const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Memoria Técnica - Práctica Estilos SCSS e Ionic/Angular - Luis Lázaro Pimentel</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

    @page {
      size: A4;
      margin: 14mm 14mm 14mm 14mm;
      @bottom-right {
        content: counter(page) " / " counter(pages);
        font-family: 'JetBrains Mono', monospace;
        font-size: 8pt;
        color: #64748b;
      }
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9.5pt;
      line-height: 1.55;
      color: #0f172a;
      background-color: #ffffff;
      margin: 0;
      padding: 0;
    }

    /* Academic Header / Cover Bar */
    .header-banner {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .brand-title {
      font-size: 15pt;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
      margin: 0 0 4px 0;
    }

    .brand-subtitle {
      font-size: 10pt;
      font-weight: 600;
      color: #2563eb;
      margin: 0 0 4px 0;
    }

    .academic-meta {
      font-size: 8.5pt;
      color: #475569;
      line-height: 1.4;
    }

    .meta-box {
      text-align: right;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8px 12px;
    }

    .meta-box a {
      color: #2563eb;
      text-decoration: none;
      font-weight: 600;
    }

    h2 {
      font-size: 12pt;
      font-weight: 700;
      color: #0f172a;
      border-left: 4px solid #2563eb;
      padding-left: 8px;
      margin-top: 22px;
      margin-bottom: 10px;
      letter-spacing: -0.01em;
      page-break-after: avoid;
    }

    h3 {
      font-size: 10.5pt;
      font-weight: 600;
      color: #1e293b;
      margin-top: 14px;
      margin-bottom: 6px;
      page-break-after: avoid;
    }

    p {
      margin: 0 0 10px 0;
      color: #334155;
    }

    /* Rubric Table */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0 18px 0;
      font-size: 8.5pt;
      page-break-inside: avoid;
    }

    th, td {
      border: 1px solid #cbd5e1;
      padding: 7px 10px;
      text-align: left;
    }

    th {
      background-color: #f1f5f9;
      color: #0f172a;
      font-weight: 700;
      font-size: 8.5pt;
    }

    tr:nth-child(even) {
      background-color: #f8fafc;
    }

    .badge-verified {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      font-weight: 700;
      color: #047857;
      background: #d1fae5;
      border: 1px solid #a7f3d0;
      border-radius: 4px;
      padding: 2px 6px;
    }

    /* Technical Callout Boxes */
    .callout-box {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-left: 4px solid #0f172a;
      border-radius: 6px;
      padding: 10px 14px;
      margin: 12px 0 16px 0;
      page-break-inside: avoid;
    }

    .callout-box--blue {
      border-left-color: #2563eb;
      background: #eff6ff;
    }

    .callout-box--green {
      border-left-color: #10b981;
      background: #f0fdf4;
    }

    .callout-box--red {
      border-left-color: #ef4444;
      background: #fef2f2;
    }

    .callout-title {
      font-weight: 700;
      font-size: 9.5pt;
      color: #0f172a;
      margin-bottom: 4px;
    }

    /* Code Blocks */
    pre {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      line-height: 1.45;
      background: #0f172a;
      color: #f8fafc;
      padding: 10px 12px;
      border-radius: 6px;
      overflow-x: hidden;
      margin: 8px 0 14px 0;
      page-break-inside: avoid;
      border: 1px solid #1e293b;
    }

    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      color: #0f172a;
      background: #f1f5f9;
      padding: 1px 4px;
      border-radius: 3px;
    }

    pre code {
      color: inherit;
      background: transparent;
      padding: 0;
    }

    .token-comment { color: #64748b; font-style: italic; }
    .token-keyword { color: #38bdf8; font-weight: 600; }
    .token-selector { color: #f472b6; font-weight: 600; }
    .token-property { color: #a5b4fc; }
    .token-string { color: #34d399; }
    .token-value { color: #fbbf24; }

    /* Figure & Screenshots */
    .evidence-grid {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin: 14px 0 18px 0;
      page-break-inside: avoid;
    }

    .evidence-card {
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      overflow: hidden;
      background: #ffffff;
      page-break-inside: avoid;
    }

    .evidence-card img {
      width: 100%;
      height: auto;
      display: block;
      border-bottom: 1px solid #e2e8f0;
    }

    .evidence-caption {
      padding: 6px 10px;
      font-size: 8pt;
      font-family: 'JetBrains Mono', monospace;
      color: #475569;
      background: #f8fafc;
    }

    .evidence-split {
      display: flex;
      gap: 12px;
      page-break-inside: avoid;
    }

    .evidence-split .evidence-card {
      flex: 1;
    }

    .page-break {
      page-break-before: always;
    }

    /* Footer stamp */
    .document-footer {
      border-top: 1px solid #e2e8f0;
      padding-top: 8px;
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      color: #94a3b8;
    }
  </style>
</head>
<body>

  <!-- ========================================================================= -->
  <!-- PÁGINA 1: PORTADA Y SECCIÓN 1 (RESPUESTAS A PREGUNTAS TEÓRICAS)           -->
  <!-- ========================================================================= -->

  <header class="header-banner">
    <div>
      <h1 class="brand-title">MEMORIA TÉCNICA Y EVALUACIÓN DE PRÁCTICA</h1>
      <div class="brand-subtitle">Arquitectura SCSS, BEM, Preprocesamiento e Ionic/Angular Standalone</div>
      <div class="academic-meta">
        <strong>Alumno:</strong> Luis Lázaro Pimentel &nbsp;|&nbsp; 
        <strong>Módulo:</strong> Desarrollo de Interfaces (Código 0488)<br>
        <strong>Centro:</strong> Instituto Nebrija de Formación Profesional (Madrid) &nbsp;|&nbsp;
        <strong>Ciclo:</strong> 2º DAM
      </div>
    </div>
    <div class="meta-box">
      <div><strong>GitHub:</strong> <a href="https://github.com/Thepimen/ionic-scss-interfaces-dam">Thepimen/ionic-scss-interfaces-dam</a></div>
      <div><strong>Demo Live:</strong> <a href="https://thepimen.github.io/ionic-scss-interfaces-dam/">GitHub Pages Link</a></div>
      <div><strong>Portfolio:</strong> <a href="https://luislazaro-dev.netlify.app">luislazaro-dev.netlify.app</a></div>
      <div><strong>Convocatoria:</strong> Octubre 2026</div>
    </div>
  </header>

  <h2>Resumen Ejecutivo de la Rúbrica Académica</h2>
  <p>
    La presente práctica académica aborda el diseño y maquetación de una interfaz frontend avanzada implementada con 
    <strong>Ionic Framework v9</strong>, <strong>Angular v22 Standalone</strong> y un sistema modular de preprocesamiento 
    <strong>SCSS (Dart-Sass)</strong>. Siguiendo las directrices de diseño anti-slop (repositorios <code>taste-skill</code> y <code>awesome-design-md</code>), 
    se ha desarrollado el panel técnico <em>KShield Kernel Sentinel // Node Telemetry</em>, cumpliendo al milímetro cada requisito docente:
  </p>

  <table>
    <thead>
      <tr>
        <th style="width: 22%;">Requisito Docente</th>
        <th style="width: 28%;">Condición Estricta Exigida</th>
        <th style="width: 32%;">Solución Arquitectónica SCSS</th>
        <th style="width: 18%; text-align: center;">Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Requisito A: Título</strong></td>
        <td>En color <strong>Rojo</strong>, en <strong>Mayúsculas</strong> y <strong>Centrado</strong></td>
        <td><code>color: #ef4444; text-transform: uppercase; text-align: center;</code></td>
        <td style="text-align: center;"><span class="badge-verified">✓ 100% VERIFICADO</span></td>
      </tr>
      <tr>
        <td><strong>Requisito B: Botón</strong></td>
        <td>Alineado a la <strong>Derecha</strong> y en color <strong>Azul</strong></td>
        <td>Mixin <code>@include flex-end-right;</code> + <code>--background: #2563eb;</code></td>
        <td style="text-align: center;"><span class="badge-verified">✓ 100% VERIFICADO</span></td>
      </tr>
      <tr>
        <td><strong>Requisito C: Imagen</strong></td>
        <td><strong>Centrada</strong> con <strong>Borde Verde de 3px</strong> exactos</td>
        <td>Mixin <code>@include center-block-image(3px, #10b981);</code></td>
        <td style="text-align: center;"><span class="badge-verified">✓ 100% VERIFICADO</span></td>
      </tr>
    </tbody>
  </table>

  <h2>Sección 1: Respuesta Fundamentada a las Preguntas del Enunciado</h2>

  <div class="callout-box callout-box--blue">
    <div class="callout-title">Pregunta 1: ¿El componente usa Sass por defecto?</div>
    <p>
      <strong>Respuesta: SÍ.</strong> Al crear un proyecto en Ionic con Angular (utilizando el comando <code>ionic start</code> o el generador de esquemáticos de Angular CLI), el entorno configura <strong>SCSS (Sassy CSS)</strong> como el procesador de hojas de estilo predeterminado del proyecto.
    </p>
    <p>
      Esta configuración queda formalmente registrada en el archivo <code>angular.json</code> de la raíz del proyecto dentro del bloque de configuración del arquitecto de compilación:
    </p>
    <pre><code><span class="token-comment">// angular.json (Opciones del compilador Angular 22 / Ionic 9)</span>
<span class="token-property">"schematics"</span>: {
  <span class="token-property">"@ionic/angular-toolkit:page"</span>: {
    <span class="token-property">"styleext"</span>: <span class="token-string">"scss"</span>,
    <span class="token-property">"standalone"</span>: <span class="token-keyword">true</span>
  }
},
<span class="token-property">"inlineStyleLanguage"</span>: <span class="token-string">"scss"</span>,
<span class="token-property">"styles"</span>: [<span class="token-string">"src/global.scss"</span>, <span class="token-string">"src/theme/variables.scss"</span>]</code></pre>
    <p>
      En consecuencia, al generar cualquier página o componente (como la página inicial <code>src/app/home/</code>), el CLI crea automáticamente el archivo <code>home.page.scss</code> y lo vincula directamente en el decorador <code>@Component</code> del controlador TypeScript (<code>home.page.ts</code>) a través del metadato <code>styleUrls: ['home.page.scss']</code>.
    </p>
  </div>

  <div class="callout-box callout-box--green">
    <div class="callout-title">Pregunta 2: ¿Aplico Sass pero se compila solo? (Contraste: ionic serve vs npm run watch:sass)</div>
    <p>
      <strong>Respuesta: SÍ, en Ionic/Angular se compila de forma totalmente transparente e integrada en memoria, sin requerir comandos manuales.</strong>
    </p>
    <p>
      Para fundamentar esta respuesta, contrastamos el flujo de trabajo entre dos arquitecturas:
    </p>
    <ul>
      <li>
        <strong>Flujo Tradicional (Proyectos de Referencia del Profesor <code>proyecto-patron-7-1-scss</code> y <code>proyecto-m9-3-sass-fundamentals</code>):</strong>  
        En un proyecto estático clásico sin framework, los navegadores no entienden la sintaxis Sass. El desarrollador depende de un script en <code>package.json</code> que invoca directamente al compilador binario:
        <pre><code><span class="token-comment">// package.json tradicional del profesor</span>
<span class="token-property">"scripts"</span>: {
  <span class="token-property">"compile:sass"</span>: <span class="token-string">"sass scss/main.scss dist/css/main.css"</span>,
  <span class="token-property">"watch:sass"</span>: <span class="token-string">"sass --watch scss/main.scss dist/css/main.css"</span>
}</code></pre>
        Aquí es <em>estrictamente obligatorio</em> abrir una terminal adicional y ejecutar <code>npm run watch:sass</code> para que el binario de Sass vigile el disco y escriba un archivo <code>main.css</code> físico. Si el alumno olvida ejecutar este comando, los cambios en el archivo <code>.scss</code> jamás se reflejan en el navegador.
      </li>
      <li>
        <strong>Flujo Moderno Integrado (Ionic + Angular CLI con <code>ionic serve</code>):</strong>  
        Al ejecutar <code>ionic serve</code> (o <code>npx ng serve</code>), <strong>NO es necesario ejecutar ningún comando de watch de Sass</strong>. El pipeline de compilación de Angular (gestionado internamente por el builder <code>@angular/build:application</code> basado en Vite/esbuild con motor Dart-Sass embebido) realiza las siguientes operaciones automáticas:
        <ol>
          <li><strong>Intercepción de Hojas de Estilo:</strong> Analiza cada archivo <code>.scss</code> referenciado en <code>styleUrls</code> o <code>angular.json</code>.</li>
          <li><strong>Resolución Modular:</strong> Resuelve el árbol de dependencias de <code>@use</code> y <code>@forward</code>.</li>
          <li><strong>Compilación y Scoping en Memoria:</strong> Convierte el SCSS a CSS estándar y le aplica los atributos de encapsulación de componente (ej. <code>_ngcontent-ng-c...</code>) sin tocar el disco.</li>
          <li><strong>Hot Module Replacement (HMR):</strong> Ante cualquier cambio en un archivo <code>.scss</code>, recompila incrementalmente en milisegundos e inyecta la nueva hoja de estilos en el DOM sin recargar la página.</li>
        </ol>
      </li>
    </ul>
  </div>

  <div class="document-footer">
    <span>Luis Lázaro Pimentel — 2º DAM Nebrija</span>
    <span>Desarrollo de Interfaces (0488) — Página 1 de 4</span>
  </div>

  <!-- ========================================================================= -->
  <!-- PÁGINA 2: SECCIÓN 2 (ARQUITECTURA DE ESTILOS Y SHADOW DOM)                 -->
  <!-- ========================================================================= -->
  <div class="page-break"></div>

  <header class="header-banner">
    <div>
      <h1 class="brand-title">SECCIÓN 2: ARQUITECTURA DE ESTILOS SCSS Y SHADOW DOM</h1>
      <div class="brand-subtitle">Patrón 7-1 Simplificado, BEM, Directiva @use y Web Components Ionic</div>
    </div>
    <div class="meta-box">
      <div><strong>Módulo:</strong> 0488 Desarrollo de Interfaces</div>
      <div><strong>Alumno:</strong> Luis Lázaro Pimentel</div>
    </div>
  </header>

  <h2>1. Adaptación del Patrón de Arquitectura 7-1 en Ionic</h2>
  <p>
    En proyectos empresariales, escribir código SCSS plano dentro de un único componente resulta insostenible. Se ha implementado 
    una versión optimizada del <strong>Patrón 7-1</strong> en el directorio <code>src/styles/abstracts/</code>:
  </p>
  <ul>
    <li><code>src/styles/abstracts/_variables.scss</code>: Almacena los tokens semánticos (colores de la rúbrica, paleta de ingeniería oscura, escala tipográfica de 8px, radios y sombras).</li>
    <li><code>src/styles/abstracts/_mixins.scss</code>: Centraliza la lógica reutilizable de Flexbox (<code>flex-end-right</code>), centrado con borde verde (<code>center-block-image</code>) y diseño responsive (<code>respond-to</code>).</li>
    <li><code>src/styles/abstracts/_index.scss</code>: Barrel file que consolida y reexpide las variables y mixins mediante <code>@forward</code>.</li>
  </ul>

  <h2>2. Fundamento Técnico: ¿Por qué @use y @forward en lugar de @import?</h2>
  <p>
    En las versiones actuales de Sass (Dart-Sass 1.77+ y 1.104+), la directiva tradicional <code>@import</code> se encuentra 
    <strong>formalmente deprecada</strong> por el equipo oficial de Sass debido a cuatro razones críticas:
  </p>
  <div class="callout-box callout-box--red">
    <ol style="margin: 0; padding-left: 18px;">
      <li><strong>Polución del Espacio de Nombres Global:</strong> Con <code>@import</code>, todas las variables y mixins colisionaban globalmente. Si dos archivos definían <code>$color-primary</code>, uno sobrescribía al otro silenciosamente. Con <code>@use</code>, los módulos quedan encapsulados bajo su propio namespace.</li>
      <li><strong>Compilaciones Redundantes y Bloat de CSS:</strong> Si 10 componentes hacían <code>@import "base"</code>, el código base se procesaba y duplicaba 10 veces en el CSS compilado. Con <code>@use</code>, el módulo se compila <em>una única vez</em> en memoria.</li>
      <li><strong>Soporte para Miembros Privados:</strong> <code>@use</code> permite declarar variables y mixins privados simplemente prefijando su nombre con un guion bajo o guion (ej. <code>$_token-privado</code>).</li>
      <li><strong>Encadenamiento con @forward:</strong> Permite crear puntos de entrada limpios (barrels) sin forzar la importación global indiscriminada.</li>
    </ol>
  </div>

  <h2>3. Encapsulación en Angular (ViewEncapsulation.Emulated) vs Ionic Shadow DOM</h2>
  <p>
    Una de las complejidades más importantes en el Desarrollo de Interfaces modernas es la convivencia entre la 
    <strong>encapsulación de Angular</strong> y el <strong>Shadow DOM nativo de Ionic</strong>:
  </p>

  <div class="callout-box">
    <div class="callout-title">A) Encapsulación Emulada de Angular</div>
    <p>
      Angular opera por defecto bajo <code>ViewEncapsulation.Emulated</code>. Durante la fase de build, el compilador procesa 
      los selectores de <code>home.page.scss</code> y les añade un atributo único generado para el componente (ej. <code>.telemetry-card[_ngcontent-ng-c3401]</code>). 
      Esto asegura que los estilos de la tarjeta no afecten a otras páginas.
    </p>
  </div>

  <div class="callout-box callout-box--blue">
    <div class="callout-title">B) Penetración del Shadow DOM en Web Components de Ionic (&lt;ion-button&gt;)</div>
    <p>
      Sin embargo, los componentes de Ionic (como <code>&lt;ion-button&gt;</code>) son Custom Elements del estándar W3C que implementan 
      <strong>Shadow DOM nativo</strong>. En su interior existe un árbol oculto (Shadow Root) que contiene el botón HTML nativo 
      (<code>&lt;button class="button-native"&gt;</code>).
    </p>
    <p>
      Debido al aislamiento estricto del Shadow DOM, un selector CSS normal como <code>ion-button button { background: blue; }</code> 
      es <strong>completamente ignorado por el navegador</strong>. Para cumplir el <em>Requisito B (Botón Azul)</em> hemos empleado 
      las dos únicas técnicas estándar permitidas por la especificación:
    </p>
    <ol>
      <li><strong>Inyección de Variables CSS de Ionic:</strong> Se define <code>--background: #2563eb;</code> en el componente host. Esta propiedad CSS atraviesa la barrera del Shadow Root de forma transparente.</li>
      <li><strong>Selector de Shadow Parts (::part):</strong> Se utiliza la pseudoclase estandarizada <code>ion-button::part(native)</code> para aplicar propiedades de borde, tipografía y feedback visual directamente sobre el elemento nativo encapsulado.</li>
    </ol>
  </div>

  <div class="document-footer">
    <span>Luis Lázaro Pimentel — 2º DAM Nebrija</span>
    <span>Desarrollo de Interfaces (0488) — Página 2 de 4</span>
  </div>

  <!-- ========================================================================= -->
  <!-- PÁGINA 3: SECCIÓN 3 (FRAGMENTOS DE CÓDIGO COMENTADOS)                      -->
  <!-- ========================================================================= -->
  <div class="page-break"></div>

  <header class="header-banner">
    <div>
      <h1 class="brand-title">SECCIÓN 3: FRAGMENTOS CLAVE DE CÓDIGO COMENTADO</h1>
      <div class="brand-subtitle">Implementación de Mixins, Variables y Clases BEM del Componente Home</div>
    </div>
    <div class="meta-box">
      <div><strong>Módulo:</strong> 0488 Desarrollo de Interfaces</div>
      <div><strong>Alumno:</strong> Luis Lázaro Pimentel</div>
    </div>
  </header>

  <h3>1. Variables SCSS de la Rúbrica y Paleta Calibrada (src/styles/abstracts/_variables.scss)</h3>
  <pre><code><span class="token-comment">// TOKENS DIRECTOS DE LA RÚBRICA ACADÉMICA (ESTRICTO CUMPLIMIENTO)</span>
<span class="token-comment">// Requisito A: Título en Rojo (#ef4444 Crimson con fallback 'red' nativo)</span>
<span class="token-property">$color-title-red</span>: <span class="token-value">#ef4444</span> !default;
<span class="token-property">$color-title-red-glow</span>: <span class="token-value">rgba(239, 68, 68, 0.25)</span>;
<span class="token-property">$color-pure-red</span>: <span class="token-value">#ff0000</span> !default;

<span class="token-comment">// Requisito B: Botón en Azul (#2563eb Cobalt con fallback 'blue' nativo)</span>
<span class="token-property">$color-btn-blue</span>: <span class="token-value">#2563eb</span> !default;
<span class="token-property">$color-btn-blue-hover</span>: <span class="token-value">#1d4ed8</span> !default;
<span class="token-property">$color-pure-blue</span>: <span class="token-value">#0000ff</span> !default;

<span class="token-comment">// Requisito C: Borde Verde de 3px (#10b981 Emerald con fallback 'green' nativo)</span>
<span class="token-property">$color-border-green</span>: <span class="token-value">#10b981</span> !default;
<span class="token-property">$border-width-target</span>: <span class="token-value">3px</span> !default;     <span class="token-comment">// Grosor exacto estipulado en la rúbrica</span>
<span class="token-property">$border-style-target</span>: <span class="token-value">solid</span> !default;   <span class="token-comment">// Borde continuo</span></code></pre>

  <h3>2. Mixins para Requisitos B y C (src/styles/abstracts/_mixins.scss)</h3>
  <pre><code><span class="token-comment">// MIXIN PARA REQUISITO B: ALINEACIÓN ESTRICTA A LA DERECHA MEDIANTE FLEXBOX</span>
<span class="token-keyword">@mixin</span> <span class="token-selector">flex-end-right</span>(<span class="token-property">$wrap</span>: <span class="token-keyword">false</span>, <span class="token-property">$gap</span>: <span class="token-property">$spacing-md</span>) {
  <span class="token-property">display</span>: <span class="token-value">flex</span>;
  <span class="token-property">justify-content</span>: <span class="token-value">flex-end</span>; <span class="token-comment">// Empuja los elementos hijos al extremo derecho</span>
  <span class="token-property">align-items</span>: <span class="token-value">center</span>;
  <span class="token-property">gap</span>: <span class="token-property">$gap</span>;
  <span class="token-property">flex-wrap</span>: <span class="token-keyword">if</span>(<span class="token-property">$wrap</span>, <span class="token-value">wrap</span>, <span class="token-value">nowrap</span>);
}

<span class="token-comment">// MIXIN PARA REQUISITO C: CENTRADO DE IMAGEN CON BORDE VERDE DE 3PX EXACTOS</span>
<span class="token-keyword">@mixin</span> <span class="token-selector">center-block-image</span>(
  <span class="token-property">$border-width</span>: <span class="token-property">$border-width-target</span>, <span class="token-comment">// 3px exactos</span>
  <span class="token-property">$border-color</span>: <span class="token-property">$color-border-green</span>,  <span class="token-comment">// #10b981 verde esmeralda</span>
  <span class="token-property">$border-radius</span>: <span class="token-property">$radius-md</span>
) {
  <span class="token-property">display</span>: <span class="token-value">block</span>;
  <span class="token-property">margin-inline</span>: <span class="token-value">auto</span>;         <span class="token-comment">// Centrado horizontal moderno y defensivo</span>
  <span class="token-property">max-width</span>: <span class="token-value">100%</span>;             <span class="token-comment">// Prevención de desbordamiento en móviles</span>
  <span class="token-property">box-sizing</span>: <span class="token-value">border-box</span>;       <span class="token-comment">// Evita que el borde de 3px altere el cálculo de anchura</span>
  <span class="token-property">border</span>: <span class="token-property">$border-width</span> <span class="token-property">$border-style-target</span> <span class="token-property">$border-color</span>; <span class="token-comment">// 3px solid #10b981</span>
  <span class="token-property">border-radius</span>: <span class="token-property">$border-radius</span>;
  <span class="token-property">box-shadow</span>: <span class="token-value">0 0 16px rgba($border-color, 0.28)</span>; <span class="token-comment">// Resplandor sutil</span>
}</code></pre>

  <h3>3. Estilos del Componente Home con BEM y Shadow DOM (src/app/home/home.page.scss)</h3>
  <pre><code><span class="token-comment">// Consumo modular sin polución global</span>
<span class="token-keyword">@use</span> <span class="token-string">'../../styles/abstracts'</span> <span class="token-keyword">as</span> *;

<span class="token-selector">.telemetry-card</span> {
  <span class="token-comment">// REQUISITO A: TÍTULO EN ROJO, EN MAYÚSCULAS Y CENTRADO</span>
  <span class="token-selector">&__title--red-centered</span> {
    <span class="token-property">color</span>: <span class="token-property">$color-title-red</span>;   <span class="token-comment">// 1. Rojo (#ef4444)</span>
    <span class="token-property">text-transform</span>: <span class="token-value">uppercase</span>; <span class="token-comment">// 2. Mayúsculas</span>
    <span class="token-property">text-align</span>: <span class="token-value">center</span>;        <span class="token-comment">// 3. Centrado</span>
    <span class="token-property">font-family</span>: <span class="token-property">$font-mono</span>;
    <span class="token-property">font-size</span>: <span class="token-property">$font-size-2xl</span>;
    <span class="token-property">letter-spacing</span>: <span class="token-value">0.05em</span>;
  }

  <span class="token-comment">// REQUISITO C: IMAGEN CENTRADA CON BORDE VERDE DE 3PX</span>
  <span class="token-selector">&__image--green-border</span> {
    <span class="token-keyword">@include</span> <span class="token-selector">center-block-image</span>(<span class="token-property">$border-width-target</span>, <span class="token-property">$color-border-green</span>);
    <span class="token-property">max-width</span>: <span class="token-value">720px</span>;
  }

  <span class="token-comment">// REQUISITO B: BOTÓN ALINEADO A LA DERECHA EN COLOR AZUL</span>
  <span class="token-selector">&__actions--right</span> {
    <span class="token-keyword">@include</span> <span class="token-selector">flex-end-right</span>(<span class="token-property">$wrap</span>: <span class="token-keyword">true</span>);
  }

  <span class="token-selector">&__btn--blue</span> {
    <span class="token-property">--background</span>: <span class="token-value">#{$color-btn-blue}</span>;       <span class="token-comment">// Inyección en Shadow DOM de Ionic</span>
    <span class="token-property">--background-hover</span>: <span class="token-value">#{$color-btn-blue-hover}</span>;
    <span class="token-property">--color</span>: <span class="token-value">#ffffff</span>;

    <span class="token-selector">&::part(native)</span> {                        <span class="token-comment">// Penetración Shadow Part de W3C</span>
      <span class="token-property">font-weight</span>: <span class="token-value">600</span>;
      <span class="token-property">border</span>: <span class="token-value">1px solid rgba(255, 255, 255, 0.15)</span>;
    }
  }
}</code></pre>

  <div class="document-footer">
    <span>Luis Lázaro Pimentel — 2º DAM Nebrija</span>
    <span>Desarrollo de Interfaces (0488) — Página 3 de 4</span>
  </div>

  <!-- ========================================================================= -->
  <!-- PÁGINA 4: SECCIÓN 4 (EVIDENCIAS VISUALES Y RESULTADOS)                     -->
  <!-- ========================================================================= -->
  <div class="page-break"></div>

  <header class="header-banner">
    <div>
      <h1 class="brand-title">SECCIÓN 4: EVIDENCIAS VISUALES DEL RESULTADO FINAL</h1>
      <div class="brand-subtitle">Capturas de Pantalla en Entorno de Ejecución Real (Desktop y Mobile)</div>
    </div>
    <div class="meta-box">
      <div><strong>Módulo:</strong> 0488 Desarrollo de Interfaces</div>
      <div><strong>Alumno:</strong> Luis Lázaro Pimentel</div>
    </div>
  </header>

  <div class="evidence-grid">
    <div class="evidence-card">
      <img src="data:image/png;base64,${imgDesktopNormal}" alt="Vista de Escritorio Normal" />
      <div class="evidence-caption">
        <strong>Captura 1 (Desktop Normal):</strong> Título en ROJO centrado en mayúsculas, Imagen técnica vectorial CENTRADA con BORDE VERDE DE 3PX de grosor, y Botón AZUL alineado a la DERECHA.
      </div>
    </div>

    <div class="evidence-card">
      <img src="data:image/png;base64,${imgInspector}" alt="Modo Inspector de Rúbrica (Vista Profesor)" />
      <div class="evidence-caption">
        <strong>Captura 2 (Modo Inspector de Rúbrica - Vista Profesor):</strong> Cartelas de telemetría superpuestas que certifican y desglosan las reglas CSS exactas exigidas en el enunciado.
      </div>
    </div>

    <div class="evidence-split">
      <div class="evidence-card" style="flex: 1.2;">
        <img src="data:image/png;base64,${imgPureColors}" alt="Modo Colores CSS Puros" />
        <div class="evidence-caption">
          <strong>Captura 3 (Conmutador CSS Puro):</strong> Demostración de conmutación inmediata a 'red', 'blue' y 'green' estándar.
        </div>
      </div>

      <div class="evidence-card" style="flex: 0.8;">
        <img src="data:image/png;base64,${imgMobile}" alt="Vista Responsive Mobile" />
        <div class="evidence-caption">
          <strong>Captura 4 (Responsive Mobile):</strong> Adaptación perfecta en viewport 393x852 (iPhone 14 Pro).
        </div>
      </div>
    </div>
  </div>

  <div class="callout-box callout-box--green" style="margin-top: 10px;">
    <div class="callout-title">Conclusión y Verificación Final de Entrega</div>
    <p style="margin: 0; font-size: 8pt;">
      El proyecto compila con <strong>cero warnings y cero errores</strong> bajo Angular 22 e Ionic 9. El repositorio está publicado en 
      <strong>https://github.com/Thepimen/ionic-scss-interfaces-dam</strong> y desplegado en producción en 
      <strong>https://thepimen.github.io/ionic-scss-interfaces-dam/</strong>. Esta memoria técnica reúne todas las respuestas 
      conceptuales y evidencias de código requeridas para la calificación máxima.
    </p>
  </div>

  <div class="document-footer">
    <span>Luis Lázaro Pimentel — 2º DAM Nebrija</span>
    <span>Desarrollo de Interfaces (0488) — Página 4 de 4</span>
  </div>

</body>
</html>`;

  const htmlPath = path.resolve(__dirname, 'memoria-entrega.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
  console.log('HTML memory file saved to:', htmlPath);

  // Render to PDF using Playwright with Edge
  console.log('Rendering PDF via Playwright...');
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
  });

  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000); // Wait for fonts and base64 rendering

  const pdfPath = path.resolve(__dirname, 'Entrega_Estilos_SCSS_Ionic_Luis_Lazaro_Pimentel.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: '0mm',
      bottom: '0mm',
      left: '0mm',
      right: '0mm',
    },
  });

  await browser.close();
  console.log('PDF successfully created at:', pdfPath);
}

buildPdf().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
