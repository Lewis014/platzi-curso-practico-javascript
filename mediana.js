
function calcularMedia(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

const lista1 = [
    200,
    400,
    500,
    200000,
]

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    if(numero % 2=== 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if(esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemetno2 = lista1[mitadLista1];
    const promedio = calcularMedia([
        elemento1,
        elemetno2,
    ])
    mediana = promedio
} else {
    mediana = lista1[mitadLista1];
}


function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    lista.sort((a, b) => a - b);
    function esPar(numero) {
        if(numero % 2=== 0) {
            return true;
        } else {
            return false;
        }
    }
    let mediana;

    if(esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemetno2 = lista[mitadLista];
    const promedio = calcularMedia([
        elemento1,
        elemetno2,
    ])
    mediana = promedio
    } else {
    mediana = lista[mitadLista];
    }
    return mediana
}