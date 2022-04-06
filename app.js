/*Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 (puede ser tanto masa como los ingredientes que van sobre la base).

👉 Crear una función que acepte ese array como parámetro. 

Dentro de la función, debemos lograr lo siguiente: 
👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
Los ingredientes impares son: (ingredientes en array impares)." */ 

const pizzas = ["masa","salsaDeTomate","queso","oregano","aceituna","cebolla","jamon","peperoni","salchicha","huevoDuro","papasFritas","muzzarella","cheddar","rucula"];
ingredientesPares=[];
ingredientesImpares=[];


function cantidadDeLetras(){

    for(i=0;i<pizzas.length;i++){
        if (pizzas[i].length % 2 ==0){
            ingredientesPares.push(pizzas[i]);
        }else{
            ingredientesImpares.push(pizzas[i]);
        }
    }
}

cantidadDeLetras();
console.log("Los ingredientes pares son: "+ingredientesPares+" Y los ingredientes impares son: "+ingredientesImpares);
