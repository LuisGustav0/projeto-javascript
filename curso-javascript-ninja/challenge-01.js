// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

console.log('Declarar uma variável chamada `myvar`, sem valor: ', myvar);

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

console.log('Após declarada, atribua o valor 10 à variável `myvar`: ', myvar);

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;

console.log('Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8: ', soma);

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma++;

console.log('Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado: ', soma);

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *= 3;

console.log('Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado: ', soma);

// Qual é o valor da variável `soma` até aqui?
console.log('Qual é o valor da variável `soma` até aqui? ', soma);

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;

console.log('Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`: ', souninja);

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['arroz', 'feijão', 'ovo'];

console.log('Declare uma variável chamada `comida` que recebe um array com os valores ´arroz´, ´feijão´ e ´ovo´: ', comida);

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log('Digite a instrução que imprime o valor de ´feijao´, que está na variável `comida`: ', comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo). 
console.log('Digite o código que verifica se a variável ´soma´ é igual a variável ´myvar´ (testando também o tipo): ', (soma === myvar));

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log('Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`: ', (myvar <= soma));

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function onDivisao(numero1, numero2) {
	if(numero2 === 0) {
		console.log('O ' + numero1 + ' não pode dividir por ZERO!');
		return '';
	}

	return numero1 / numero2;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.

console.log('Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles: ', onDivisao(10, 2));
