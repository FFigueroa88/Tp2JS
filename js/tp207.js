/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al 
número que indique el usuario (no mayor de 50)  de la siguiente forma : 
(suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

let lineas;
do {
  lineas = parseInt(
    prompt("Cantidad de líneas para el triángulo  \n ( recomendado de 1 a 50):")
  );
  if (lineas > 0) {
    for (let i = lineas; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        document.write(i);
      }
      document.write("<br/>");
    }
  } else {
    alert("Ingresó un valor que  no corresponde");
  }
} while (
  confirm(
    "Presione un boton:\n Aceptar: Para generar triangulo segun nro de lineas\n  Cancelar: Detener y mostrar en pantalla"
  )
);
