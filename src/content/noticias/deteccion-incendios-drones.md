---
titulo: "Detección de incendios forestales con drones e IA"
descripcion: "Clemente, Iker y Lander han creado un sistema de vigilancia forestal automatizado: dos modelos en cascada, drones y cloud para detectar fuego antes de que se extienda."
fecha: 2026-03-02
autor: "CF Somorrostro"
etiquetas: ["visión", "YOLO", "drones", "cloud", "AWS"]
destacada: true
---

¿Cómo vigilar grandes extensiones forestales sin depender de personas mirando pantallas todo el día? **Clemente Rodríguez, Iker Iglesias y Lander Ortuzar** respondieron a esa pregunta con un sistema de detección temprana de incendios basado en visión artificial y drones.

## La idea

Una flotilla de drones haciendo pasadas continuas sobre zonas de riesgo. Si detectan humo o fuego, mandan alerta inmediata con coordenadas exactas. Como tener a un experto en incendios mirando por la ventana las 24 horas — pero automático y cubriendo kilómetros.

## Dos modelos en cascada

El sistema no se limita a detectar: también **evalúa el riesgo**.

1. **Modelo de detección** — identifica si hay humo o fuego en la imagen
2. **Modelo de valoración** — analiza color del humo, extensión, presencia de personas y entorno, y asigna un nivel de peligrosidad del 1 al 5

## Tecnología

- **YOLO** para la detección visual
- **DynamoDB** para registrar cada evento (ID de cámara + timestamp)
- **Lambda + AWS** para la gestión de alertas
- Entrenamiento en los **servidores GPU del centro** (financiados con Fondos Next Generation EU)
- Mapa interactivo con marcadores en tiempo real

## ¿Y el modelo de negocio?

Servicios a ayuntamientos y comunidades autónomas: flota de drones, infraestructura cloud, mantenimiento de modelos y sistema de alertas. El siguiente paso es probar la transmisión en tiempo real desde drones reales vía Wi-Fi.

> "Está muy bonito poder ver el resultado y decir: esto lo he hecho yo, esto lo podría vender."

---

[Leer artículo completo en Somorrostro →](https://www.somorrostro.com/el-alumnado-de-ia-y-big-data-desarrolla-un-sistema-inteligente-para-detectar-incendios-forestales-con-drones/)
