//conversion implicita
const edad = 39;
const edadUsuario = '39';

console.log(edad == edadUsuario);

//consversion explicita

console.log(Number(edadUsuario));
console.log(String(edad));
console.log(edad+Number(edadUsuario));
console.log(String(edad)+edadUsuario);