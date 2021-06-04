<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-lg-12 main">
                    <div class="form-group has-search div-size mx-auto">
                        <span class="form-control-feedback"><font-awesome-icon icon="search" /></span>
                        <input type="text" v-model="favoritePokemonName" @change="findPokemon" class="form-control" placeholder="Search">
                    </div>
                    <div class="div-size mx-auto">
                        <ul class="list-group" v-for="(favorite, index) in favoritePokemons" :key="index">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                {{favorite.name}}
                                <span class="favorite-cursor" @click="deleteFavorite(favorite, index)">
                                    <font-awesome-icon class="star-color" icon="star" />
                                </span>
                            </li>
                        </ul>
                    </div>
                  <footer>
                    <Footer/>
                  </footer>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import Footer from '@/components/Footer';
export default {
    components: {
        Footer
    },

    data() {
        return {
            favoritePokemonName: ''
        }
    },

    methods: {
        ...mapMutations(['setAllButton', 'setFavoriteButton', 'setFavoritePokemon']),

        deleteFavorite(favorite, index){
            this.favoritePokemons.splice(index, 1);
            console.log(this.favoritePokemons);
            for (let i = 0; i<this.pokemonsArray.length; i++) {
                if (favorite.name === this.pokemonsArray[i].name) {
                    this.pokemonsArray[i].favorite = ''
                    console.log(this.pokemonsArray[i]);
                }
            }
        },

        findPokemon() {
            const foundPokemon = this.pokemonsArray.find(element => element.name === this.favoritePokemonName);
            console.log(foundPokemon.name);
            this.setFavoritePokemon(foundPokemon.name);
        }
    },

    computed: {
        ...mapState(['all', 'favorite', 'favoritePokemons', 'pokemonsArray']),
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

    .star-color {
        color: #ECA539;
        border: 1px;
        width: 25px;
        height: 25px;
        padding: 2px 2px 2px 2px;
        border-radius: 50%;
        background: #F5F5F5;
    }
</style>