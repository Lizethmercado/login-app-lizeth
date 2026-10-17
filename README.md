# Login App - Lizeth

Formulario de inicio de sesión con HTML, CSS y JavaScript.

## Estrategia de ramas: GitHub Flow

- `main` siempre contiene una versión estable.
- Cada funcionalidad se desarrolla en una rama corta (`feature/...`).
- Los cambios entran a `main` mediante un Pull Request revisado por otra persona.

**Justificación:** el equipo es pequeño (dos personas), el proyecto es una aplicación web simple y no se mantienen varias versiones en paralelo. Git Flow tendría demasiadas ramas para este caso, y GitHub Flow ofrece revisión por PR con menos complejidad.

## Cómo probar

1. Abrir `index.html` en el navegador.
2. Dejar los campos vacíos y pulsar "Ingresar": aparece un mensaje de error.
3. Llenar usuario y contraseña y pulsar "Ingresar": aparece el mensaje de éxito.