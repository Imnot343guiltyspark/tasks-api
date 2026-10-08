# ADR-001: Elección del stack

## Estado

Aceptado

## Contexto

El ticket TASK-001 pide definir el stack de la primera API de mi ruta
para llegar a ser desarrollador backend junior. Vengo del diseño gráfico
y mi nivel previo de JavaScript era muy básico.

## Decisión

Node.js con TypeScript y Express. Pruebas con Vitest y Supertest.
Calidad de código con ESLint y Prettier.

## Alternativas consideradas

Python con FastAPI. No la elegí porque tendría que aprender otro lenguaje a la vez que backend y TypeScript sirve también para frontend.

## Consecuencias

Ventaja: TypeScript avisa errores antes de ejecutar, como cuando tsx no se quejó y tsc sí.
Costo: TypeScript exige más configuración (tsconfig, ESLint).
