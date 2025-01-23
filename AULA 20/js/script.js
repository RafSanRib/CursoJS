function meuEscopo () {
    const form = document.querySelector('.form');

   // form.onsubmit = function (evento) {
   //     alert(1);
   //     console.log('Foi Enviado.'); };

   let contador = 1;
   function recebeEventoForm (evento) {
    evento.preventDefault();
    console.log(`Form não foi enviado ${contador}`);
    contador++;
   }

   form.addEventListener('submit', recebeEventoForm);
}
meuEscopo ();