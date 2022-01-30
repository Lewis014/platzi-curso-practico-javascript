// const precioOriginal = 120;
// const descuento = 18;



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })

function calcularPrecioDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

function priceDiscount() {
    const inputPrice = document.getElementById("inputPrice")
    const priceValue = inputPrice.value  

    const inputDiscount = document.getElementById("inputDiscount")
    const discountValue = inputDiscount.value

    const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue)
    const resultP = document.getElementById("ResultP")
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento
}

function priceDiscountWithCoupons() {
    const coupons = [
        "FreeCash",
        "Birthday",
        "Happy",
    ];

    const inputPrice = document.getElementById("inputPrice")
    const priceValue = inputPrice.value  

    const inputDiscount = document.getElementById("inputCupon")
    const discountValue = inputDiscount.value

    let descuento;

    switch(discountValue) {
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 20;
        break;
        case coupons[2]:
            descuento = 25;
        break;
    }

    const precioConDescuento = calcularPrecioDescuento(priceValue, descuento)
    const resultP = document.getElementById("ResultPD")
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento
}