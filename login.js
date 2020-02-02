  
const email = window.document.querySelector('#email');
const pass = window.document.querySelector('#pass');
const login = window.document.querySelector('#login');

login.addEventListener('click', mostrar);

function mostrar() {
    const emailvalue = email.value;
    const passValue = pass.value;

    if (emailvalue == 'ejemplo@gmail.com' && passValue == '123456') {
        console.log('Iniciando sesión…');
        location="../login/login.html"
        
    } else {
        console.log('Email y/o Contraseña incorrectos');
        alert('Email y/o Contraseña incorrectos')
    }
}
