// Este programa usa un ciclo while, para imprimir numeros del 1-10, y a la vez imprime solo numeros pares por separado

let variablenumero = 0;
let variablepar = 0;
let textopar = "";

while (variablenumero <= 100) {
  if (variablenumero == variablepar) {
    textopar = "(PAR)";
    variablepar = variablepar + 2;
  } else {
    textopar = "";
  }

  console.log("Iteracion n", variablenumero, textopar);
  variablenumero++;
}
