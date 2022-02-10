
let pokemonRepository =(function (){ 

  let  pokemonList=[
     { name: 'balbasaur',
       height: 7,
        weight: 8,
        type: ['grass','poison']
    },

      {
      	name: 'ivysaur',
      	height: 1,
      	weight: 13,
      	type: ['grass','poison']
      },
      
       {
       	name: 'venusaur',
       	height: 2,
       	weight: 100,
       	type: ['grass','poison']
       }
      
        ];
        function add(pokemon){
          pokemonList.push(pokemon);
        }
        function getAll(){
          return pokemonList;
        }


        function showDetails(pokemon){
          
          console.log(pokemon);

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

 
        return {
          add: add,
          getAll: getAll,
          addListItem: addListItem
        };

        })();

        //this is the value of pokemonRepository before one more pokemon was put.

        console.log(pokemonRepository);

        //insert one more pokemon
        
                pokemonRepository.add({name: 'Squirtle',height: 0.5, weight: 9,type: 'Water'});

        //get the the most updated value of pokemon by using forEach function giving the name of pokemon

                pokemonRepository.getAll().forEach(function(pokemon){
                pokemonRepository.addListItem(pokemon);

                  
                });

