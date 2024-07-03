const numero = Number(prompt('Digite um Número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>Raiz Quadrada: é ${numero ** 0.5}.</p> `;
texto.innerHTML += `<p>É NaN: é ${Number.isNaN(numero)}.</p> `;
texto.innerHTML += `<p>${numero} é inteiro: é ${Number.isInteger(numero)}.</p> `;
texto.innerHTML += `<p>É Arredondado para baixo: ${Math.floor(numero)}.</p> `;
texto.innerHTML += `<p>É Arredondado para cima: ${Math.ceil(numero)}.</p> `;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p> `;