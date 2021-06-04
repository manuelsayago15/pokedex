<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    background-color: #F9F9F9 !important;
    font-family: Lato !important;
  }

  .btn-default {
    background-color: #F22539;
    color: #FFFFFF;
    letter-spacing: 1px;
    line-height: 15px;
    border: 2px solid rgba(217, 83, 78, 0.75);
    border-radius: 60px !important;
    transition: all 0.3s ease 0s;
  }

  .btn-default:active {
    color: #FFF;
    background: #C00E20;
  }

  .btn-default.disabled {
    background-color: #BFBFBF !important;
  }

  .div-size {
    width: 700px;
  }

  .favorite-cursor {
    cursor: pointer;
  }

</style>
