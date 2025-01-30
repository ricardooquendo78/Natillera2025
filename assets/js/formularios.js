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