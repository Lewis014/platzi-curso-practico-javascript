//Código del Cuadrado

    //Abres el grupo

console.group("Cuadrados");

    //const ladoCuadrado = 5;
    //console.log ("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return 4* lado;
}
//console.log ("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//console.log ("El área del cuadrado mide: " + areaCuadrado + "cm^2");

//Cierras el grupo y así con los démas

console.groupEnd();

//Código del Triángulo

//  console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

//  console.log (
//      "Los lados del triangulo miden: "
//     + ladoTriangulo1
//     + "cm, "
//     + ladoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm "
//     ); 

//  const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm"); 

function perimetroTriangulo(lado1,lado2,base) {
    return lado1+lado2+base
}

//  const perimetroTriangulo = baseTriangulo + ladoTriangulo1 + ladoTriangulo2;
// console.log ("El perimetro del triángulo mide: " + perimetroTriangulo + "cm"); 

function areaTriangulo(altura,base) {
    return (altura * base)/2;
}

//  const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2 ;
// console.log ("El área del triángulo mide: " + areaTriangulo + "cm^2"); 

console.groupEnd();

//Código del Círculo

console.group("Círculos");
 
//Radio

// const radioCirculo = 4;
// console.log ("El radio del círculo es: " + radioCirculo + "cm");
 
//Diámetro

function diametroCirculo(radio) {
    return radio * 2;
}

//Pi

const pi = Math.PI
console.log ("Pi es: " + pi + "cm");
//Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

//Areá

function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();

//Código de triángulo isosceles

function alturaTrianguloIsosceles(ladoA,ladoB,base) {
    if( ladoA != ladoB) {
        console.error("Valores incorrectos, los lado no son iguales");
    }else {
        const pequenoLadoB = base/2;
        const pequenoLadoBase = ladoA;
        const pequenoLadoBCuadrado = pequenoLadoB * pequenoLadoB;
        const pequenoLadoBaseCuadrado = pequenoLadoBase * pequenoLadoBase;
        const pequenoLadoA = Math.sqrt(pequenoLadoBCuadrado - pequenoLadoBaseCuadrado);
        const grandeAltura = pequenoLadoA
        return grandeAltura
    }   
}

//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputBaseTriangulo");
    const value = parseFloat(input.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);
    const perimetro = perimetroTriangulo(value,value2,value3)
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const input2 = document.getElementById("InputAlturaTriangulo")
    const value = input.value;
    const value2 = input2.value;
    const area = areaTriangulo(value,value2);
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

function calcularAlturaTrianguloIsosceles() {
    const iladoA = document.getElementById("InputTrianguloLadoA");
    const iladoB = document.getElementById("InputTrianguloLadoB");
    const ibase = document.getElementById("InputTrianguloBase");
    const ladoA = parseFloat(iladoA.value);
    const ladoB = parseFloat(iladoB.value);
    const base = parseFloat(ibase.value);
    const altura = alturaTrianguloIsosceles(ladoA,ladoB,base)
    alert(altura);
}