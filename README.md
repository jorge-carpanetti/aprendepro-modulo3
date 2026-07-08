<img width="3244" height="2064" alt="aprenderpro6" src="https://github.com/user-attachments/assets/ad525636-9480-42f6-bb39-d5a7c1b24130" />
<img width="3238" height="2068" alt="aprenderpro5" src="https://github.com/user-attachments/assets/b51b028f-f765-4473-acba-8177f7f8e504" />
<img width="3244" height="2064" alt="aprenderpro4" src="https://github.com/user-attachments/assets/ff84eee3-bc76-4721-a6d8-c482f62e8802" />
<img width="3244" height="2162" alt="aprenderpro3" src="https://github.com/user-attachments/assets/c5a65a44-1063-4b38-b653-91f2b97646ae" />
<img width="3226" height="2164" alt="aprenderpro2" src="https://github.com/user-attachments/assets/ef0922ce-1516-4ba6-8b56-8acd16a2671a" />
<img width="3230" height="2068" alt="aprenderpro1" src="https://github.com/user-attachments/assets/0df89cc9-feed-446b-a269-6dfde604ff64" />
# Proyecto Aprendepro - Proyecto Final Módulo 3

Esto es mi proyecto final del Modulo 3 de Fundamentos de programación en Javascript de la clase. Lo que entendi fue que se pedía armar una aplicación de consola que juntara todos los conceptos que fuimos viendo, desde lo más básico (como las variables, y el console.log) hasta objetos con métodos, que es lo que estamos viendo mas en profundidas ahora. así con composición de funciones y métodos de arreglos como los de map, filter y forEach.

## Qué hace el proyecto

La applicación es un menú interactivo que se ejecuta en la consola del navegador. Tiene un saludo inciial y te muestra opciones para ir eligiendo lo que quieras hacer. 
Segun lo pleanteado en el documento, las funcionalidades que pude usar fueron:
- Ver el catálogo de cursos disponibles (como una base de datos simulada con arreglo de objetos)
- Ver la duración de cada curso usando el ".map()"
- Filtrar los cursos que todavía tienen cupos disponibles con ".filter()"
- Calcular el promedio de horas de todos los cursos
- Consultar la disponibilidad de un curso específico por ID (te dice si hay cupo y te calcula el precio con descuento)
- Una calculadora matemática que pide dos números y te muestra suma, resta, multiplicación y división
- Un carrito de compras para ir agregando cursos
- Un ejemplo de recorrido de arreglos con for y while usando los días de la semana
- Validaciones de entrada del usuario para evitar errores (esto lo recalcaron mucho en clase y la verdad es súper importante)

## Cómo instalar el proyecto

Este proyecto no necesita instalaciones. Se corre abriendo el archivo html en la misma carpeta donde esta enlazado de .js, asi que se puede corre en cualquier navegador web.

## Cómo usar el proyecto

1. Abrir el archivo `index.html` en tu navegador.
2. Salta el alert de bienvenida y después pasa un prompt con el menú principal para elegir una opción.
3. Para ver los resultados de casa elecciòn se necesita abrir la consola del navegador con F12 y ver la pestaña de la consola.
4. Proceder a elegir las opciones del 1 al 9 según lo que se quiera probar.
5. Al terminar puedes elegir la opción 9 para salir y terminar la ejecuciòn de la aplicaciòn.

## Conceptos de JavaScript aplicados

Por una parte, use variables con let y const para manejar los datos -a pesar de la regla de oro-, y separé todo en funciones reutilizables para mantener el código ordenado. Después implementé estructuras de control con consicionales "if" y "else" para validar, switch para el menú, y while para mantener el programa corriendo hasta que el usuario quiera salir.

Por otro lado, trabajé con arreglos para guardar listas (los cursos, los días de la semana) y los puse para poder recorrerlos con "for", "while", "forEach", "map" y "filter" según correspondía. También usé objetos literales para estructurar la información de cada curso y un objeto carrito con métodos adentro. Las funciones las fui pensando y modificando para que una llame a otra, como pasa con "validarYCupo" que internamente llama a "calcularCostoConDescuento".

Lo que más me costó entender fue cómo componer funciones y la diferencia práctica entre map y forEach, pero haciéndolo y probando pude entenderlo mejor.

## Archivos del proyecto

index.html       - Página principal (solo carga el script)
script.js        - Código completo de la aplicación
README.md        - Este archivo

## Capturas de pantalla

Para sacar las capturas, corre el programa, abrí la consola con F12 y sacá screenshots de:

1. **Pantalla principal** con el mensaje de bienvenida y el menú
   - *(insertar screenshot 1)*

2. **Catálogo de cursos** mostrado en la consola (opción 1)
   - *(insertar screenshot 2)*

3. **Filtro de cursos con cupo** (opción 3)
   - *(insertar screenshot 3)*

4. **Calculadora matemática** con resultados (opción 6)
   - *(insertar screenshot 4)*

5. **Carrito de compras** agregando un curso (opción 7)
   - *(insertar screenshot 5)*

6. **Días de la semana** con for y while (opción 8)
   - *(insertar screenshot 6)*

## Herramientas usadas

Partes de este trabajo las fui haciendo con apoyo de una IA para ordenar mejor las ideas y entender conceptos que me estaban costando. Iba probando y arreglando hasta que funcionaran las cosas como quería.

## Link del repositorio

https://github.com/jorge-carpanetti/aprendepro-modulo3
