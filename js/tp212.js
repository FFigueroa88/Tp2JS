/*
12- Realiza un script que genere un número aleatorio entre 1 y 99
 */
let num;
do {
  num = Math.round(Math.random() * 90 + 1);
  document.write(`NUMERO GENERADO: ${num}<br/>`);
} while (
  confirm(
    "ACEPTAR: generar mas numeros al azar entre 1 y 99. \n CANCELAR: Detener y mostrar por pantalla."
  )
);
