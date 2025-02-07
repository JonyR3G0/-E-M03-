// Si la nota es 90 o más, el estudiante aprueba con "Excelente".
// Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
// Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
// Si la nota es menor de 60, el estudiante no aprueba.

let calificacion = prompt("Introduce tu calificacion, usando un numero del 1-100");

if (calificacion >= 0 && calificacion <= 100) {
  if (calificacion >= 90) {
    alert("Excelente!");
  } else if (calificacion >= 75) {
    alert("Bien");
  } else if (calificacion >= 60) {
    alert("Suficiente");
  } else if (calificacion < 60) {
    alert("No aprueba");
  }
}
else{
    alert('Introduce un numero del 1 - 100')
}
