/*
8- Crea script para generar pirámide siguiente con los números del 1 al
 número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/
let lineas;
do {
  lineas = parseInt(
    prompt("Cantidad de líneas para el triángulo  \n ( recomendado de 1 a 50):")
  );
  if (lineas > 0) {
    for (let i = 1; i <= lineas; i++) {
      for (let j = 1; j <= i; j++) {
        document.write(j);
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
