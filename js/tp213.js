/*
13- Realiza un script que pida un texto y lo muestre en mayúsculas.
 */
let frase;
do {
  frase = prompt("Ingrese la frase para pasar a mayusculas:").toUpperCase();
  document.write(`${frase}<br/>`);
} while (
  confirm(
    "ACEPTAR: agregar mas frases y convertir a mayuscula. \n CANCELAR: Detener y mostrar por pantalla."
  )
);
