# 🛡️ KShield Sentinel UI — Design System & Telemetry Interface

[![KShield Ecosystem](https://img.shields.io/badge/KShield-Kernel%20Observability-00E5FF?style=flat-square&logo=linux&logoColor=black)](https://github.com/Thepimen/kshield)
[![Angular](https://img.shields.io/badge/Angular-18%2B%20Standalone-DD0031?style=flat-square&logo=angular&logoColor=white)](https://angular.dev)
[![Ionic](https://img.shields.io/badge/Ionic-Framework%209-3880FF?style=flat-square&logo=ionic&logoColor=white)](https://ionicframework.com)
[![SCSS](https://img.shields.io/badge/CSS-ITCSS%20%2F%20BEM-CF649A?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com)
[![GitHub Pages](https://img.shields.io/badge/Demo-GitHub%20Pages%20Live-222222?style=flat-square&logo=github)](https://thepimen.github.io/kshield-sentinel-ui/)

> **Sistema de Diseño y Consola de Monitorización para KShield:** Arquitectura CSS/SCSS de nivel industrial (metodología **ITCSS** y convención **BEM**) desarrollada con **Ionic Framework** y **Angular Standalone**, orientada a interfaces críticas de ciberseguridad, observabilidad del kernel de Linux y análisis de telemetría de intrusiones en tiempo real.  
> *Evolucionado desde la práctica de arquitectura de interfaces (CFGS DAM - Instituto Nebrija) para integrarse como panel visual del ecosistema [kshield](https://github.com/Thepimen/kshield).*

---

## 🌐 Demo en Producción
Accede a la versión interactiva desplegada en GitHub Pages:  
👉 **[Ver Demo en Vivo (GitHub Pages)](https://thepimen.github.io/kshield-sentinel-ui/)**

---

## 🎨 Arquitectura SCSS (ITCSS + BEM)

El núcleo de este repositorio es una arquitectura de estilos mantenible, escalable y con cero especificidad accidental, estructurada según el paradigma **Inverted Triangle CSS (ITCSS)**:

```text
src/theme/
├── 1-settings/        # Variables globales, mapas de color, breakpoints y escalas tipográficas
├── 2-tools/           # Mixins utilitarios, funciones SCSS y cálculos de clamp() responsive
├── 3-generic/         # Reseteos globales de box-sizing, normalizaciones CSS
├── 4-elements/        # Estilos base para elementos HTML no clasificados (body, a, h1-h6)
├── 5-objects/         # Patrones de layout agnósticos al diseño (grids, contenedores, flexwraps)
├── 6-components/      # Componentes BEM encapsulados (.c-sentinel-card, .c-telemetry-badge)
└── 7-utilities/       # Clases helper atómicas de alta prioridad (!important consciente)
```

### Principios de Diseño
- **Estética Cyber-Defense / Dark Mode:** Paleta oscura calibrada con alto contraste (`#0a0e17`), acentos en cian neón (`#00E5FF`) y ámbar de alerta (`#FFB300`), minimizando fatiga visual en entornos SOC.
- **Micro-interacciones y Feedback Háptico:** Transiciones optimizadas por GPU (`transform`, `opacity`) para estados de alerta y métricas de kernel.
- **Tokens de Diseño:** Separación estricta entre definición de tokens y consumo en componentes.

---

## 🧩 Ecosistema y Coherencia Técnica

Este proyecto proporciona la capa de presentación y experiencia de usuario (UX) para el agente de seguridad en el kernel de Linux:
- **Core Engine (C / eBPF & Go):** [github.com/Thepimen/kshield](https://github.com/Thepimen/kshield) — Sondas eBPF CO-RE en espacio de kernel y demonio en Go.
- **Frontend / Design System:** [github.com/Thepimen/kshield-sentinel-ui](https://github.com/Thepimen/kshield-sentinel-ui) — Interfaz de supervisión y catálogo de componentes de observabilidad.

---

## 🚀 Puesta en Marcha

```bash
# 1. Clonar el repositorio
git clone https://github.com/Thepimen/kshield-sentinel-ui.git
cd kshield-sentinel-ui

# 2. Instalar dependencias
npm install

# 3. Lanzar entorno de desarrollo
ionic serve
```

---

## 🎓 Documentación Académica y Referencias

Los informes de entrega académica, memoria técnica y documentación de diseño curricular se encuentran archivados de forma estructurada en [`docs/academic/`](./docs/academic/).

- **Autor:** Luis Lázaro Pimentel
- **Centro:** Instituto Nebrija de Formación Profesional (Madrid)
- **Módulo:** Desarrollo de Interfaces (Código 0488)
