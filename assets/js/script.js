//let category==user input

let category= 'christmas'
let jokeUrl=`https://v2.jokeapi.dev/joke/${category}?format=json?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`
let gifyKeyR='fNQfgqsi1G5OnBPBlie4e1lN3wVCBTTk'
let gifyUrl= `https://api.giphy.com/v1/gifs/search?api_key=${gifyKeyR}&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`



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