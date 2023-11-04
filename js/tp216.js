/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, 
si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
let frase;

do {
  frase = prompt("Escriba una frase. Se mostrará cuantas vocales usa");
  let n = 0;
  let fraseInvertida = "";

  while (n < frase.length) {
    fraseInvertida = fraseInvertida + frase.charAt(frase.length - n - 1);

    n++;
  }
  document.write(
    `Frase:"${frase}"<br/> Frase invertida:"${fraseInvertida}".<br/>`
  );
} while (
  confirm(
    "ACEPTAR: agregar mas frases para mostrarlas invertidas. \n CANCELAR: Detener y mostrar por pantalla."
  )
);
