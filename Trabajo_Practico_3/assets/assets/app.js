let listaMenu = [
    "Elija una opcion", 
    "1.Agregar Tarea", 
    "2.Listar Tarea", 
    "3.Editar Tarea" ,
    "4.Eliminar Tarea"
];

let tareas = []
function mostrarMenu() {
    let listaVertical = parseInt(prompt(listaMenu.join("\n")));
    while (listaVertical!== 5){
        switch (listaVertical){
            case 1:
                agregarTarea();
                break;
            case 2:
                ListarTareas();
                break;
            case 3:
                editarTarea();
                break;
            case 4:
                eliminarTarea();
                break;
            default:
                alert("Opcion no valida");
                break;
        }
        listaVertical = parseInt(prompt(listaMenu.join("\n")));
    }
}
function agregarTarea(){
    let tarea = prompt('Ingrese una tarea');
    if (tarea && tarea.trim()) {
        tareas.push(tarea);
        alert("Tarea agregada: "+ tarea);
    }else {
        alert('Ingrese una tarea valida');
    }
}
function ListarTareas() {
    if (tareas.length === 0) {
        alert('No hay tareas en la lista.');
    }else {
        let lista = 'Lista de Tareas:\n';
        tareas.forEach((tarea, index) => {2
            lista += `${index + 1}. ${tarea}\n`;
        });
        alert(lista);
    }
}

function editarTarea() {
    ListarTareas();
    let numero = parseInt(prompt('Ingrese el numero de la tarea que desea editar: '));
    let indice = numero - 1;
    if (indice >= 0 && indice< tareas.length) {
        let nuevaTarea = prompt('Ingrese el nuevo nombre de la tarea:');
        if (nuevaTarea && nuevaTarea.trim()) {
            tareas[indice]= nuevaTarea;
            alert('Tarea actualizada');
        }else {
            alert('Ingrese un nombre de tarea valido');
        }
    } else {
        alert('Numero de tarea invalido');
    }
}
function eliminarTarea() {
    ListarTareas();
    let numero = parseInt(prompt('Ingrese el numero de la tarea que desea eliminar: '));
    let indice = numero - 1;
    if (indice >= 0 && indice< tareas.length) {
        let confirmar = confirm(`¿Esta seguro de que desea eliminar la tarea '${tareas[indice]}'?`);
        if (confirmar) {
            let tareaEliminada = tareas.splice(indice, 1);
            alert(`Tarea '${tareaEliminada}' eliminada.`);
        }
    } else {
        alert('Numero de tarea invalido');
    }
}
mostrarMenu();