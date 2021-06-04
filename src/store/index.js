import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonsArray: [],
    favoritePokemons: [],
    pokemonDetails: [],
    pokemonTypes: [],
    pokemonImage: '',
    notFound: false,
    all: '',
    favorite: ''
  },
  mutations: {
    setAllButton(state, newValue) {
      state.all = newValue;
      console.log(state.all);
    },
    setFavoriteButton(state, newValue) {
      state.favorite = newValue;
      console.log(state.favorite);
    },
    setFavoritePokemon(state, newValue) {
      state.favoritePokemons = [];
      state.favoritePokemons.push({name: newValue, favorite: ''});
      console.log(state.favoritePokemons);
      console.log(newValue);
    }
  },
  actions: {
    getPokemons: async function({ state }) {
      try {
        
        state.notFound = false;
        const data = await fetch('https://pokeapi.co/api/v2/pokemon');
        let array = await data.json();
        console.log(array);
        console.log(array.results);
        console.log(array.length);
        console.log(array.results[0]);
        if(state.pokemonsArray.length === 0){
          for(let i = 0; i<array.results.length; i++) {
            state.pokemonsArray.push({
              name: array.results[i].name,
              favorite: ''
            })
          }
        }
        console.log(state.pokemonsArray);
        console.log(state.pokemonsArray.results[0].name);
      } catch(error) {
        // if(error){
        //   state.wordExist = false;
        // }
      }
    },

    getPokemonName: async function ({ state }, name) {
      try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let array = await data.json();
        console.log(array);
        console.log(array.name);
        // state.pokemonsArray = [];
        const find = state.pokemonsArray.find(element => element.name === array.name);
        console.log(find);
        if(find === undefined){
          state.pokemonsArray.push({
            name: array.name,
            favorite: ''
          })
        }
        console.log(state.pokemonsArray);
        state.notFound = false;
      } catch(error) {
        console.log(error);
        if(error) {
          state.notFound = true;
        }
      }
    },

    getPokemonDetails: async function ({ state }, name) {
      try {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        let array = await data.json();
        state.pokemonDetails = array;
        let type = array.types;
        let img = array.sprites.front_default;
        console.log(img);
        state.pokemonImage = img;
        console.log(state.pokemonDetails);
        state.pokemonTypes = [];
        for(let i = 0; i<type.length; i++){
          console.log(type[i].type.name);
          state.pokemonTypes.push(type[i].type.name);
        }
        console.log(state.pokemonTypes);       
      } catch(error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
