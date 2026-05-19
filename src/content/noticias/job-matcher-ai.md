---
titulo: "Job Matcher AI: cuando la IA encuentra el trabajo que encaja contigo"
descripcion: "Tres alumnos del postgrado IA4 de Somorrostro han desarrollado un chatbot que cruza tu perfil con ofertas reales y te ahorra horas de búsqueda."
fecha: 2025-12-16
autor: "CF Somorrostro"
etiquetas: ["lenguaje", "RAG", "empleo", "IA generativa"]
destacada: true
---

Buscar empleo en internet puede ser un proceso largo y frustrante. **Oier Cadierno, Jon Medina y Samuel Rivera**, alumnos del postgrado en IA y Big Data de Somorrostro, decidieron atacar ese problema de frente.

## Qué hace

**Job Matcher AI** es un chatbot que conecta tu currículum con ofertas de empleo reales de [Manfred](https://www.getmanfred.com/), un portal especializado en perfiles tecnológicos. El sistema analiza habilidades, experiencia, salario esperado y ubicación, y devuelve las ofertas que realmente encajan — sin que tengas que abrir una a una.

> "Es como darle al sistema un montón de ofertas para que se las aprenda y luego preguntarle: ¿cuáles son las mejores para mí?"

## Por qué Manfred y no InfoJobs

La elección no fue aleatoria: Manfred presenta los datos de forma estructurada y homogénea. Salario, modalidad, experiencia requerida, stack técnico. En IA, datos limpios son la mitad del trabajo.

## La arquitectura

- **Scraping** de ofertas de Manfred
- **Elasticsearch** como motor de búsqueda vectorial
- **RAG** con modelo de lenguaje para la conversación
- **FastAPI** en el backend, **React** en el frontend
- Desplegado con Docker Compose

El proyecto se construyó en tres semanas y más de 200 horas de trabajo. No es un producto comercial, pero el potencial está ahí.

---

[Leer artículo completo en Somorrostro →](https://www.somorrostro.com/job-matcher-ai-cuando-la-inteligencia-artificial-te-ayuda-a-encontrar-el-trabajo-que-encaja-contigo/)
