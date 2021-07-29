// Codigo del Cuadrado
/*console.group("Cuadrado");
const  ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cms");


const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cms");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cms2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");
const  ladoTriangulo1 = 6;
const  ladoTriangulo2 = 6;
const  baseTriangulo = 4;


console.log(
  "Los lados del triangulo miden: " 
   + ladoTriangulo1 
   + "cms, " 
   + ladoTriangulo2 
   + "cms, " 
   + baseTriangulo 
   + "cms" 
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + "cms" );

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cms");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es de: " + areaTriangulo + "cms2")

console.groupEnd();

// Codigo del circulo
console.group("Circulo");
// Radio
const radioCirculo = 4;
console.log("El radio del circulo es de: " + radioCirculo + "cm")
// Diametro
const diametroCirculo = radioCirculo * 2
console.log("El diametro del circulo es de: " + diametroCirculo + "cm")

// PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI)
// Perimetro o Circunsferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm")
// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es de: " + areaCirculo + "cm2")
console.groupEnd();*/

const PI = Math.PI;

function perimetroCuadrado(lado){
  return lado * 4;
};

function areaCuadrado(lado){
  return lado * lado;
};

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
};

function areaTriangulo(base, altura){
  return (base * altura) / 2;
};

function diametroCirculo(radio){
  return radio * 2;
};

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
    return diametro * PI;
};

function areaCirculo(radio){
  return (radio * radio) * PI;
};

function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

//Triangulo
function calcularPerimetroTriangulo(){
  const lado1 = document.getElementById("InputTrianguloLado1");
  const value1 = Number(lado1.value);
  const lado2 = document.getElementById("InputTrianguloLado2");
  const value2 = Number(lado2.value);
  const base = document.getElementById("InputTrianguloBase")
  const value3 = Number(base.value);
  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo(){
  const base = document.getElementById("InputTrianguloBase");
  const value1 = Number(base.value);
  const altura = document.getElementById("InputTrianguloAltura");
  const value2 = Number(altura.value);
  const area = areaTriangulo(value1, value2);
  alert(area);
}

// Circulo
function calcularDiametroCirculo(){
  const radio = document.getElementById("InputCirculoRadio");
  const value1 = Number(radio.value);
  const diametro = diametroCirculo(value1);
  alert(diametro);
}

function calcularPerimetroCirculo(){
  const radio = document.getElementById("InputCirculoRadio");
  const value1 = Number(radio.value)
  const perimetro = perimetroCirculo(value1)
  alert(perimetro);
}

function calcularAreCirculo(){
  const radio = document.getElementById("InputCirculoRadio");
  const value1 = Number(radio.value);
  const area = areaCirculo(radio);
  alert(diametro);
}
