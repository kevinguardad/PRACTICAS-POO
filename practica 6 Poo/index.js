// const comunicacion = {
//     enviarMensaje(mensaje){
//         console.log(`${this.nombre} envio: ${mensaje}`);
//     }
// };

// const Registro = {
//     registrarAccion(accion){
//         console.log(`${this.nombre} realizo: ${accion}`);
//     }
// };
// class Usuario{
//     constructor(nombre){
//         this.nombre=nombre;
//     }
// }

// Object.assign(Usuario.prototype, comunicacion, Registro );
// const usuario1 = new Usuario("Kevin");
// usuario1.enviarMensaje("hola, que tal");
// usuario1.registrarAccion("Inicio de Sesion");
class CuentaBancaria{
    #saldo;
    constructor(nombre, saldoInicial){
        this.nombre=nombre;
        this.#saldo = saldoInicial;
    }
    depositar(monto){
        if(monto > 0){
            this.#saldo += monto;
            console.log(`Deposito exitoso. Nuevo saldo: ${this.#saldo}`);

        }else{
            console.log(`Error el monto debe ser mayor a 0`);
        }
    }
    obtenerSaldo(){
        return `Saldo disponible: ${this.#saldo}`;

    }
}

const cuenta1 = new CuentaBancaria("Kevin", 1000);
console.log(cuenta1.obtenerSaldo());
cuenta1.depositar(500);
console.log(cuenta1.obtenerSaldo());