const gifContainer = document.querySelector("#gifContainer");
const gigglesContainer = document.querySelector("#gigglesContainer");

//let category==user input

let gifyKeyR='fNQfgqsi1G5OnBPBlie4e1lN3wVCBTTk'
const category = "pun";
// const category = inputForm category
const jokeUrl=`https://v2.jokeapi.dev/joke/${category}?format=json?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`
const gifyKey='9tWD3JSotxpdhYNXTURQMtKldzGKZt2t'
const gifyUrl= `https://api.giphy.com/v1/gifs/search?api_key=${gifyKey}&q=${category}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`



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

gifSetup();

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

}

    function gifSetup(){

        const gifDivContainer = document.createElement("div");

        const gifSetup = document.createElement("img");

        const gifInfo = JSON.parse(localStorage.getItem("gif"));

        gifSetup.textContent = gifInfo.data[0].embed_url;

        gifDivContainer.appendChild(gifSetup);

        gifContainer.appendChild(gifDivContainer);

    }

    //joke/ setup &delivery
    // request input from user for a categorie(obrigatory)
    // if for single joke or twoparts joke
    // for the twopart joke we are going to use .setup: joke, .delivery: answer for twopart joke
    // if single it changes for .joke
    // .category: "Programming", "Misc", "Pun", "Spooky" and "Christmas"


    // Gify setup
    // it needs to match the joke categorie
    // get the .data.0.embed_url
    // we need to set an continer to the image and append to the gifContainer
