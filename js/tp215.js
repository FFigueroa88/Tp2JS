/* 
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/
let frase;

do {
  frase = prompt("Escriba una frase. Se mostrará cuantas vocales usa");
  let n = 0;
  let cantVocales = 0;

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
      cantVocales++;
    }

    n++;
  }
  document.write(`la frase:" ${frase} " Tiene ${cantVocales} vocales.<br/>`);
} while (
  confirm(
    "ACEPTAR: agregar mas frases para contar sus vocales. \n CANCELAR: Detener y mostrar por pantalla."
  )
);
