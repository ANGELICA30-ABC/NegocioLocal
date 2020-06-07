// JavaScript Document
  function Sumar() {
var nombre = document.getElementById('D1').value;
var edad = document.getElementById('D2').value;

if (edad >= 18){
  alert(nombre + " " + ", gracias por el interés te llamaremos :)");
} else {
  alert(nombre + " " + ", no eres mayor de edad no podemos darte trabajo, lo sentimos :(.");
}
}