class Coche{
    constructor(marca, modelo, año, encendido){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.encendido = encendido;
    }

    mostrarInfo(){
        console.log(`El vehiculo es un ${this.marca} ${this.modelo} ${this.año}`)
    }
    encender(){
        if (this.encendido){
            console.log(`el vehiculo esta encendido`)
        }else{
            console.log(`El vehiculo esta apagado`)
        }
    }
}

let auto1 = new Coche("Nissan", "Sentra", 2022, true);
auto1.encender();
