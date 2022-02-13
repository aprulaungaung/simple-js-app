
let pokemonRepository =(function (){ 

  let  pokemonList=[];
        function add(pokemon){
          pokemonList.push(pokemon);
        }
        function getAll(){
          return pokemonList;
        }

//showDetail() function is for showing the details of pokemon on the event of click 

        function showDetails(pokemon){
          
          loadDetails(pokemon);
  

        }

//create a function to get new HTML element and assign them as unordered-list and create a button for each of them.

        function addListItem(pokemon){
          let pokemonList = document.querySelector('.pokemon-list');
                  let listPokemon = document.createElement('li');
                  let button = document.createElement('button');
                  button.innerText=pokemon.name;
                  pokemonList.appendChild(listPokemon);
                  listPokemon.appendChild(button);
                  button.classList.add('button-design');
                  button.addEventListener('click',showDetails);

                 }
  //loadList function() is for loading pokemon from external API

      function loadList(){
        let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
        return fetch(apiUrl).then(function(response){
          return response.json();
        }).then(function(json){
          json.results.forEach(function(item){
            let pokemon = {
                   name: item.name,
                   detailsUrl: item.url
            };
  //add() function gonna push the pokemon loaded from API into empty array of pokemon list above.

            add(pokemon);
          });
        }).catch(function(e){
          console.error(e);
        });

      }

//loadDetails() function is for loading particular properties of pomemon from individual url

    function loadDetails(item){

      let url = item.detailsUrl;
      return fetch(url).then(function(response){
        return response.json();
      }).then(function(details){
        //we will put the following key value pair into each pokemon object.
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types
      }).catch(function(error){
        console.log(error);
      });
    }

 
        return {
          add: add,
          getAll: getAll,
          loadList:loadList,
          loadDetails:loadDetails,
          addListItem:addListItem
        };

        })();

  //we will call loadList() function on pokemonRepository and forEach function will work on every pokemon accordingly
//loadList()function will load pokemon list from external API and put them into pokemonlist array.

        pokemonRepository.loadList().then(function(){
          pokemonRepository.getAll().forEach(function(pokemon){
            pokemonRepository.addListItem(pokemon);

          });
        });


       

