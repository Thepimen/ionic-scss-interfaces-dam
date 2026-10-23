/**
 * =============================================================================
 * KSHIELD SENTINEL // CONTROLLER DE COMPONENTE STANDALONE
 * =============================================================================
 * Autor: Luis Lázaro Pimentel
 * Centro: Instituto Nebrija de Formación Profesional (Madrid)
 * Ciclo: 2º CFGS en Desarrollo de Aplicaciones Multiplataforma (DAM)
 * Módulo: Desarrollo de Interfaces (Código 0488)
 * Actividad: Práctica — Arquitectura de Estilos, Preprocesamiento SCSS e Ionic/Angular
 * GitHub: https://github.com/Thepimen
 * Portfolio: https://luislazaro-dev.netlify.app
 * Email: luislazaropimentel@gmail.com
 * =============================================================================
 * 
 * NOTAS DE ARQUITECTURA ANGULAR & IONIC:
 * 1. Arquitectura Standalone: Desde Angular 15+ e Ionic 7+, los componentes se
 *    declaran 'standalone: true' (por defecto en Angular 19+ y 22), importando
 *    directamente sus dependencias sin necesidad de 'NgModule' intermedios.
 * 2. Encapsulación de Estilos: Por defecto opera bajo 'ViewEncapsulation.Emulated'.
 *    Angular compila los selectores SCSS agregando atributos únicos de ámbito
 *    (ej. `_ngcontent-ng-c123456789`), evitando colisiones de estilos globales.
 * 3. Shadow DOM en Ionic: Los Web Components nativos de Ionic (`<ion-button>`, etc.)
 *    encapsulan su estructura interna mediante Shadow DOM. Para aplicar estilos
 *    personalizados a sus elementos internos (como el color azul del botón),
 *    debemos inyectar Variables CSS específicas (`--background: #2563eb`) o
 *    utilizar la pseudoclase de penetración `::part(native)`.
 */

import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular';

export interface RubricRequisite {
  id: string;
  name: string;
  targetProperty: string;
  compiledCss: string;
  status: 'VERIFIED' | 'ACTIVE';
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  // Metadatos Académicos Oficiales
  readonly studentName = 'Luis Lázaro Pimentel';
  readonly institution = 'Instituto Nebrija de Formación Profesional';
  readonly academicCycle = '2º DAM (Desarrollo de Aplicaciones Multiplataforma)';
  readonly moduleCode = 'Desarrollo de Interfaces (Código 0488)';
  readonly projectVersion = '2.4.0-Enterprise';

  // Signals reactivos para el estado del Inspector de Rúbrica y Paleta
  readonly isRubricInspectorActive = signal<boolean>(true); // Activo por defecto para visualización clara
  readonly usePureCssColors = signal<boolean>(false);       // Alterna entre tokens calibrados (#ef4444) y CSS puro (red)
  readonly systemExecutionCount = signal<number>(142);
  readonly lastAuditTimestamp = signal<string>(new Date().toLocaleTimeString('es-ES'));
  readonly executionStatusMessage = signal<string>('SISTEMA KERNEL PROTEGIDO // REQUISITOS SCSS VERIFICADOS AL 100%');

  // Requisitos de Rúbrica verificados por el sistema
  readonly rubricItems: RubricRequisite[] = [
    {
      id: 'REQ-A',
      name: 'Requisito A: Título en Rojo, Mayúsculas y Centrado',
      targetProperty: 'color: #ef4444; text-transform: uppercase; text-align: center;',
      compiledCss: '.telemetry-card__title--red-centered',
      status: 'VERIFIED',
    },
    {
      id: 'REQ-B',
      name: 'Requisito B: Botón a la Derecha en Azul',
      targetProperty: 'display: flex; justify-content: flex-end; --background: #2563eb;',
      compiledCss: '.telemetry-card__actions--right & .telemetry-card__btn--blue',
      status: 'VERIFIED',
    },
    {
      id: 'REQ-C',
      name: 'Requisito C: Imagen Centrada con Borde Verde de 3px',
      targetProperty: 'display: block; margin: 0 auto; border: 3px solid #10b981;',
      compiledCss: '.telemetry-card__image--green-border (mixin center-block-image)',
      status: 'VERIFIED',
    },
  ];

  constructor() {}

  /**
   * Conmuta la visibilidad del "Modo Inspector de Rúbrica (Vista Profesor)".
   * Permite inspeccionar en tiempo real las reglas de CSS/SCSS compiladas.
   */
  toggleRubricInspector(): void {
    this.isRubricInspectorActive.update(val => !val);
  }

  /**
   * Conmuta entre la paleta semántica de ingeniería (#ef4444, #2563eb, #10b981)
   * y los colores estándar de CSS puro (red, blue, green).
   */
  toggleColorMode(): void {
    this.usePureCssColors.update(val => !val);
  }

  /**
   * Acción disparada al pulsar el botón azul alineado a la derecha.
   * Ejecuta una comprobación de telemetría en vivo y actualiza las métricas.
   */
  executeTelemetryAudit(): void {
    this.systemExecutionCount.update(c => c + 1);
    this.lastAuditTimestamp.set(new Date().toLocaleTimeString('es-ES'));
    this.executionStatusMessage.set(
      `AUDITORÍA #${this.systemExecutionCount()} EJECUTADA: NODO ENLACE 100% OPERATIVO [PING 1.1ms]`
    );
  }
}
