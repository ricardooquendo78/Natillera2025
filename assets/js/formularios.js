// Actualizar
document.getElementById('btnActualizar').addEventListener('click', abrirFormulario);

    const botonActualizar = document.getElementById('btnActualizar');
    const botonCerrar = document.getElementById('btnReset');
    const formulario = document.getElementById('formularioActualizar');
    const overlay = document.getElementById('overlay');


function abrirFormulario (){
    
    formulario.style.display = 'block';
    overlay.style.display = 'block';

    botonCerrar.addEventListener('click', () => {
        formulario.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        formulario.style.display = 'none';
        overlay.style.display = 'none';
    });
}

document.getElementById('formularioActualizar').addEventListener('submit',function(event){
    
    event.preventDefault();

    const fecha = document.getElementById('fecha').value;
    const monto = document.getElementById('monto').value;
    const mes = document.getElementById('mes').value;

    if(fecha.trim() === '' || monto.trim() === '' || mes.trim() === ''){
        alert('Todos los campos son obligatorios bb.');
        return;
    }

    const tabla = document.getElementById('tablaPerfiles').getElementsByTagName('tbody')[0];

    const nuevaFila = tabla.insertRow();
    const celdaFecha = nuevaFila.insertCell(0);
    const celdaMonto = nuevaFila.insertCell(1);
    const celdaMes = nuevaFila.insertCell(2);
    const celdaActualizar = nuevaFila.insertCell(3);

    celdaFecha.textContent = fecha;
    celdaMonto.textContent = monto;
    celdaMes.textContent = mes;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = function(){
        tabla.removeChild(nuevaFila);
    };
    celdaActualizar.appendChild(btnEliminar);

    document.getElementById('formularioActualizar').reset();

});




//     botonActualizar.addEventListener('click', () => {
//         formulario.style.display = 'block';
//         overlay.style.display = 'block';
//     });

//     botonCerrar.addEventListener('click', () => {
//         formulario.style.display = 'none';
//         overlay.style.display = 'none';
//     });

//     overlay.addEventListener('click', () => {
//         formulario.style.display = 'none';
//         overlay.style.display = 'none';
//     });
// });