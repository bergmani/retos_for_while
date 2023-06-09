//Crear una funcion con un bucle while para imprimir los números del 1 a n entre corchetes
//Por ejemplo: n=6 se imprime [1][2][3][4][5][6]
i=0
const corchetes = n =>{
    while (i < n){
        i ++;
        console.log(`[${i}]`);
    }
}
corchetes(5);