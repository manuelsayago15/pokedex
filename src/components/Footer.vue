<template>
  <div>
        <div class="footer">
            <button type="button" class="btn btn-default" :class="all" @click="list">
                <span class="style-list"><font-awesome-icon icon="list" /></span>
                All
            </button>
            <button type="button" class="btn btn-default" :class="favorite" @click="favorites">
                <span><font-awesome-icon icon="star" /></span>
                Favorites
            </button>
        </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    name: 'Footer',

    methods: {
        ...mapMutations(['setAllButton', 'setFavoriteButton']),

        list() {
            if(this.$route.path === '/list'){
                this.$router.go();
               
                console.log("all" + this.all);
            } else if (this.$route.path === '/favorites') {
                this.$router.push('/list');
            }
        },

        favorites() {
            if(this.$route.path === '/favorites'){
                this.$router.go();
            } else if (this.$route.path === '/list'){
                this.$router.push('/favorites');
            }
        }
    },

    computed: {
        ...mapState(['all', 'favorite']),
    },

    created() {
        if(this.$route.path === '/list'){
            this.setAllButton('active-button');
            this.setFavoriteButton('disabled-button');
            console.log(this.all);
        }

        if(this.$route.path === '/favorites'){
            this.setAllButton('all-button');
            this.setFavoriteButton('favorite-button');
        } 
    }
}
</script>

<style>
    .active-button {
        margin: 18px 0 18px 0;
        position: absolute;
        width: 275px;
        height: 44px;
        left: 30%;
        right: 50.87%;
        background: #F22539;
        border-radius: 60px;
        font-size: 18px;
        line-height: 22px;
        font-style: normal;
        font-weight: bold;
    }

    .disabled-button {
        margin: 18px 0 18px 0;
        position: absolute;
        width: 275px;
        height: 44px;
        left: 50%;
        right: 25.26%;
        background: #BFBFBF;
        border-radius: 60px;
        font-size: 18px;
        line-height: 22px;
        font-style: normal;
        font-weight: bold;
    }

    .all-button {
        margin: 18px 0 18px 0;
        position: absolute;
        width: 275px;
        height: 44px;
        left: 25%;
        right: 25.26%;
        background: #BFBFBF;
        border-radius: 60px;
        font-size: 18px;
        line-height: 22px;
        font-style: normal;
        font-weight: bold;
    }

    .favorite-button {
        margin: 18px 0 18px 0;
        position: absolute;
        width: 275px;
        height: 44px;
        left: 52%;
        right: 50.87%;
        background: #F22539;
        border-radius: 60px;
        font-size: 18px;
        line-height: 22px;
        font-style: normal;
        font-weight: bold;
    }

    .svg-inline--fa.fa-w-16 {
        width: 22px;
        height: 22px;
        margin: 0 7px 0 0;
    }

    .svg-inline--fa.fa-w-18 {
        width: 22px;
        height: 22px;
        margin: 0 7px 0 0;
    }

    footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 80px;
        background: #FFFFFF;
        box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
    }

    /* Extra small devices (portrait phones, less than 576px)
    No media query since this is the default in Bootstrap */

    @media (min-width:320px)  { 
        /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
        .active-button {
            left: 8%;
            right: 52%;
            width: 130px;
        }

        .disabled-button {
            left: 52%;
            right: 8%;
            width: 130px;
        }

        .svg-inline--fa.fa-w-16 {
            width: 16px;
            height: 22px;
            margin: 0 3px 0 0;
        }

        .svg-inline--fa.fa-w-18 {
            width: 16px;
            height: 22px;
            margin: 0 3px 0 0;
        }
    }

    @media (min-width:480px)  { 
        /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ 
        .active-button {
            left: 8%;
            right: 52%;
            width: 200px;
        }

        .disabled-button {
            left: 52%;
            right: 8%;
            width: 200px;
        }

        .svg-inline--fa.fa-w-16 {
            width: 16px;
            height: 22px;
            margin: 0 3px 0 0;
        }

        .svg-inline--fa.fa-w-18 {
            width: 16px;
            height: 22px;
            margin: 0 3px 0 0;
        }

        .all-button {
            left: 13%;
            width: 180px;
        }

        .favorite-button {
            left: 48%;
            width: 180px;
        }
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) { 
        .active-button {
            left: 8%;
            right: 50.87%;
            width: 230px;
        }

        .disabled-button {
            left: 50.87%;
            right: 25.26%;
            width: 230px;
        }

        .svg-inline--fa.fa-w-16 {
            width: 18px;
            height: 22px;
            margin: 0 3px 0 0;
        }

        .svg-inline--fa.fa-w-18 {
            width: 18px;
            height: 22px;
            margin: 0 3px 0 0;
        }

        .all-button {
            left: 13%;
            width: 180px;
        }

        .favorite-button {
            left: 48%;
            width: 180px;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) { 
        .active-button {
            left: 15%;
            right: 50%;
            width: 275px;
        }

        .disabled-button {
            left: 53%;
            right: 25.26%;
            width: 275px;
        }

        .svg-inline--fa.fa-w-16 {
            width: 16px;
            height: 22px;
            margin: 0 3px 0 0;
        }

        .svg-inline--fa.fa-w-18 {
            width: 16px;
            height: 22px;
            margin: 0 3px 0 0;
        }

        .all-button {
            left: 13%;
            width: 240px;
        }

        .favorite-button {
            left: 48%;
            width: 240px;
        }
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) { 
        .active-button {
            left: 13%;
            right: 50.87%;
            width: 275px;
            margin: 18px 0 18px 100px;
        }

        .disabled-button {
            left: 42.5%;
            right: 25.26%;
            width: 275px;
            margin: 18px 0 18px 100px;
        }

        .all-button {
            left: 18%;
        }

        .favorite-button {
            left: 50%;
        }
    }

    /* Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) { 
        .active-button {
            left: 13%;
            right: 50.87%;
            width: 275px;
            margin: 18px 0 18px 100px;
        }

        .disabled-button {
            left: 42.5%;
            right: 25.26%;
            width: 275px;
            margin: 18px 0 18px 100px;
        }

        .all-button {
            left: 25%;
        }

        .favorite-button {
            left: 52%;
        }
    }

    @media (min-width: 1500px) { 
        .active-button {
            left: 23%;
            right: 50.87%;
            width: 275px;
            margin: 18px 0 18px 100px;
        }

        .disabled-button {
            left: 42.5%;
            right: 25.26%;
            width: 275px;
            margin: 18px 0 18px 100px;
        }

        .all-button {
            left: 23%;
        }

        .favorite-button {
            left: 45%;
        }

        .svg-inline--fa.fa-w-16 {
            width: 22px;
            height: 22px;
            margin: 0 3px 0 0;
        }

        .svg-inline--fa.fa-w-18 {
            width: 22px;
            height: 22px;
            margin: 0 3px 0 0;
        }
    }
</style>