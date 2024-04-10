const gifContainer = document.querySelector("#gifContainer");

const gigglesContainer = document.querySelector("#gigglesContainer");

const dropdownButton= document.querySelector('#submitButton');

const initModal = document.querySelector("#intModal");

const dropdownList=document.querySelector('.dropdown');

const modal = document.querySelector(".modal");

const gifyKeyR = ['fNQfgqsi1G5OnBPBlie4e1lN3wVCBTTk', '9tWD3JSotxpdhYNXTURQMtKldzGKZt2t', "jndGrbHB8UNfs39YHeJrJxvGYGulBx2p", "dV41RjkIQ6RJa2Max5a1rGtLNk4c43Hw"];

dropdownButton.addEventListener('click', function(event){ //fx for submit button in modal

  event.preventDefault();

  event.stopPropagation();

  let category=dropdownList.value

  fetchData(category) //calls fetchdata fx and passes on the category input

  // it close the modal when the user finish choosing the category
  modal.classList.remove('is-active');

})

document.querySelector('.button')

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {

      $el.classList.add('is-active');

    }
  
    function closeModal($el) {

      $el.classList.remove('is-active');

    }
  
    function closeAllModals() {

      (document.querySelectorAll('.modal') || []).forEach(($modal) => {

        closeModal($modal);

      });

    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {

      const modal = $trigger.dataset.target;

      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {

        openModal($target);

      });

    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {

      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {

        closeModal($target);

      });

    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {

      if(event.key === "Escape") {

        closeAllModals();

      }

    });

  });

async function fetchData(category) { ///fetches api data and stores it in local
    try {
        // below just a random index to get different key for the gify(it have a low rate limit so we got 4 differents keys to keep using)
        let keyIndex = Math.floor(Math.random() * 4);
        // below its the random key variable
        const gifyKey = gifyKeyR[keyIndex];
        
        let jokeUrl=`https://v2.jokeapi.dev/joke/${category}?format=json?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`
        
        let gifyUrl= `https://api.giphy.com/v1/gifs/search?api_key=${gifyKey}&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`


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
        
    }  jokeSetup();

}

// below we have the joke function that will create the container and append to our gif and giggles containers
    function jokeSetup(){

        const jokeContainer = document.createElement("div");

        jokeContainer.className = "divGiggles";

        const jokeSetup = document.createElement("p");

        const jokeDelivery = document.createElement("p");
    
        const jokeInfo = JSON.parse(localStorage.getItem("joke"));

        if(jokeInfo.type === "twopart"){

        jokeSetup.textContent = jokeInfo.setup;

        jokeDelivery.textContent = jokeInfo.delivery;

        jokeContainer.appendChild(jokeSetup);

        setTimeout(()=> {
          jokeContainer.appendChild(jokeDelivery);//delays the delivery of the 2 part joke for 3 seconds
        }
        ,3000);
        
       
        // jokeContainer.appendChild(jokeDelivery);

    }else {

        jokeSetup.textContent = jokeInfo.joke;

        jokeContainer.appendChild(jokeSetup);

    }

    gigglesContainer.appendChild(jokeContainer);

    gifSetup();
}


    function gifSetup(){ //fx to get a random gif from the associated category

        let count = Math.floor(Math.random() * 25);

        const gifSetup = document.createElement("img");

        gifSetup.className = "imgGif";

        const gifInfo = JSON.parse(localStorage.getItem("gif"));

        gifSetup.src = gifInfo.data[count].images.original.url;

        gifContainer.appendChild(gifSetup);

    }

    // and function that will initialize the modal when the user click the button
    initModal.addEventListener("click", function(event){

      event.preventDefault();
      // below set the modal active to open
      modal.classList.add('is-active');

      // two loops to clean the html from the previous choice, that way the user always see a new joke and gif
      if(gifContainer.hasChildNodes()){
        
        const gifContainerImg = document.querySelector(".imgGif");

        if(gifContainerImg){

        gifContainer.removeChild(gifContainerImg);

      }

      }

      if(gigglesContainer.hasChildNodes()){

        const gigglesContainerP = document.querySelector(".divGiggles");

        if(gigglesContainerP){

        gigglesContainer.removeChild(gigglesContainerP);

      }

      }
        
    })

