let jokeUrl=`https://v2.jokeapi.dev/joke/${category}?format=json`
let gifyKeyR='fNQfgqsi1G5OnBPBlie4e1lN3wVCBTTk'
let gifyUrl= `https://api.giphy.com/v1/gifs/search?api_key=${gifyKeyR}&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`


fetch(jokeUrl).then(function(response){   //fetching data from the api 
    return response.json(); 
}).then(function(data){ 
    console.log("--------- joke request --------")
    console.log(data);})

    fetch(url).then(function(response){   //fetching data from the api 
        return response.json(); 
    }).then(function(data){ 
        console.log("--------- gif request --------")
        console.log(data);})

    //joke/ setup &delivery