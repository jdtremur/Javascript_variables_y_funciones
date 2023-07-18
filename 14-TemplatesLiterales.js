const paisNacimiento = 'Colombia';
const nombre = 'Julian';
const hobbi = 'programar'
const texto = 'Mi nombre es '+nombre+', naci en '+paisNacimiento+"\n"+'Actualmente vivo en '+paisNacimiento+"\n"+'mi hobbi faborito es '+hobbi;

//console.log(texto);

const textoTemplates = `Mi nombre es ${nombre}, naci en ${paisNacimiento}.
actualmente vivo en ${paisNacimiento}.
mi hobbi faborito es ${hobbi}.
`;
console.log(textoTemplates);