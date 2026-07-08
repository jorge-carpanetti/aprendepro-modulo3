/*
Proyecto Final - Módulo 3: Fundamentos de JavaScript
Plataforma: AprendePro
*/

/*
1. INTRODUCCIÓN AL LENGUAJE (Lección 1)
Acá le puse el mensajes inicial a la consola, y para pedir los datos al usuario con prompt y mostrar alertas.
*/
console.log("Hola! Esto es AprendePro, mi proyecto del Módulo 3");
console.log("Arrancamos con console.log, prompt y alert como vimos en la Lección 1");

// Esta variable la uso para personalizar los mensajes de bienvenida
const NOMBRE_PLATAFORMA = "AprendePro";

/*
2. VARIABLES, EXPRESIONES Y CONDICIONALES (Lección 2)
Use let y const para manejar las variables para despues implementar las operaciones matemáticas básicas (suma, resta,
multiplicación y división) y el control de flujo con if/else y switch.
*/

let usuarioActivo = "Estudiante";
let salir = false;

/*
Básicamente estas son las funciones para cada operación matemática que pedía la Lección 2 que las separé así para mantener todo modular.
*/

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero, es indefinido";
    }
    return a / b;
}

/*
3. ARREGLOS Y CICLOS (Lección 3)
Por otro lado, aprendimos a usar arreglos para guardar listas de cosas y después recorrerlas con for, while, forEach, etc.
Según entendí, los arreglos son como compartimientos ordenados donde cada elemento tiene un índice (empezando del 0, 1, 2...).
*/

// Aqui cree un arreglo simple para practicar el recorrido con for y while
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Este es un for tradicional para recorrer el arreglo
function mostrarDiasConFor() {
    console.log("Recorriendo el arreglo con un for clásico:");
    for (let i = 0; i < diasSemana.length; i++) {
        console.log("Día " + (i + 1) + ": " + diasSemana[i]);
    }
}

// Este es un while que hace lo mismo pero con otra estructura,
// útil cuando no sabés exactamente cuántas iteraciones vas a necesitar
function mostrarDiasConWhile() {
    console.log("Ahora con while, misma cosa:");
    let i = 0;
    while (i < diasSemana.length) {
        console.log("Día " + (i + 1) + ": " + diasSemana[i]);
        i++;
    }
}

/*
4. BASE DE DATOS SIMULADA (objetos dentro de arreglos)
Esto combina lo que vimos en la Lección 3 (arreglos) con la Lección 5 (objetos). Así vamos a almacenar la info de los cursos.
*/

const cursos = [
    { id: 1, nombre: "JavaScript desde Cero",           duracionHoras: 40, cuposDisponibles: 15, precioBase: 200 },
    { id: 2, nombre: "HTML y CSS Avanzado",             duracionHoras: 30, cuposDisponibles: 8,  precioBase: 150 },
    { id: 3, nombre: "Introducción a Python",           duracionHoras: 50, cuposDisponibles: 20, precioBase: 250 },
    { id: 4, nombre: "Fundamentos de Bases de Datos",   duracionHoras: 35, cuposDisponibles: 0,  precioBase: 180 }
];

/*
5. OBJETOS CON MÉTODOS (Lección 5)
En la clase vimos que los objetos pueden tener propiedades (datos) y métodos (funciones internas). Acá armé un objeto literal que representa un carrito de compras, con métodos para agregar cursos y calcular totales.
*/

const carrito = {
    items: [],

    // Método para agregar un curso al carrito
    agregarCurso: function(curso) {
        this.items.push(curso);
        console.log("Curso agregado al carrito: " + curso.nombre);
    },

    // Método para calcular el total de todos los cursos en el carrito
    calcularTotal: function() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total = total + this.items[i].precioBase;
        }
        return total;
    },

    // Método para listar los cursos del carrito
    listarCursos: function() {
        console.log("Cursos en tu carrito:");
        this.items.forEach(function(item) {
            console.log("- " + item.nombre + " ($" + item.precioBase + ")");
        });
    }
};

/* 
6. FUNCIONES Y MODULARIZACIÓN (Lección 4)
Creé funciones reutilizables para cada operación, algunas reciben parámetros y retornan valores, otras llaman a otras funciones internamente (composición de funciones, que fue un concepto que me costó pero lo fui entendiendo practicando).
*/

// Calcula el promedio de horas de todos los cursos
// Usé forEach porque es más declarativo y fácil de leer
function calcularPromedioHoras(listaCursos) {
    let total = 0;
    listaCursos.forEach(function(curso) {
        total = total + curso.duracionHoras;
    });
    return total / listaCursos.length;
}

// Aplica un descuento al precio base
function calcularCostoConDescuento(precioBase, porcentajeDescuento) {
    const descuento = precioBase * (porcentajeDescuento / 100);
    return precioBase - descuento;
}

// Aqui una función que primero valida si hay cupo, y si hay, se llama a calcularCostoConDescuento internamente
function validarYCupo(curso) {
    if (curso.cuposDisponibles > 0) {
        const costoFinal = calcularCostoConDescuento(curso.precioBase, 10);
        return "Cupo disponible. Precio con descuento del 10%: $" + costoFinal;
    } else {
        return "No hay cupos disponibles para este curso.";
    }
}

/*
7. MÉTODOS DE ARREGLO (Lección 3 + 5)
Acá aplique filter, map y forEach para manipular los datos de los cursos. Son métodos que evitan tener que escribir for manualmente y hacen el código más limpio (recordando las buenas prácticas).
*/
function mostrarCatalogo() {
    console.log("Catálogo de cursos disponibles:");
    cursos.forEach(function(curso) {
        console.log(
            curso.id + ". " + curso.nombre +
            " | " + curso.duracionHoras + "h" +
            " | Cupos: " + curso.cuposDisponibles +
            " | $" + curso.precioBase
        );
    });
}

function mostrarResumenHoras() {
    const soloHoras = cursos.map(function(curso) {
        return curso.nombre + ": " + curso.duracionHoras + " horas";
    });
    console.log("Duración por curso:");
    soloHoras.forEach(function(linea) {
        console.log(linea);
    });
}

function filtrarCursosConCupo() {
    const conCupo = cursos.filter(function(curso) {
        return curso.cuposDisponibles > 0;
    });
    console.log("Cursos con cupos disponibles:");
    conCupo.forEach(function(curso) {
        console.log(curso.id + ". " + curso.nombre + " - Cupos: " + curso.cuposDisponibles);
    });
    return conCupo;
}

/*
8. CALCULADORA MATEMÁTICA (Lección 2 + 4)
Esta función pide dos números al usuario y muestra el resultado de las cuatro operaciones básicas. Es el ejemplo clásico que vimos en clase para practicar parámetros y retorno de funciones.
*/

function calculadoraMatematica() {
    alert("Hagamos operaciones matemáticas con dos números");

    const num1Input = prompt("Favor ingresa el primer número:");
    if (num1Input === null || num1Input.trim() === "" || isNaN(num1Input)) {
        alert("Eso no es un número válido. Volvamos al menú.");
        return;
    }

    const num2Input = prompt("Favor ingresa el segundo número:");
    if (num2Input === null || num2Input.trim() === "" || isNaN(num2Input)) {
        alert("Eso no es un número válido. Volvamos al menú.");
        return;
    }

    const num1 = Number(num1Input);
    const num2 = Number(num2Input);

    // Acá llamo a cada función por separado, así se ve la modularización
    console.log("Resultados de la calculadora:");
    console.log(num1 + " + " + num2 + " = " + sumar(num1, num2));
    console.log(num1 + " - " + num2 + " = " + restar(num1, num2));
    console.log(num1 + " * " + num2 + " = " + multiplicar(num1, num2));
    console.log(num1 + " / " + num2 + " = " + dividir(num1, num2));

    alert("Resultados calculados. Revisá la consola (F12).");
}

/*
9. MENÚ PRINCIPAL (while + switch)
Con esto integre todo, el menú usa un while para mantenerse activo hasta que el usuario elige salir, y un switch para manejar cada opción.
También se validaron las entradas para evitar errores.
*/

function iniciarMenu() {
    alert("Bienvenido a " + NOMBRE_PLATAFORMA + ", " + usuarioActivo + "!");

    while (!salir) {
        const opcion = prompt(
            "--- MENÚ PRINCIPAL ---\n" +
            "1. Ver catálogo de cursos\n" +
            "2. Ver duración de cada curso (map)\n" +
            "3. Filtrar cursos con cupos (filter)\n" +
            "4. Ver promedio de horas\n" +
            "5. Consultar disponibilidad de un curso\n" +
            "6. Calculadora matemática\n" +
            "7. Probar carrito de compras\n" +
            "8. Mostrar días de la semana (for y while)\n" +
            "9. Salir\n" +
            "Elegí una opción (1-9):"
        );

        // Validación: si el usuario cancela o no escribe nada
        if (opcion === null || opcion.trim() === "") {
            alert("Tienes que ingresar un número del 1 al 9.");
            continue;
        }

        // Validación: tiene que ser un número entero
        if (isNaN(opcion) || !Number.isInteger(Number(opcion))) {
            alert("Error: Favor ingresas un número entero válido.");
            continue;
        }

        const opcionNum = Number(opcion);

        // Validación: fuera del rango permitido
        if (opcionNum < 1 || opcionNum > 9) {
            alert("Error: " + opcionNum + " no está entre 1 y 9.");
            continue;
        }

        // Switch con cada caso
        switch (opcionNum) {
            case 1:
                mostrarCatalogo();
                alert("Catálogo mostrado en la consola (presiona F12).");
                break;

            case 2:
                mostrarResumenHoras();
                alert("Duración por curso en la consola.");
                break;

            case 3:
                filtrarCursosConCupo();
                alert("Cursos con cupo en la consola.");
                break;

            case 4: {
                const promedio = calcularPromedioHoras(cursos);
                console.log("Promedio de horas:");
                console.log("El promedio es: " + promedio.toFixed(1) + " horas.");
                alert("Promedio calculado. Revisá la consola.");
                break;
            }

            case 5: {
                const idInput = prompt("Favor ingresa el ID del curso (1 a " + cursos.length + "):");
                if (idInput === null || idInput.trim() === "" || isNaN(idInput) || !Number.isInteger(Number(idInput))) {
                    alert("ID inválido.");
                    break;
                }
                const idBuscado = Number(idInput);
                const cursoEncontrado = cursos.filter(function(curso) {
                    return curso.id === idBuscado;
                });
                if (cursoEncontrado.length === 0) {
                    alert("No hay curso con ID " + idBuscado + ".");
                } else {
                    const resultado = validarYCupo(cursoEncontrado[0]);
                    console.log("Consulta del curso ID " + idBuscado);
                    console.log("Curso: " + cursoEncontrado[0].nombre);
                    console.log(resultado);
                    alert("Resultado en la consola.");
                }
                break;
            }

            case 6:
                calculadoraMatematica();
                break;

            case 7: {
                const idCurso = prompt("Favor ingresar el ID del curso para agregar al carrito (1 a " + cursos.length + "):");
                if (idCurso === null || idCurso.trim() === "" || isNaN(idCurso)) {
                    alert("ID inválido.");
                    break;
                }
                const cursoParaCarrito = cursos.filter(function(c) {
                    return c.id === Number(idCurso);
                });
                if (cursoParaCarrito.length > 0) {
                    carrito.agregarCurso(cursoParaCarrito[0]);
                    carrito.listarCursos();
                    console.log("Total del carrito: $" + carrito.calcularTotal());
                    alert("El curso fue agregado. Revisa la consola.");
                } else {
                    alert("Ese ID no existe.");
                }
                break;
            }

            case 8:
                mostrarDiasConFor();
                mostrarDiasConWhile();
                alert("Días mostrados en la consola con for y while.");
                break;

            case 9:
                salir = true;
                alert("Gracias por usar " + NOMBRE_PLATAFORMA + ". Nos viste!");
                break;
        }
    }
}

/*
PUNTO DE ENTRADA
aqui se inicia el menu y de asi el usuario controla las opciones que elije
*/

iniciarMenu();
