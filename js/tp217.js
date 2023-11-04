/*
17- Realiza un script que muestre la posición de la primera vocal de un texto 
introducido por teclado.

Ejemplo:

Input: Hola mundo

Output: la vocal ‘o’ está en la posición
*/
let frase;

do {
  frase = prompt(
    "Escriba una frase. Se mostrará cla posicion de la primera vocal"
  );
  let n = 0;

  while (n < frase.length) {
    if (
      frase.charAt(n) == "a" ||
      frase.charAt(n) == "e" ||
      frase.charAt(n) == "i" ||
      frase.charAt(n) == "o" ||
      frase.charAt(n) == "u" ||
      frase.charAt(n) == "A" ||
      frase.charAt(n) == "E" ||
      frase.charAt(n) == "I" ||
      frase.charAt(n) == "O" ||
      frase.charAt(n) == "U"
    ) {
      document.write(
        `la frase:" ${frase} " Tiene la primer vocal " ${frase.charAt(
          n
        )} " en la posición ${n}.<br/>`
      );
      n = frase.length;
    }

    n++;
  }
} while (
  confirm(
    "ACEPTAR: agregar mas frases para mostrar la primer posicion de sus vocales. \n CANCELAR: Detener y mostrar por pantalla."
  )
);
