class Restaurant {
    constructor(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
        this.id = id;
        this.nombre = nombre;
        this.rubro = rubro;
        this.ubicacion = ubicacion;
        this.horarios = horarios;
        this.imagen = imagen;
        this.calificaciones = calificaciones;
    }
    reservarHorario(horarioReservado) {
        this.horarios = this.horarios.filter(horario => horario !== horarioReservado);
    }
    calificar(nuevaCalificacion) {
        //Se modifica la funcion, no acepta el valor numerico 10(diez)
        if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 11) {
            this.calificaciones.push(nuevaCalificacion);
        }
    }
    obtenerPuntuacion() {
        return this.calificaciones.length === 0 ? 0 : this.promedio(this.calificaciones);
        // if (this.calificaciones.length === 0) {
        //     return 0;
        // } else {
        //     return this.promedio(this.calificaciones);
        // }
    }
    //funcion que suma numeros de un array
    sumatoria(numeros) {
        let suma = numeros.reduce((a, b) => a + b);
        return suma;
    }
    //funcion que llama a sumatoria(numeros) como divisor y los divide por el largo del array
    promedio(numeros) {
        let divisor = numeros.length;
        let dividendo = this.sumatoria(numeros);
        let resultado = dividendo / divisor;
        return Math.round(resultado * 10) / 10;
    }
}






