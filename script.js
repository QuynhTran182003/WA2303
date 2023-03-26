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

            $(".card").mouseenter(function(){
                $(this).css("cursor", "pointer");
            });

            $(".card").click(function()
                {
                    let title = ($($(this).prop("children")[1]).prop("children")[0]).innerHTML;
                    let imgLink = $($(this).prop("children")).prop("currentSrc");
                    
                    let id = $(this).attr("id");
                    let drinkInstance = drinks[$(this).attr("id")];
                    html = `
                    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">${drinkInstance.strDrink}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body d-flex">
                                <img src=${drinkInstance.img} class="" alt="..." style="height:16rem">
                                <div class="description px-3">
                                    <div class="category">
                                        <h6>Category</h6>
                                        <p class="category-txt">${drinkInstance.strCategory}</p>
                                    </div>
                                    <div class="ingredient">
                                        <h6>Ingredients</h6>
                                        <ul>
                                            <li>
                                                <p class="ingredient-txt">${drinkInstance.strIngredient1}</p>
                                            </li>
                                            <li>
                                                <p class="ingredient-txt">${drinkInstance.strIngredient2}</p>
                                            </li>
                                            <li>
                                                <p class="ingredient-txt">${drinkInstance.strIngredient3}</p>
                                            </li>
                                            <li>
                                                <p class="ingredient-txt">${drinkInstance.strIngredient4}</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="instruction">
                                        <h6>Instruction</h6>
                                        <p class="instruction-txt">${drinkInstance.strInstructions}</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                    </div>`;
                    
                    $(".myModalDiv").html(html);
                    $("#myModal").modal('show');

                    console.log(drinkInstance);
            });

            $(".carouselView").click(CarouselView(drinks));
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
    for(let i = 0; i < drinkList.length; i++){
        var divCard = $(".DrinkList").append(`
        <div class="card m-5 p-3 shadow" style="width: 26rem"; id=${i}>
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
        </div>`);
    }
}

function CarouselView(drinkList){
    let html =``;
    for(let i = 0; i < drinkList.length; i++){
        if(i==0){
            html+=`
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
            `;
            html+=`
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="15" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="16" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="17" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="18" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="20" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="21" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="22" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="23" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="24" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="25" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src=${drinkList[i].img} class="d-block w-100" alt="...">
                </div>`;
        }else{
            html +=`
                    <div class="carousel-item">
                    <img src=${drinkList[i].img} class="d-block w-100" alt="...">
                    </div>
            `;
        }
        
    }
    html+=`
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
        </div>`;

  $(".DrinkList").html(html);
}



