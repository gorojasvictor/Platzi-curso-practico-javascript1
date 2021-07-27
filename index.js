// Codigo del Cuadrado
console.group("Cuadrado");
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
console.groupEnd();