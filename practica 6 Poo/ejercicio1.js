const Autenticacion = {
    login(usuario){
        console.log(`${usuario} ha iniciado sesion`);

    }
};

const Notificacion = {
    enviarNotificaion(mensaje){
        console.log(`Notificacion: ${mensaje}`);

    }
};

class Usuario{
    constructor(nombre){
        this.nombre = nombre;
    }
}

Object.assign(Usuario.prototype, Autenticacion, Notificacion);

const usuario1 = new Usuario("Kevin Guardado");
usuario1.login(usuario1.nombre);
usuario1.enviarNotificaion("Tienes un mensaje pendiente");