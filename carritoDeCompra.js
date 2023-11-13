///CARRITO DE COMPRA
const SI = 'si';
const NO = 'no';

let nombreCliente;
let nombreProducto;
let precioProducto;
let cantidadProducto;
let total = 0
let detalleDeVentaDeProducto;
let continuar;
let boletaElectronica = 'Producto        Cantidad        Precio      Subtotal\n';

//Validación de que el nombre del cliente no sea igual a vacio o ha espacios en blanco
do{
    nombreCliente = prompt('¡Bienvenido a tu tienda tecnologica ZeroLag!\nIngrese su nombre');
    if(nombreCliente.trim() === '' || nombreCliente === null){
        alert('El nombre del cliente no puede estar vacio o contener espacios en blanco por favor, ingrese un nombre');
    }
} while(nombreCliente.trim() === '' || nombreCliente === null);

do {
    //Validación de que el nombre del producto no sea igual a vacio o ha espacios en blanco
    do{
        nombreProducto = prompt(`Carrito de producto(s) de ${nombreCliente.trim()}\nIngrese nombre del producto:`);
        if(nombreProducto.trim() === '' || nombreProducto === null){
            alert('El nombre del producto no puede estar vacio o contener espacios en blanco por favor, ingrese el nombre del producto que desea comprar')
        }
    } while(nombreProducto.trim() === '' || nombreProducto === null)

    //Validación de que la cantidad de producto no sea cualquier cosa ni un número negativo
    do {
        cantidadProducto = parseInt(prompt('Cantidad: '));
        if (isNaN(cantidadProducto) || cantidadProducto < 0) {
            alert('Ingrese un valor numérico positivo');
        }
    } while (isNaN(cantidadProducto) || cantidadProducto < 0);

    //Validación de que el precio del producto no sea cualquier cosa ni un número negativo
    do {
        precioProducto = parseInt(prompt('Precio del producto: '));
        if (isNaN(precioProducto) || precioProducto < 0) {
            alert('Ingrese valor númerico positivo');
        }
    } while (isNaN(precioProducto) || precioProducto < 0);

    detalleDeVentaDeProducto = `${nombreProducto.trim()}       ${cantidadProducto}       ${precioProducto}     $${cantidadProducto * precioProducto} \n`;

    boletaElectronica = boletaElectronica + detalleDeVentaDeProducto;

    total = total + (precioProducto * cantidadProducto);

    //validar que la respuesta no sea cualquier cosa
    do {
        continuar = prompt('¿Desea agregar otro producto? si/no').toLowerCase();
        if (continuar !== "no" && continuar !== "si"){
            alert('Ingresa una opción valida')
        }
    } while (continuar !== "no" && continuar !== "si");

} while (continuar === SI);

boletaElectronica = boletaElectronica + `Total: $${total}`;
alert(boletaElectronica);
alert(`¡Gracias ${nombreCliente.trim()} por comprar en ZeroLag!\nQue disfrutes tu compra`);