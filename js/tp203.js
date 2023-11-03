/*
 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con 
 un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
 */
let frase ;
let fraseCompleta="";
do{
    frase= prompt("Ingrese una cadena de texto");
    fraseCompleta = fraseCompleta+"-"+ frase;

}while(confirm("Presione un boton:\n Aceptar: Para seguir agregando frases\n  Cancelar: Para mostrar por pantalla"))

document.write(fraseCompleta);