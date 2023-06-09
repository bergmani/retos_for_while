//Crea una función general y una función flecha con un bucle while que calcule la suma de los primeros n números enteros positivos:
//Ejemplo: n=5 (1+2+3+4+5) suma =15 

//Función general
let sumaG = 0
function sumaGeneral(n){
    let i = 0;
    while(i < n){
        i++;
        sumaG += i;
    }
    console.log(sumaG);
}
sumaGeneral(5);


//Función flecha
let sumaF = 0
const sumaFlecha = n => {
    let i = 0;
    while(i < n){
        i++;
        sumaF += i;
    }
    console.log(sumaF);
}
sumaFlecha(5)