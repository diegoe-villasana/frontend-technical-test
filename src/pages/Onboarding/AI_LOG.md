# AI Development Log

Para este proyecto, utilicé Inteligencia Artificial (Gemini/ChatGPT) como asistente de programación ("Pair Programmer") para acelerar el desarrollo de la interfaz y resolver dudas específicas de estilos y Git.

## Herramientas Utilizadas
- **Modelo:** Gemini / ChatGPT
- **Propósito:** Estilizado Tailwin, corrección de componentes React y manejo de control de versiones.

## Prompts Principales & Flujo de Trabajo

### 1. Estilizado y UI (Dark Mode)
Solicité ayuda para transformar las tarjetas de registro a un diseño "Dark Mode" moderno con efectos de neón, siguiendo una referencia visual.
- *Prompt:* "A esta tarjeta solo dame los valores para modo oscuro, fondo azul profundo y textos blancos."
- *Ajustes:* Pedí específicamente cambiar los colores de los inputs y bordes para que contrastaran correctamente con el fondo `bg-slate-950`.

### 2. Componentes y Botones
Iteré sobre el diseño de los botones de navegación para mejorar la UX.
- *Prompt:* "Quiero poner un botón 'Next' color rosa neón y el 'Back' transparente."

### 3. Implementación de Fondo de Cuadrícula (Grid Background)
- **Solución:** Uso de `linear-gradient` mediante valores arbitrarios en Tailwind.
  <div className="bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>