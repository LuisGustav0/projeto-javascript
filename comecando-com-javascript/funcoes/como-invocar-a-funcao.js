function dizerOi(nome) {
  console.log('Oi, ' + nome);
  console.log(this);
}

//dizerOi('Luis Gustavo');

//dizerOi.call(null, "Arya");
//dizerOi.apply(null, ['Arya']);

dizerOi.call({}, "Arya");
dizerOi.apply({}, ['Arya']);

