---
titulo: "Analizando accidentes de tráfico en tiempo real: el Reto Cero de IA4"
descripcion: "Jon Medina, Michael Jiménez y Mikel Martínez unifican las APIs de la DGT, Euskadi y Cataluña en un dashboard interactivo capaz de analizar y predecir la siniestralidad vial."
fecha: 2025-11-03
autor: "CF Somorrostro"
etiquetas: ["datos", "visualización", "tiempo real", "IoT"]
destacada: false
---

En España se registra aproximadamente un accidente por minuto. En Euskadi y Cataluña, uno cada media hora. Con esos datos encima de la mesa, **Jon Medina, Michael Jiménez y Mikel Martínez** decidieron unificar algo que nadie había hecho antes: las tres fuentes públicas de accidentes de tráfico en un único panel.

## El problema

La DGT tiene un mapa de incidencias, pero excluye Euskadi y Cataluña porque las competencias son autonómicas. Tres fuentes separadas, ninguna visión global.

## La solución

Un **dashboard interactivo** que consume en tiempo real las APIs de la DGT, el Gobierno Vasco y la Generalitat, y las muestra unificadas sobre un mapa. Puntos negros, patrones por horario, zonas de riesgo según clima o festivos — todo visible de un vistazo.

## Stack

- **Node-RED** para la orquestación de flujos de datos
- **InfluxDB** para la serie temporal
- **Grafana** para la visualización
- Todo en cloud, sin necesidad de infraestructura propia

## Más allá del dashboard

El proyecto tiene potencial comercial claro: servicios predictivos para aseguradoras, empresas de infraestructuras o apps que avisen de zonas peligrosas. Y con coste de infraestructura mínimo, ya que todo corre en la nube.

> "Hemos pasado por todo el proceso: elegir los datos, procesarlos, visualizarlos y buscar su utilidad. Es justo lo que haríamos en una empresa real."

---

[Leer artículo completo en Somorrostro →](https://www.somorrostro.com/analizando-accidentes-en-tiempo-real-la-propuesta-de-ia4-en-su-primer-reto-del-curso/)
