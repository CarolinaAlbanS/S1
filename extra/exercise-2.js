const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},
                      {name: "Salmon", isVegan: false}, 
                      {name: "Tofu", isVegan: true}, 
                      {name: "Burger", isVegan: false}, 
                      {name: "Rice", isVegan: true}, 
                      {name: "Pasta", isVegan: true}];

let contador=0
                    
for(let i = 0; i <foodSchedule.length; i++){
    if(foodSchedule[i].isVegan == false){
        foodSchedule[i].name = fruits[contador++] 
        foodSchedule[i].isVegan = true
        //contador++
    }
    
    console.log(foodSchedule[i]);
    
}

