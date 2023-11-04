/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números 
introducidos.
*/
let numero;
let total = 0;

do {
  numero = parseFloat(prompt("Ingrese un numero:"));
  while (isNaN(numero)) {
    numero = parseFloat(prompt("No puso un valor numérico.Ingrese un número:"));
  }
  total = total + numero;
} while (
  confirm(
    "Presione un boton:\n Aceptar: Para seguir agregando numeros para sumar\n  Cancelar: Para mostrar por pantalla"
  )
);

document.write(`LA SUMA DE LOS NUMEROS INGRESADOS ES: ${total}`);