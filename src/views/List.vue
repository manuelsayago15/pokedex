<template>
  <div>
      <div class="container">
          <div class="row">
                <div class="col-lg-12 main">
                    
                    <div class="form-group has-search div-size mx-auto">
                        <span class="form-control-feedback"><font-awesome-icon icon="search" /></span>
                        <input type="text" v-model="pokemonName" @keyup="catchPokemon" class="form-control" placeholder="Search">
                    </div>
                    <div class="div-size mx-auto" v-if="notFound === false">
                        <ul class="list-group" v-for="(pokemon, index) in pokemonsArray" :key="index">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <span class="favorite-cursor" data-toggle="modal" data-target="#pokeModal">
                                    <span @click="getPokemonDetails(pokemon.name)">{{pokemon.name}}</span>
                                </span>
                                
                                <span class="favorite-cursor"  @click="addFavorite(pokemon, index)">
                                    <font-awesome-icon :class="pokemon.favorite" icon="star" />
                                </span>
                            </li>
                            <!-- Modal -->
                            <div class="modal fade" id="pokeModal" tabindex="-1" role="dialog" aria-labelledby="pokeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header bg-img">
                                            <img class="image" :src=pokemonImage alt="">                                        
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    <div class="modal-body">
                                        <ul class="list-group list-group-flush container text-left">
                                            <li class="list-group-item">Name: {{pokemonDetails.name}}</li>
                                            <li class="list-group-item">Weight: {{pokemonDetails.weight}}</li>
                                            <li class="list-group-item">Height: {{pokemonDetails.height}}</li>
                                            <li class="list-group-item">
                                                 Types: 
                                                 <span v-for="(type, index) in pokemonTypes" :key="index">
                                                    {{type}}
                                                </span>
                                                    
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default mr-auto">Share to my friends</button>
                                        <span class="favorite-cursor"  @click="addFavorite(pokemon, index)">
                                            <font-awesome-icon :class="pokemon.favorite" icon="star" />
                                        </span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                    
                    <footer v-if="notFound === false">
                        <Footer/>
                    </footer>
                    

                    <div v-if="notFound === true">
                        <h1>Uh-oh!</h1>
                        <p>You look lost on your journey!</p>
                        <button type="button" class="btn btn-default" @click="goHome">
                            Go back home
                        </button>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Footer from '@/components/Footer'
export default {
    components: {
        Footer
    },

    data () {
        return {
            pokemonName: '',
            added: []
        }
    },

    methods: {
        ...mapMutations(['setPokemonName']),
        ...mapActions(['getPokemons', 'getPokemonName', 'getPokemonDetails']),

        catchPokemon() {
            this.getPokemonName(this.pokemonName);
        },

        goHome() {
            this.$router.push('/');
        },

        addFavorite(pokemon, index) {
            console.log(pokemon);
            console.log(index);
            this.favoritePokemons.push(pokemon);
            console.log(this.favoritePokemons);
            console.log(pokemon.favorite);
            let test = pokemon.favorite;
            console.log(this.pokemonsArray);
            for (let i = 0; i<this.pokemonsArray.length; i++) {
                if (i === index) {
                    this.pokemonsArray[i].favorite = 'colored'
                    console.log(this.pokemonsArray[i]);
                }
            }
            
        }
    },

    computed: {
        ...mapState(['pokemonsArray', 'notFound', 'favoritePokemons', 'pokemonDetails', 'pokemonTypes', 'pokemonImage']),
    },

    created() {
        this.getPokemons();
        console.log(this.$route.path);
    }
}
</script>

<style scoped>
    .main {
        margin: 35px 30px 40px 30px;
    }

    .has-search .form-control {
        padding-left: 2.375rem;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04) !important;
        border: none;
        border-radius: 5px;
        height: 50px;
    }

    .has-search .form-control-feedback {
        position: absolute;
        z-index: 2;
        display: block;
        margin: 14px 10px 14px 14px;
        text-align: center;
        pointer-events: none;
        color: #BFBFBF;
    }

    .svg-inline--fa.fa-w-18 {  
        color: #BFBFBF;
        border: 1px;
        width: 25px;
        height: 25px;
        padding: 2px 2px 2px 2px;
        border-radius: 50%;
        background: #F5F5F5;
    }

    .colored {
        color: #ECA539!important;
    }

    .bg-img {
        background-image: url('../assets/img/background.png');
        background-repeat: no-repeat;
        height: 200px;
    }

    .image {
        margin: 30px 0 0 150px;
        width: 150px;
    }

</style>