/*
&&-> false && true -> false "o valor mesmo"
||-> false || true -> true "o valor verdadeiro"

*/
const a =0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //false
console.log(a && b && c && d && e); //0
