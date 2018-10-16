// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(numero1, numero2) {
	return numero1 + numero2;
}

console.log('Crie uma função que receba dois argumentos e retorne a soma dos mesmos: ', somar(10, 2));

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
console.log('Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função: ', somar(10, 2) + 5);

// Qual o valor atualizado dessa variável?
console.log('Qual o valor atualizado dessa variável?: ',  somar(10, 2) + 5);

// Declare uma nova variável, sem valor.
var newVar;

console.log('Declare uma nova variável, sem valor: ', newVar);

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionarValor() {
	newVar = 15;

	return 'O valor da variável agora é: ' + newVar;
}

// Invoque a função criada acima.
console.log(adicionarValor());

// Qual o retorno da função? (Use comentários de bloco).
/*O valor da variável agora é: ' 15*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function onNewFunction(numero1, numero2, numero3) {
	if(!numero1 || !numero2 || !numero3) {
		return 'Preencha todos os valores corretamente!';
	}

	return (numero1 * numero2 * numero3) + 2;
}

console.log('O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação: ', onNewFunction());

// Invoque a função criada acima, passando só dois números como argumento.
console.log('Invoque a função criada acima, passando só dois números como argumento: ', onNewFunction(2, 5));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/*Preencha todos os valores corretamente!*/

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log('Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários: ', onNewFunction(2, 5, 3));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* 32 */

//Crie uma função com as seguintes características:
//1. A função deve receber 3 argumentos.

function newFunction(numero1, numero2, numero3) {
	if(!!numero1 && !numero2 && !numero3) {
		return numero1;
	}

	if(!!numero1 && !!numero2 && !numero3) {
		return numero1 + numero2;
	}

	if(!!numero1 && !!numero2 && !!numero3) {
		return (numero1 + numero2) / numero3;
	}

	if(!numero1 && !numero2 && !numero3) {
		return false;
	}

	return null;	
}

//2. Se somente um argumento for passado, retorne o valor do argumento.
console.log('Se somente um argumento for passado, retorne o valor do argumento: ', newFunction(2));

//3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
console.log('Se dois argumentos forem passados, retorne a soma dos dois argumentos: ', newFunction(10, 2));

//4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
console.log('Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro: ', newFunction(10, 2, 3));

//5. Se nenhum argumento for passado, retorne o valor booleano `false`.
console.log('Se nenhum argumento for passado, retorne o valor booleano `false`: ', newFunction());

//6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
console.log('E ainda, se nenhuma das condições acima forem atendidas, retorne `null`: ', newFunction(null, 2));

// OBS: Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log('Com nenhum argumento: ', newFunction()); //false
console.log('Com um argumento: ', newFunction(1)); //1
console.log('Com dois argumento: ', newFunction(1, 2)); //3
console.log('Com três argumento: ', newFunction(1, 2, 3)); //1