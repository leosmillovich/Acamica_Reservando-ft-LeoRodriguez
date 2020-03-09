class Reserva {
    constructor(horario, cantidadDePersonas, precioPorPersona, codigoDescuento) {
        this.horario = horario; //Horario: objeto de tipo Date que va a representa la fecha y la hora de la reserva.
        this.cantidadDePersonas = cantidadDePersonas; //Cantidad de personas: un número entero.
        this.precioPorPersona = precioPorPersona; //Precio por persona: un número entero.
        this.codigoDescuento = codigoDescuento; //Código de descuento: un string.
    }
    calcularPrecioBase() {
        return this.cantidadDePersonas * this.precioPorPersona;
    }
    calcularPrecioTotal() {
        return this.calcularPrecioBase() - this.calcularDescuentos() + this.calcularAdicionales();

    }
    //calcula los descuentos por cantidad de personas
    descuentosPorCantidad() {
        var personas = this.cantidadDePersonas;
        var descuentoPorCantidad = 0;
        if (personas > 3 && personas < 7) {
            var descuentoPorCantidad = this.calcularPrecioBase() * 0.05;
        }
        else if (personas > 6 && personas < 9) {
            var descuentoPorCantidad = this.calcularPrecioBase() * 0.10;
        }
        else if (personas > 8) {
            var descuentoPorCantidad = this.calcularPrecioBase() * 0.15;
        }
        return descuentoPorCantidad;
    }
    //Calcula los descuentos Por codigo
    descuentosPorCodigo() {
        var codigoDescuento = this.codigoDescuento;
        var descuentoPorCodigo = 0;
        if (codigoDescuento === "DES1") {
            var descuentoPorCodigo = this.precioPorPersona;
        }
        else if (codigoDescuento === "DES200") {
            var descuentoPorCodigo = 200;
        }
        else if (codigoDescuento === "DES15") {
            var descuentoPorCodigo = this.calcularPrecioBase() * 0.15;
        }
        return descuentoPorCodigo;
    }
    //Llama a las funciones de descuentos 
    calcularDescuentos() {
        return this.descuentosPorCantidad() + this.descuentosPorCodigo();
    }

    //Calcula los adicionales por hora si corresponde
    adicionalesPorhora() {
        var hora = this.horario.getHours();
        var adicionalPorHora = 0;
        if (hora >= 13 && hora <= 14) {
            var adicionalPorHora = this.calcularPrecioBase() * 0.05;
        } else if (hora >= 20 && hora <= 21) {
            var adicionalPorHora = this.calcularPrecioBase() * 0.10;
        }
        return adicionalPorHora;
    }

    //Calcula si al horario de la reserva le corresponde adicional
    adicionalPorDia() {
        var dia = this.horario.getDay();
        var adicionalPorDia = 0;
        if (dia == 5 || dia == 6 || dia == 0) {
            var adicionalPorDia = this.calcularPrecioBase() * 0.10;
        }
        return adicionalPorDia;
    }
    //Llama a las funciones de adicionales
    calcularAdicionales(){
        return this.adicionalesPorhora() + this.adicionalPorDia();
    }
}