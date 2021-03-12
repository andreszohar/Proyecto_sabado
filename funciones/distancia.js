//entradas
let coordenadaFinalX=70;
let coordenadaFinalY=-50;
let coordenadaInicialX=0;
let coordenadaInicialY=0;

//Reto con menos lineas de codigo


let resultado = (coordenadaFinalX,coordenadaInicialX,coordenadaFinalY,coordenadaInicialY) => Math.sqrt(Math.pow((coordenadaFinalX-coordenadaInicialX),2)+Math.pow((coordenadaFinalY-coordenadaInicialY),2));

console.log(resultado(70,0,-50,0))


 

//FUNCION

/*
function CalcularDistancia(xinicial,xfinal,yinicial,yfinal){



   
//1.Restando cantidades
let coordenadasX=xfinal-xinicial;
let coordenadasY=yfinal-yinicial;

//Elevar al cuadrado cada resta
let cuadradoX=Math.pow(coordenadasX,2);
let cuadradoY=Math.pow(coordenadasY,2);

//3.Sumando los cuadrados obtenidos
let sumaTotal=cuadradoX+cuadradoY;

//4.Obtener raiz cuadrada de la sumatoria
let distancia=Math.sqrt(sumaTotal);

return(distancia);


}

console.log(CalcularDistancia(0,70,0,-50));

*/













