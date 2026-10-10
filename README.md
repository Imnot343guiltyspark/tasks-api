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
