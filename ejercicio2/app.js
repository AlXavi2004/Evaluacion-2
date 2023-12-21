'use strict'

// A a partir del array ages=[15, 50, 45] agregue su edad. 
// Usando un for con un if, muestre en pantalla  solo las edades mayores a 25

let ages = [15, 50, 45]
ages.splice(1,0,19);

for(let i=0; i < ages.length ; i++){
    if(ages[i]>25){
        alert (ages[i])
    }
}
