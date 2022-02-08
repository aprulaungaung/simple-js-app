
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
        return {
          add: add,
          getAll: getAll
        };

        })();
        
        console.log(pokemonRepository);
                pokemonRepository.add({name: 'Squirtle',height: 0.5, weight: 9,type: 'Water'});
                pokemonRepository.getAll().forEach(function(element){
                  document.write('<p>'+element.name+'<p>');
                });

