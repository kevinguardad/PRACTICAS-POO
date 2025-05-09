class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    listar() {
        return this.productos;
    }
}

class Cliente {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
}

class Notificador {
    static enviarCorreo(destinatario, mensaje) {
        console.log(`Correo a ${destinatario.correo}: ${mensaje}`);
    }
}

class Tienda {
    constructor() {
        this.inventario = new Inventario();
        this.clientes = [];
    }

    registrarCliente(cliente) {
        this.clientes.push(cliente);
    }

    venderProducto(cliente, producto) {
        if (this.inventario.productos.includes(producto)) {
            console.log(`Venta realizada: ${producto} a ${cliente.nombre}`);
            Notificador.enviarCorreo(cliente, "Gracias por su compra.");
        } else {
            console.log("Producto no disponible.");
        }
    }
}

// Ejecución
const tienda = new Tienda();
const cliente1 = new Cliente("Ana", "ana@mail.com");

tienda.inventario.agregarProducto("Camisa");
tienda.registrarCliente(cliente1);
tienda.venderProducto(cliente1, "Camisa");