document.getElementById('cambiarVistaBtn').addEventListener('click', function () {
    const ejerciciosActuales = document.getElementById('ejerciciosActuales');
    const contenedorBotones = document.getElementById('contenedorBotonesEjercicios');

    if (ejerciciosActuales.style.display === 'none') {
        ejerciciosActuales.style.display = 'block';
        contenedorBotones.style.display = 'none';
        this.textContent = 'Mostrar Ejercicios';
    } else {
        ejerciciosActuales.style.display = 'none';
        contenedorBotones.style.display = 'flex';
        this.textContent = 'Ocultar Ejercicios';
    }
});

