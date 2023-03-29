let menu;
let jugadores = [];

class Jugador {
    constructor(nombre, apellido, anioDeNacimiento, posicion, numJersey, id) {
        this. nombre = nombre;
        this.apellido = apellido;
        this.anioDeNacimiento = anioDeNacimiento;
        this.posicion = posicion;
        this.numJersey = numJersey;
        this.id = id;
    }

    asignarId(array){
        this.id = array.length;
    }
};

function agregarJugador(arrayJugadores){
    
    let nombre = prompt("Ingresa solo el nombre del jugador.");
    let apellido = prompt("Ingresa los apellidos del jugador.");
    let anioDeNacimiento = parseInt(prompt("Ingresa el año de nacimiento del jugador."));
    let posicion = prompt("Ingresa la posicion en la que juega (Escribe uno): LB, C, DL, FS, SS, OL RB, QB, WR");
    let numJersey = parseInt(prompt("Ingresa el numero de jersey del jugador."));
    const jugador = new Jugador(nombre, apellido, anioDeNacimiento, posicion, numJersey);
    arrayJugadores.push(jugador);
    jugador.asignarId(arrayJugadores);
};

function mostrarJugador(arrayJugadores){
    if(arrayJugadores == null || arrayJugadores == ""){
        alert("No hay jugadores registrados aun");
    }else{
        for (const elemento of arrayJugadores) {
            alert(`Jugador #${elemento.id}
            Nombre: ${elemento.nombre} ${elemento.apellido}
            Jersey: ${elemento.numJersey}
            Posicion: ${elemento.posicion}
            Año de nacimiento: ${elemento.anioDeNacimiento}`);
        }
        console.log(arrayJugadores);
    }
    
}

function eliminarJugador(arrayJugadores){
    let idEliminar = prompt("Ingresa el ID del jugador que deseas eliminar:");
    alert(`Se eliminará el jugador #${idEliminar}
        Nombre:${arrayJugadores[idEliminar-1].nombre} ${arrayJugadores[idEliminar-1].apellido}
        Jersey: ${arrayJugadores[idEliminar-1].numJersey}`);
    arrayJugadores.splice(((idEliminar)-1),1);
    actualizarID(arrayJugadores);
}

function actualizarID(arrayJugadores){
    for (let i = 0; i < arrayJugadores.length; i++) {
        arrayJugadores[i].id = i+1;
    }
    alert(`Se actualizaron los ID`);
}

function buscarID(arrayJugadores){
    let idBusca = prompt("Ingresa el ID del jugador que deseas buscar:");
    let buscarId = arrayJugadores.filter(jugador => jugador.id == idBusca);
    console.log(buscarId);
}

do{
    menu = prompt("Ingresa una opcion\n\n1. Ver jugadores registrados\n2. Agreagar un jugador\n3. Eliminar un jugador\n4. Buscar jugador por ID\n5. Salir");
    if(menu == 1){
        mostrarJugador(jugadores);
        
    }else if(menu == 2){
        agregarJugador(jugadores);

    }else if(menu == 3){
        eliminarJugador(jugadores);
        
    }else if (menu == 4) {
        
        buscarID(jugadores)
    }else if(menu == 5){
        let sure = prompt("Estas seguro que deseas salir?\n0.Cancelar\n1. Salir");
        if(sure == 1){
            menu = 6;
            break;
        }
    }else{
        alert("Seleccione una opcion valida");
    }
}while(menu != 6)





