# tasks-api

API en Node.js, TypeScript y Express para crear y listar tareas. Incluye `/health` para saber que está funcionando.

## Requisitos

- Node.js 24 o superior
- npm
- Git

## Instalación

1. Clona el repositorio:
   ```PowerShell
   git clone https://github.com/Imnot343guiltyspark/tasks-api.git
   ```
2. Entra a la carpeta:

   ```PowerShell
   cd tasks-api
   ```

3. Instala las dependencias:

   ```PowerShell
   npm install
   ```

4. Crea tu archivo de configuración:

   ```PowerShell
   Copy-Item .env.example .env
   ```

## Cómo ejecutarlo

Arranca el servidor en modo desarrollo:

```PowerShell
npm run dev
```

Luego abre el navegador:

- http://localhost:3000/health

Deberías ver: `{"status":"ok"}`

Compila y deja listo para producción:

```PowerShell
npm run build
```

Después de compilar, inicia el servidor desde los archivos JavaScript:

```PowerShell
npm start
```

## Pruebas y calidad de código

Comandos que te permitirán verificar que el código funciona y está ordenado.

| Comando            | Qué hace                                         |
| ------------------ | ------------------------------------------------ |
| `npm run lint`     | Lee el código y busca errores o malas prácticas. |
| `npx tsc --noEmit` | Lee el código y revisa los tipos.                |
| `npm test`         | Ejecuta tu app y prueba si responde.             |
| `npm run format`   | Ordena el código para leerse mejor.              |

## Endpoints

| Método | Ruta      | Respuesta                                      |
| ------ | --------- | ---------------------------------------------- |
| `GET`  | `/health` | `200` con `{"status":"ok"}`                    |
| `GET`  | `/tasks`  | `200` con la lista de tareas                   |
| `POST` | `/tasks`  | `201` con la tarea creada                      |
| `POST` | `/tasks`  | `400` si falta el título (error de validación) |

### POST /tasks

Cuerpo del pedido:

```json
{ "title": "Pan", "description": "Comprar pan" }
```

- `title`: obligatorio
- `description`: opcional

Respuesta `201`:

```json
{
  "id": 1,
  "title": "Pan",
  "completed": false,
  "createdAt": "2026-10-22T04:24:25.547Z"
}
```

Respuesta `400` (sin título):

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Title is required"
  }
}
```

### Rutas que no existen

Si se pide una ruta que no existe, la API responde con el código 404 y este cuerpo:

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Route GET /no-existe not found"
  }
}
```

## Estructura del proyecto

```text
src/
|   app.ts                     ← Junta todo: ensambla la app
|   server.ts                  ← Es el que enciende el servidor
|
+---config
|       env.ts                 ← Lee las variables de .env
|
+---controllers
|       health.controller.ts   ← Construye la respuesta de /health
|       task.controller.ts     ← Valida lo que llega y responde con el código correcto
|
+---models
|       task.model.ts          ← Define cómo es una tarea
|
+---repositories
|       task.repository.ts     ← Guarda y lee las tareas (en memoria)
|
+---routes
|       health.routes.ts       ← Conecta /health a su función
|       task.routes.ts         ← Conecta /tasks a sus funciones
|
\---services
        task.service.ts        ← Lógica: crea la tarea con sus valores iniciales
```

## Decisiones técnicas

- **TypeScript:** Se eligió porque detecta errores antes de ejecutar.

- **Express 5:** Define las rutas y recibe peticiones HTTP.

- **Vitest:** Prueba que la API corra bien. Es necesario hacer tests para saber que todo funciona.

Para conocer más revisa el [ADR 001: stack](docs/adr/001-stack.md).
