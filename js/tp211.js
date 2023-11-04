/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique 
el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

 */
const nombre1 = prompt("Nombre 1:");
const edad1 = parseInt(prompt("Edad 1:"));
const nombre2 = prompt("Nombre 2:");
const edad2 = parseInt(prompt("Edad 2:"));
const nombre3 = prompt("Nombre 3:");
const edad3 = parseInt(prompt("Edad 3:"));

let maximo = Math.max(edad1, edad2, edad3);

switch (maximo) {
  case edad1:
    document.write(`El mayor es:  ${nombre1}`);
    break;
  case edad2:
    document.write(`El mayor es:  ${nombre2}`);
    break;
  case edad3:
    document.write(`El mayor es:  ${nombre3}`);
    break;
  default:
    alert(`error al cargar los datos`);
}
