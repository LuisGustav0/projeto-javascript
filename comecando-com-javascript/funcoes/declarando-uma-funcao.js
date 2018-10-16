
//console.log(dizerOi('Luis Gustavo')); //Olá Luis Gustavo
//console.log(dizerOla('Luis Gustavo')); // undefined
//console.log(dizerTchau('Luis Gustavo')); //undefined

// function dizerOi
function dizerOi(nome) {
  console.log('Olá ' + nome);
}
dizerOi('Luis Gustavo');
//Fim function dizerOi


// function dizerOla
var dizerOla = function (nome) {
  console.log('Olá ' + nome);
};
dizerOla('Luis Gustavo');
//Fim function dizerOla

// function dizerTchau
var dizerTchau = new Function('nome', 'console.log(\'Tchau \' + nome);');

dizerTchau('Luis Gustavo');
//Fim function dizerTchau