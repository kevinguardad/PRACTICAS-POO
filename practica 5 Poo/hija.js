const Padre = require('./padree')

class Hija extends Padre{
    constructor(nombre, edad, hermanos){
        super(nombre,edad);
        this.hermanos = hermanos
    }
    saludar(){
        console.log(`Hola soy ${this._nombre} y soy una clase hija`);
    }
    presentarHermanos(){
        console.log(`Mis hermanos son: ${this.hermanos.join(',')}`);
    }
}

const hija = new Hija('Paola', 30, ['Kevin' ,  'Jenny']);
hija.saludar();
hija.presentarHermanos();