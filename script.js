$(document).ready(function(){
    $.ajax({
        // type: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
        success: function(data){
            console.log(data.drinks);
            for(let i = 0; i< data.drinks.length; i++){
                let drink = new Drink(data.drinks[i].idDrink, data.drinks[i].strDrink, data.drinks[i].strCategory, data.drinks[i].strDrinkThumb, data.drinks[i].strIngredient1,data.drinks[i].strIngredient2,data.drinks[i].strIngredient3, data.drinks[i].strIngredient4, data.drinks[i].strIngredient5, data.drinks[i].strInstructions);
                drinks.push(drink);
            }
            RenderDrinks(drinks);
        }
    })
})

//define class
class Drink {
    constructor(id,strDrink, strCategory, img, strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strInstructions ){
        this.id = id;
        this.strDrink = strDrink;
        this.strCategory = strCategory;
        this.img = img;
        this.strIngredient1 = strIngredient1;
        this.strIngredient2 = strIngredient2;
        this.strIngredient3 = strIngredient3;
        this.strIngredient4 = strIngredient4;
        this.strIngredient5 = strIngredient5;
        this.strInstructions = strInstructions;
    }

    toString(){
        return `Id: ${this.id}, Drink: ${this.strDrink}, Category: ${this.strCategory}`;
    }
}
//define var
let drinks =[];

function RenderDrinks(drinkList){

    let html = ``;
    for(let i = 0; i < drinkList.length; i++){
        html += `
        <div class="card m-5 shadow" style="width: 18rem;">
            <img src= ${drinkList[i].img} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${drinkList[i].strDrink}</h5>
            <p class="card-text">${drinkList[i].strCategory}</p>
            <p class="card-text">${drinkList[i].strIngredient1}</p>
            <p class="card-text">${drinkList[i].strIngredient2}</p>
            <p class="card-text">${drinkList[i].strIngredient3}</p>
            <p class="card-text">${drinkList[i].strIngredient4}</p>
            <p class="card-text">${drinkList[i].strIngredient5}</p>
            <p class="card-text">${drinkList[i].strInstructions}</p>
            </div>
        </div>`;
    }
    $(".DrinkList").html(html);
}

