const nome ='Rafael';
const sobrenome ='Santos';
const idade = 30;
const peso = 70;
const alturaEmM =  1.80; //
let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);//irá calcular as informações presentes no código
anoNascimento = 2022 - idade;
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);