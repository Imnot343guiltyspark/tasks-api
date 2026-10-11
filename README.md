# tasks-api

API en Node.js, TypeScript y Express la cual responde en /health para saber que está funcionando.

## Requisitos

- Node.js 24 o superior
- npm
- Git

## Instalación

1. Clona el repositorio:
   ```PowerShell
   git clone https://github.com/Imnot343guiltyspark/tasks-api.git
   ```
2. Entrar a la carpeta:

   ```powershell
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

Luego abre el abre el navegador:

- http://localhost:3000/health

Deberías ver: `{"status":"ok"}`

## Pruebas y calidad de código

Comandos que te permitirán verificar que el código funciona y está ordenado.

| Comando            | Qué hace                                         |
| ------------------ | ------------------------------------------------ |
| `npm run lint`     | Lee el código y busca errores o malas prácticas. |
| `npx tsc --noEmit` | Lee el código y revisa los tipos.                |
| `npm test`         | Ejecuta tu app y prueba si responde.             |
| `npm run format`   | Ordena el código para leerse mejor.              |

## Endpoints

| Método | Ruta      | Respuesta                   |
| ------ | --------- | --------------------------- |
| `GET`  | `/health` | `200` con `{"status":"ok"}` |

Si se pide una ruta que no existe, la API responde con el código 404 y este cuerpo:

```json
{
  "error": {
    "code": "404",
    "message": "Route GET /no-existe not found"
  }
}
```

## Estructura del proyecto

```text
src/
|   app.ts                   ← Junta todo: ensambla la app
|   server.ts                ← Es el que enciende el servidor
|
+---config
|       env.ts               ← Lee las variables de .env
|
+---controllers
|       health.controller.ts ← Construye la respuesta
|
\---routes
        health.routes.ts     ← Conecta la URL a la función
```
