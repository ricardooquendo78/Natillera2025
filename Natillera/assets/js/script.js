document.getElementById('btnIniciarSesion').addEventListener('click', iniciarSesion);
document.getElementById('btnRegistrarse').addEventListener('click', registro);
window.addEventListener('resize', anchoPagina);


// Declaración de variables

let contenedorLoginRegistro = document.querySelector('.contenedorLoginRegistro');
let formularioLogin = document.querySelector('.formularioLogin');
let formularioRegistro = document.querySelector('.formularioRegistro');
let cajaTraseraLogin = document.querySelector('.cajaTraseraLogin');
let cajaTraseraRegistro = document.querySelector('.cajaTraseraRegistro');


function anchoPagina(){
    if(window.innerWidth > 850 ){
        cajaTraseraLogin.style.display = 'block';
        cajaTraseraRegistro.style.display = 'block';
    }else{
        cajaTraseraRegistro.style.display = 'block';
        cajaTraseraRegistro.style.opacity = '1';
        cajaTraseraLogin.style.display = 'none';
        formularioLogin.style.display = 'block';
        formularioRegistro.style.display = 'none';
        contenedorLoginRegistro.style.left = '0px';
    }
}

anchoPagina();

function iniciarSesion(){

    if(window.innerWidth > 850 ){
        formularioRegistro.style.display = 'none';
        contenedorLoginRegistro.style.left = '10px';
        formularioLogin.style.display = 'block';
        cajaTraseraRegistro.style.opacity = '1';
        cajaTraseraLogin.style.opacity = '0';
    }else{
        formularioRegistro.style.display = 'none';
        contenedorLoginRegistro.style.left = '0px';
        formularioLogin.style.display = 'block';
        cajaTraseraRegistro.style.display = 'block';
        cajaTraseraLogin.style.display = 'none';
    }
}

function registro(){

    if(window.innerWidth > 850 ){
        formularioRegistro.style.display = 'block';
        contenedorLoginRegistro.style.left = '410px';
        formularioLogin.style.display = 'none';
        cajaTraseraRegistro.style.opacity = '0';
        cajaTraseraLogin.style.opacity = '1';
    }else{
        formularioRegistro.style.display = 'block';
        contenedorLoginRegistro.style.left = '0px';
        formularioLogin.style.display = 'none';
        cajaTraseraRegistro.style.display = 'none';
        cajaTraseraLogin.style.display = 'block';
        cajaTraseraLogin.style.opacity = '1';
    }

}
