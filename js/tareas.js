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

// Función para renderizar dinámicamente la lista en el DOM
function renderizarTareas() {
    listaTareas.innerHTML = '';

    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.className = tarea.completada ? 'tarea-item completada' : 'tarea-item';

        li.innerHTML = `
            <span onclick="alternarEstado(${tarea.id})">${tarea.texto}</span>
            <div class="botones">
                <button type="button" onclick="alternarEstado(${tarea.id})" title="Completar">✔</button>
                <button type="button" onclick="eliminarTarea(${tarea.id})" title="Eliminar">🗑️</button>
            </div>
        `;
        listaTareas.appendChild(li);
    });

    if (typeof actualizarContador === 'function') {
        actualizarContador();
    }
}

// Renderizar tareas guardadas al cargar la página
document.addEventListener('DOMContentLoaded', renderizarTareas);