class Figura {
    radio;
    calcularArea(){
        throw new Error("Este metodo debe ser implementado por las subclases o clases hijas")
    }
}

class Circulo extends Figura{
    constructor(radio){
        super(); 
        this.radio = radio
    }
    //Sobre escritura de metodo calcularArea o Polimofismo
    calcularArea(){
        return Math.PI * this.radio ** 2;
    }
}

class Rectangulo extends Figura {
    constructor(ancho, alto){
        super();
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea(){
        return this.ancho * this.alto
    }
}

class Triangulo extends Figura {
    constructor(base, altura){
        super();
        this.base = base;
        this.altuta = altura;
    }
    calcularArea(){
        return (this.base * this.altuta) / 2;
    }
}

function calcularAreas(figuras){
    figuras.forEach(figura => {
        console.log(`Area de ${figura.constructor.name}: ${figura.calcularArea().toFixed(2)};`);
    });
}

const figuras = [
    new Circulo(5),
    new Rectangulo(4, 6),
    new Triangulo(3, 8)
];

calcularAreas(figuras);