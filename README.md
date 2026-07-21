# Barberia-Martin-EVA3
# 💈 Barbería Martín

**Alumno:** Martín Guillermo  
**Sección:** C2  
**Evaluación:** E3 - React SPA (UA3)

## Descripción del proyecto

Barbería Martín es una aplicación web desarrollada para una barbería, donde los usuarios pueden visualizar los servicios disponibles y agendar citas.

La aplicación cuenta con un frontend desarrollado en React y un backend desarrollado con FastAPI que entrega la información de los servicios mediante una API.

## Estructura del proyecto

```
Barberia-Martin
│
├── C2_08_Saavedra_Barberia
│   ├── main.py
│   └── requirements.txt
│
└── eva3-martin-front-end
    ├── src
    │   ├── components
    │   │   └── TarjetaServicio.jsx
    │   ├── pages
    │   │   ├── Inicio.jsx
    │   │   └── Citas.jsx
    │   ├── services
    │   │   └── serviciosApi.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## Backend (FastAPI)

El backend entrega los servicios disponibles de la barbería mediante una API.

### Endpoint utilizado

| Método | Ruta | Descripción |
|---|---|---|
| GET | /api/servicios | Obtiene la lista de servicios |

### Ejecutar backend

Ingresar a la carpeta del backend y ejecutar:

```bash
pip install -r requirements.txt
py -m uvicorn main:app --host 0.0.0.0 --port 8000
```

API disponible en:

```
http://127.0.0.1:8000/api/servicios
```

## Frontend (React)

### Ejecutar frontend

Ingresar a la carpeta del frontend y ejecutar:

```bash
npm install
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

## Funciones de la aplicación

La aplicación permite:

- Visualizar los servicios disponibles.
- Agendar citas.
- Seleccionar automáticamente el servicio elegido.
- Elegir un color cuando el servicio es un tinte.
- Editar citas creadas.
- Eliminar citas.
- Guardar las citas usando LocalStorage.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- FastAPI
- Python
- LocalStorage

## Uso de IA

Durante el desarrollo del proyecto utilicé ChatGPT como herramienta de apoyo para resolver dudas, corregir errores y mejorar algunos aspectos del código.

También fue utilizado como apoyo para mejorar el diseño de la interfaz, la navegación entre páginas, la conexión entre React y FastAPI y algunas funciones como el formulario de citas y el almacenamiento en LocalStorage.

El proyecto fue revisado, adaptado y probado antes de la entrega final.
