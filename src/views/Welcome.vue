<template>
  <div>
    <div class="container">
      <div class="row">
          <div class="col-lg-12 margin" v-if="home">
            <div class="text-center mb-5">
              <img class="size" src="../assets/img/pikachu.png"> 
            </div>
            
            <h1 class="mb-4">Welcome to Pokédex</h1>

            <p class="description-text">The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>

            <button type="button" class="btn btn-default margin-button" @click="show">
              Get started
            </button>
          </div>
          <div class="col-lg-12 pokeball-margin" v-if="home === false">
            <img class="pokeball-size" src="../assets/img/pokeball.png" alt="pokeball">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },

  data () {
    return {
      home: true,
    }
  },

  methods: {
    show () {
      this.home = false;
      setTimeout( () => { 
        if(this.home === false){
          this.$router.push({ path: "/list" });
      }}, 1000);
    }
  }

}
</script>

<style scoped>
  .margin {
    margin-top: 70px;
  }

  .size {
    width: 325px;
    height: 288px;
  }

  h1 {
    font-style: normal !important;
    font-weight: bold !important;
    font-size: 26px !important;
    color: #353535 !important;
    margin: 0 60px 0 60px;
  }

  .description-text {
    margin: 0 291px 50px 291px;
  }

  .margin-button {
    margin: 0 500px 0 490px;
  }

  .pokeball-margin {
    margin: 270px 0 270px 0;
  }

  .pokeball-size {
    width: 106px;
    height: 106px;
    animation: pokeball 2s ease 0s 2 normal forwards;
  }

  @keyframes pokeball {
    0%,
    100% {
      transform: rotate(0deg);
      transform-origin: 50% 50%;
    }

    10% {
      transform: rotate(8deg);
    }

    20%,
    40%,
    60% {
      transform: rotate(-10deg);
    }

    30%,
    50%,
    70% {
      transform: rotate(10deg);
    }

    80% {
      transform: rotate(-8deg);
    }

    90% {
      transform: rotate(8deg);
    }
  }

  /* Extra small devices (portrait phones, less than 576px) */
  @media (max-width: 575.98px) { 
    .margin {
      margin-top: 5em;
    }

    .size {
      width: 305px;
      height: 208px;
    }

    .description-text {
      margin: 0 30px 50px 30px;
    }

    h1 {
      font-size: 22px !important;
    }

    .margin-button {
      margin: 0 0 0 0;
    }
  }

  /* Small devices (landscape phones, less than 768px) */
  @media (max-width: 767.98px) { 

  }

  /* Medium devices (tablets, less than 992px) */
  @media (max-width: 991.98px) { 
    .margin {
      margin-top: 5em;
    }

    .size {
      width: 305px;
      height: 208px;
    }

    .description-text {
      margin: 0 30px 50px 30px;
    }

    h1 {
      font-size: 22px !important;
    }

    .margin-button {
      margin: 0 0 0 0;
    }
  }

  /* Large devices (desktops, less than 1200px) */
  @media (max-width: 1199.98px) { 
    .margin {
      margin-top: 5em;
    }

    .size {
      width: 305px;
      height: 208px;
    }

    .description-text {
      margin: 0 60px 50px 60px;
    }

    h1 {
      font-size: 22px !important;
    }

    .margin-button {
      margin: 0 0 0 0;
    }
  }

</style>
