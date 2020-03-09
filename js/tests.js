var expect = chai.expect;

//Paso 2: Testeá la función reservarHorario(horario)
describe('Si se reserva un horario', () => {
    let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])

    it('Debe eliminarlo del arreglo', () => {
        restaurante.reservarHorario("13:00");
        expect(restaurante.horarios).eql(["15:30", "18:00"]);
    })

    it('Si se reservó un horario, cambia el largo del array ', () => {
        expect(restaurante.horarios.length).to.equal(2);
    })

    it('Que el restaurant no posee el array mantiene su largo', () => {
        restaurante.reservarHorario("12:00");
        expect(restaurante.horarios).eql(["15:30", "18:00"]);
    })

    it('Sin pasar parametros a la funcion el array se mantiene', () => {
        restaurante.reservarHorario();
        expect(restaurante.horarios).eql(["15:30", "18:00"]);
    })

})

//Paso 3: Testeá la función obtenerPuntuación()
describe('La funcion obtener puntuacion', () => {
    let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])

    it('Calcula correctamente el promedio', () => {
        expect(restaurante.obtenerPuntuacion()).to.equal(7.4);
    })

    let restauranteSinPuntuacion = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [])

    it('Si no tiene puntuacion, el resultado debe ser cero', () => {
        expect(restauranteSinPuntuacion.obtenerPuntuacion()).to.equal(0);
    })
})

//Paso 4: Testeá la función calificar()
describe('Si se califica', () => {
    let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [])

    it('Con un 1(uno)', () => {
        restaurante.calificar(1);
        expect(restaurante.obtenerPuntuacion()).to.equal(1);
    })

    it('Con un 10(diez)', () => {
        restaurante.calificar(10);
        expect(restaurante.obtenerPuntuacion()).to.equal(5.5);
    })

    it('"Pushea" correctamente la ultima nota al arreglo', () => {
        restaurante.calificar(5);
        expect(restaurante.calificaciones.length).to.equal(3);
    })
})

//Paso 5: Testeá la función buscarRestaurante(id)
describe('Si se busca un restaurant cuyo id', () => {
    let listadoDeRestaurantes = [
        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
    ];
    let listado = new Listado(listadoDeRestaurantes)
    let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [])
    listado.buscarRestaurante(1);

    it('Existe, el resultado es el correcto', () => {
        expect(restaurante.id).to.equal(1);
    })

    it('No existe, retorna que no se encontro el restaurant', () => {
        expect(listado.buscarRestaurante(2)).to.equal('No se ha encontrado ningún restaurant');
    })
})

//Paso 6: Testeá la función obtenerRestaurantes()
describe('Si se quiere obtener restaurantes', () => {
    let listadoDeRestaurantes = [
        new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
    ];
    let listado = new Listado(listadoDeRestaurantes)
    let restaurante = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5])
    listado.buscarRestaurante("Asiática");

    it('por rubro los resultados son correctos.', () => {
        expect(restaurante.rubro).to.equal("Asiática");
    })

})

//Guía 3: Agregando una nueva funcionalidad con TDD
describe('Se crea el objeto reserva con los siguientes atributos', () => {
    let reserva = new Reserva(new Date(2018, 7, 24, 11, 00), 7, 350, "DES1");

    it('El atributo horario debe ser un objeto del tipo "Date".', () => {
        expect(reserva.horario).to.be.a('Date');
    })

    it('La cantidad de personas debe ser un numero entero.', () => {
        expect(reserva.cantidadDePersonas % 1).to.equal(0);
    })

    it('El precio por persona debe ser un numero entero.', () => {
        expect(reserva.precioPorPersona).to.be.a('number');
    })

    it('El codigo de descuento debe ser un "string".', () => {
        expect(reserva.codigoDescuento).to.be.a('string');
    })
})

// Desarrollar la funcionalidad que calcule el precio base de una reserva
// El precio base de una reserva es igual a la cantidad de personas por el precio por persona
describe('La funcion precio base', () => {
    let reserva = new Reserva(new Date(2018, 7, 24, 11, 00), 2, 350, "DES1");
    it('devuelve el resultado correcto', () => {
        expect(reserva.calcularPrecioBase()).to.be.equal(700);
    })

})

//3) Desarrollar la funcionalidad que calcule el precio total de una reserva
//La reserva debe ser capaz de responder el precio final:
//precio final = precio base + adicionales - descuentos

describe('La funcion precio total de una reserva', () => {
    //reserva con un 5%
    let reservaDescCinco = new Reserva(new Date(2019, 11, 19, 11, 00), 4, 200, " ");
    it('Si corresponden descuentos del 5%, los hace correctamente', () => {
        //400*2 - 5% = 760
        expect(reservaDescCinco.calcularPrecioTotal()).to.be.equal(760);
    })
    //reserva con un 10%
    let reservadescConDiez = new Reserva(new Date(2019, 11, 19, 11, 00), 8, 200, " ");
    it('Si corresponden descuentos del 10%, los hace correctamente', () => {
        //800*2 - 10% = 1440
        expect(reservadescConDiez.calcularPrecioTotal()).to.be.equal(1440);
    })
    //reserva con un 15%
    let reservadescConQuince = new Reserva(new Date(2019, 11, 19, 11, 00), 9, 200, " ");
    it('Si corresponden descuentos del 15%, los hace correctamente', () => {
        //900*2 - 15% = 1530
        expect(reservadescConQuince.calcularPrecioTotal()).to.be.equal(1530);
    })


    let reservaDescuentoPorCodigo = new Reserva(new Date(2019, 11, 19, 11, 00), 2, 350, "DES1");
    it('Si utilizamos el codigo DES1 responde correctamente', () => {
        //Se hace el descuento por el valor de una persona
        expect(reservaDescuentoPorCodigo.calcularPrecioTotal()).to.be.equal(350);
    })

    let reservaConDescuentoDe200 = new Reserva(new Date(2019, 11, 19, 11, 00), 2, 350, "DES200");
    it('Si utilizamos el codigo DES200 responde correctamente', () => {
        expect(reservaConDescuentoDe200.calcularPrecioTotal()).to.be.equal(500);
    })

    let reservaConDescuentoDel15PorCiento = new Reserva(new Date(2019, 11, 19, 11, 00), 2, 350, "DES15");
    it('Si utilizamos el codigo DES15 Responde correctamente', () => {
        expect(reservaConDescuentoDel15PorCiento.calcularPrecioTotal()).to.be.equal(595);
    })

    let reservaConAdicionalHorario = new Reserva(new Date(2019, 11, 19, 13, 00), 2, 350, " ");
    it('Se reserva en horario concurrido tiene un adicional del 5%', () => {
        expect(reservaConAdicionalHorario.calcularPrecioTotal()).to.be.equal(735);
    })

    let reservaSabado = new Reserva(new Date(2019, 11, 21, 11, 00), 2, 350, " ");
    it('Se reserva en fines de semana tiene un adicional del 10%', () => {
        expect(reservaSabado.calcularPrecioTotal()).to.be.equal(770);
    })
})


