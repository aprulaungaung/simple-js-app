
let pokemonList=[
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
        

for(let i=0; i<pokemonList.length; i++){
  if(pokemonList[i].weight>80 && pokemonList[i].weight<=100){
  document.write(pokemonList[i].name +  pokemonList[i].weight + '\" Wow this guy is Big\"');
}else{document.write(pokemonList[i].name + pokemonList[i].weight);
}
}