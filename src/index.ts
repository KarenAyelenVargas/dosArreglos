let arregloNombres: string[] = new Array(2);
let arregloNumeros: number[] = new Array(3);
let indice: number;

for (indice = 0; indice < 2; indice++) {
  arregloNombres[indice] = prompt(
    "ingrese el nombre de la persona asignado a la posicion " + indice
  );
}
for (indice = 0; indice < 3; indice++) {
  arregloNumeros[indice] = Number(
    prompt("ingrese el valor numerico asignado a la posicion " + indice)
  );
}
for (indice = 0; indice < 2; indice++) {
  console.log(
    "el nombre ingresado en la posicion " + indice,
    "es: " + arregloNombres[indice]
  );
}
for (indice = 0; indice < 3; indice++) {
  console.log(
    "el numero ingresado en la posicion " + indice,
    "es: " + arregloNumeros[indice]
  );
}
