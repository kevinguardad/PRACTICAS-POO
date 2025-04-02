class Vehiculo {
    moverse() {
        throw new Error("Este método debe ser implementado por las subclases");
    }
}

class Coche extends Vehiculo {
    moverse() {
        return "El coche está conduciendo por la carretera.";
    }
}

class Bicicleta extends Vehiculo {
    moverse() {
        return "La bicicleta está pedaleando por el carril.";
    }
}

class Avion extends Vehiculo {
    moverse() {
        return "El avión está volando por el cielo.";
    }
}

function simularMovimiento(vehiculos) {
    vehiculos.forEach(vehiculo => {
        console.log(vehiculo.moverse());
    });
}

const vehiculos = [
    new Coche(),
    new Bicicleta(),
    new Avion()
];

simularMovimiento(vehiculos);

    
