class Empleado {
    #sueldo
    constructor(nombre, puesto, sueldo){
        this.nombre = nombre;
        this.puesto = puesto;
        this.#sueldo = sueldo
    }
    getSueldo(){
        return this.#sueldo;
    }
    setSueldo(nuevoSueldo){
        if(nuevoSueldo > this.#sueldo){
            this.#sueldo = nuevoSueldo;
        } else{
            console.log("Jodase!")
        }
    }
    showInfo(){
        console.log(`Empleado: ${this.nombre}, puesto: ${this.puesto}, Sueldo: ${this.#sueldo}`);
    }
}
const empleado1 = new Empleado("Kevin", "Desarrollador", "900");
empleado1.showInfo();//info personal
empleado1.setSueldo(100);//jodase
empleado1.showInfo();//info personal
empleado1.setSueldo(2000); //Modifica el sueldo
empleado1.showInfo();// info personal


