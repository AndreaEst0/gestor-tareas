// Inicializar arreglo desde localStorage o vacío
let tareas = JSON.parse(localStorage.getItem('mis_tareas')) || [];

const formTarea = document.getElementById('form-tarea');
const inputTarea = document.getElementById('input-tarea');
const listaTareas = document.getElementById('lista-tareas');

// Evento para agregar nueva tarea sin recargar la página
formTarea.addEventListener('submit', function (e) {
    e.preventDefault();
    const texto = inputTarea.value.trim();
    if (texto === '') return;

    const nuevaTarea = {
        id: Date.now(),
        texto: texto,
        completada: false
    };

    tareas.push(nuevaTarea);
    inputTarea.value = '';

    if (typeof guardarEnStorage === 'function') {
        guardarEnStorage();
    }
    renderizarTareas();
});