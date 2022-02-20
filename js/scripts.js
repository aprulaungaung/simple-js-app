
let pokemonRepository =(function (){ 

  let  pokemonList=[];
        function add(pokemon){
          if(
            typeof pokemon==='object'&& 'name' in pokemon){
          pokemonList.push(pokemon);}else{console.log('pokemon is not correct');
      }
        }
        function getAll(){
          return pokemonList;
        }

/*showDetail() function work as event handler function which listen to the button with pokemon's name is on and when button is
click by the user, showDetails function will work making loadDetails()function also work which is nested inside of it. Again, 
loadDetails()function is a promise and when the promise is solved, the result will be transfered to the parameter of .then()
function.And then, forEach()function which is chained to the argument of .then()function will work for each and every content of the array
and showModal()function will create a modal for each of them.
*/
        function showDetails(pokemon){
          
          loadDetails(pokemon).then(function(result){
          

            result.forEach(function(pokemon){

            let modalContainer = document.querySelector('#modal-container');

            function showModal(){
              let modal = document.createElement('div');
              modal.classList.add(modal);
              let titleElement = document.createElement('h4');
              titleElement.classList.add(h4);
              titleElement.innerText = 'pokemon.name';
              let closeButtonElement = document.createElement('button');
              closeButtonElement.classList.add('.modal-close');
              closeButtonElement.innerText = 'close';
              closeButtonElement.addEventListener('click',function(){hideModal();
              });
              let contentElement = document.createElement('p');
              let content = {
                imageUrl:'pokemon.imageUrl',
                height:'pokemon.height',
                types:'pokemon.types'
              };
              contentElement.innerText = 'content';
              contentElement.classList.add('modal p');
              modal.appendChild(titleElement);
              modal.appendChild(closeButtonElement);
              modal.appendChild(contentElement);
              modalContainer.appendChild(modal);
              modalContainer.classList.add('is-visible');
            }
          });
          });
          function hideModal(){
        
            modalContainer.classList.remove('is-visible');
          }
          window.addEventListener('keydown',(e)=>{
            if(e.key==='Escape' && modalContainer.classList.contains('is-visible')){
              hideModal();
            }
          });
          let modalContainer = document.querySelector('#modal-container');
          modalContainer.addEventListener('click',()=>{
            let target = e.target;
            if(target===modalContainer){
              hideModal();
            }
          });
          
                  
        }
          

        function addListItem(pokemon){
          let pokemonList = document.querySelector('.pokemon-list');
                  let listPokemon = document.createElement('li');
                  let button = document.createElement('button');
                  button.innerText=pokemon.name;
                  pokemonList.appendChild(listPokemon);
                  listPokemon.appendChild(button);
                  button.classList.add('button-design');
                  button.addEventListener('click',function(){showDetails(pokemon);});

                 }
  //loadList function() is for loading pokemon from external API
 let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
      
      function loadList(){
        return fetch(apiUrl).then(function(response){
          return response.json();
        }).then(function(json){
          json.results.forEach(function(item){
            let pokemon = {
                   name: item.name,
                   detailsUrl: item.url,
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
          item.types = details.types;
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


       

