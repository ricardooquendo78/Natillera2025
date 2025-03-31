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
    btnEliminar.textContent = 'X';
    btnEliminar.style.padding = '15px';
    btnEliminar.style.paddingTop = '3px';
    btnEliminar.style.paddingBottom = '3px';
    btnEliminar.style.marginBottom = '4px';
    document.body.appendChild(btnEliminar);
    btnEliminar.onclick = function(){
        tabla.removeChild(nuevaFila);
    };
    celdaActualizar.appendChild(btnEliminar);

    document.getElementById('formularioActualizar').reset();
});

// Prestamos

function sumarFila(){
    let tabla = document.getElementById('tblPrestamos').getElementsByTagName('tbody')[0];
    let nuevaFila1 = tabla.insertRow();

    let celdaFecha = nuevaFila1.insertCell(0);
    let celdaNombre = nuevaFila1.insertCell(1);
    let celdaMonto = nuevaFila1.insertCell(2);
    let celdaDeuda = nuevaFila1.insertCell(3);
    let celdaInteres = nuevaFila1.insertCell(4);
    let celdaFechaUltimoPago = nuevaFila1.insertCell(5);
    let celdaEstado = nuevaFila1.insertCell(6);

    celdaFecha.innerHTML = '<input type="date" placeholder="Fecha">';
    celdaNombre.innerHTML = '<input type="text" placeholder="Nombre">';
    celdaMonto.innerHTML = '<input type="number" placeholder="Monto">';
    celdaDeuda.innerHTML = '<input type="number" placeholder="Deuda">';
    celdaInteres.innerHTML = '<input type="number" placeholder="Interes">';
    celdaFechaUltimoPago.innerHTML = '<input type="date" placeholder="Fecha Ultimo Pago">';
    // celdaEstado.innerHTML = '<input type="binomial" placeholder="Estado">';
    celdaEstado.innerHTML = '<button onclick="eliminarFila(this)">Eliminar</button>';

};

function eliminarFila(boton) {
    let fila = boton.parentNode.parentNode;
    fila.parentNode.removeChild(fila);
}


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