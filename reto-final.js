function calcularTasaDeAhorro() {
    const inputIngresos = document.getElementById("inputIngresos");
    const ingresos = inputIngresos.value
    const inputGastos = document.getElementById("inputGastos");
    const gastos = inputGastos.value

    const tasaDeAhorro = ((ingresos - gastos)/ ingresos) * 100;
    const ahorro = tasaDeAhorro.toFixed(2) + "%"
    const resultT = document.getElementById("ResultT")
    resultT.innerText = "Su tasa de ahorro es: " + ahorro

}