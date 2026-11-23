function alternarEstado(id) {
    tareas = tareas.map(tarea => {
        if (tarea.id === id) {
            return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
    });
    guardarEnStorage();
    renderizarTareas();
}

function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    guardarEnStorage();
    renderizarTareas();
}

function actualizarContador() {
    const contadorElemento = document.getElementById('contador-pendientes');
    if (contadorElemento) {
        const pendientes = tareas.filter(tarea => !tarea.completada).length;
        contadorElemento.textContent = pendientes;
    }
}

function guardarEnStorage() {
    localStorage.setItem('mis_tareas', JSON.stringify(tareas));
}

actualizarContador();
