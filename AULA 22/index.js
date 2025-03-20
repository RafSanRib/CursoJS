/*
Operadores Lógicos
&& -> AND -> E -> todas as expressões precisam ser vedadeira para retornar true
|| -> OR -> OU
! -> NOT -> NÃO

*/
// const expressaoAnd = true && true && true && true;
//const expressaoOr = true || false || true || false;
//console.log(expressaoOr); // false

const usuario = 'Luiz';  // form usuário digitou
const senha = '123456'; // form usuário digitou

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar); // true