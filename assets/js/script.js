const gifContainer = document.querySelector("#gifContainer");
const gigglesContainer = document.querySelector("#gigglesContainer");
=======
//let category==user input

let category= 'christmas'
let jokeUrl=`https://v2.jokeapi.dev/joke/${category}?format=json?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`
let gifyKeyR='fNQfgqsi1G5OnBPBlie4e1lN3wVCBTTk'
let gifyUrl= `https://api.giphy.com/v1/gifs/search?api_key=${gifyKeyR}&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

const category = "pun";
// const category = inputForm category
const jokeUrl=`https://v2.jokeapi.dev/joke/${category}?format=json`
const gifyKey='9tWD3JSotxpdhYNXTURQMtKldzGKZt2t'
const gifyUrl= `https://api.giphy.com/v1/gifs/search?api_key=${gifyKey}&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

fetchData();
async function fetchData() {
    try {
        console.log("2")

        const jokeResponse = await fetch(jokeUrl); // Fetching data from the joke API

        const jokeData = await jokeResponse.json();

        localStorage.setItem("joke", JSON.stringify(jokeData));

        console.log("--------- joke request --------");

        console.log(jokeData);

        const gifResponse = await fetch(gifyUrl); // Fetching data from the GIF API

        const gifData = await gifResponse.json();

        localStorage.setItem("gif", JSON.stringify(gifData));

        console.log("--------- gif request --------");

        console.log(gifData);

    } catch (error) {

        console.error("Error fetching data:", error);
        
    }


jokeSetup();
}
    function jokeSetup(){

        const jokeContainer = document.createElement("div");

        const jokeSetup = document.createElement("p");

        const jokeDelivery = document.createElement("p");
    
        const jokeInfo = JSON.parse(localStorage.getItem("joke"));

        if(jokeInfo.type === "twopart"){

        jokeSetup.textContent = jokeInfo.setup;

        jokeDelivery.textContent = jokeInfo.delivery;

        jokeContainer.appendChild(jokeSetup);

        jokeContainer.appendChild(jokeDelivery);

    }else {

        jokeSetup.textContent = jokeInfo.joke;

        jokeContainer.appendChild(jokeSetup);

    }

    gigglesContainer.appendChild(jokeContainer);

    jokeContainer.innerHTML = "";

}

    //joke/ setup &delivery
    // request input from user for a categorie(obrigatory)
    // if for single joke or twoparts joke
    // for the twopart joke we are going to use .setup: joke, .delivery: answer for twopart joke
    // if single it changes for .joke
    // .category: "Programming", "Misc", "Pun", "Spooky" and "Christmas"
=======

//target.addEventListener('click', function(event){

// })





function joke(){
fetch(jokeUrl).then(function(response){   //fetching data from the api 
    return response.json(); 
}).then(function(data){ 
    console.log("--------- joke request --------")
    console.log(data);})
}


function gif(){
    fetch(gifyUrl).then(function(response){   //fetching data from the api 
        return response.json(); 
    }).then(function(data2){ 
        console.log("--------- gif request --------")
        console.log(data2);})
    }
    //joke/ setup &delivery
    //if for single (joke )and two part (setup/delivery)

    // Any, Misc, Programming, Pun, Spooky, Christmas