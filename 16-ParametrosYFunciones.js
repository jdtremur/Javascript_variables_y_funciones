//Los parametros son los que se reciben en la funcion (a, b)
function porcentajeSuma(a, b){
    let c = a + b;
    c*=10/100;
    return c;
}

//Los argunamentos son los que se envian a la funcion (15, 36)
console.log(porcentajeSuma(15, 36));
console.log(porcentajeSuma(2750, 15));

function saludar(saludo = 'Hola, Buenas'){
    console.log(saludo)
}

function mostrarTexto(texto1, texto2, texto3){
    console.log(texto1);
    console.log(texto2);
    console.log(texto3);
}

saludar();
mostrarTexto('Soy Julian', 'Soy Desarrollador de Software', 'Me gusta programar')