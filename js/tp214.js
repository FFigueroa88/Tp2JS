/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo 
el signo – entre cada carácter sin usar el método replace. Por ejemplo, 
si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
 */

let frase;

do {
  let n = 0;
  frase = prompt("Ingrese la frase para pasar a mayusculas:");
  while (n < frase.length) {
    document.write(`${frase.charAt(n)}-`);
    n++;
  }
  document.write(`<br/>`);
} while (
  confirm(
    "ACEPTAR: agregar mas frases para monstrar entre guiones. \n CANCELAR: Detener y mostrar por pantalla."
  )
);
