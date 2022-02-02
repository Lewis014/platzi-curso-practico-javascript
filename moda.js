const lista1 = [
    2,
    1,
    4,
    2,
    4,
    3,
    1,
    6,
    7,
    2,
]

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
    }
);  

const lista1Array = Object.entries(lista1Count).sort(
    function(a,b) {
        return a[1]-b[1];
    }
);

const moda = lista1Array[lista1Array.length - 1]

function calcularModa(lista) {
    const listaCount = {};
    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    ); 
    const listaArray = Object.entries(listaCount).sort(
        function(a,b) {
            return a[1]-b[1];
        }
    );
    const moda = listaArray[listaArray.length - 1]
    return moda
}





function calcularMediaGeometrica(lista) {
    productoLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado * nuevoElemento;
        }
    );
    if (productoLista <= 0) {
        return "Inserte valores positivos"
    } else {
        return productoLista ** (1 / lista.length);
    }
}   