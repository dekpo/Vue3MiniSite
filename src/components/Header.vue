<template>
<!-- Navbar (sit on top) -->
<div class="w3-top w3-card">
  <div class="w3-bar w3-white">
    <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-left" @click="displayM()" title="Toggle Navigation Menu">
      <i class="fa fa-bars"></i>
    </a>
    <slot></slot>
    <router-link :to="{name: 'Home' }" class="w3-bar-item w3-button w3-hide-small">HOME</router-link>
    <router-link :to="{name: 'Shop' }" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> SHOP</router-link>
    <router-link :to="{name: 'Contact' }" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> CONTACT</router-link>
  </div>

  <!-- Navbar on small screens -->
  <div v-show="displayMenu==true" @mouseleave="displayMenu=false" class="w3-bar-block w3-white w3-hide-large w3-hide-medium">
    <router-link :to="{name: 'Home' }" class="w3-bar-item w3-button"><span @click="displayMenu=false">HOME</span></router-link>
    <router-link :to="{name: 'Shop' }" class="w3-bar-item w3-button"><span @click="displayMenu=false">SHOP</span></router-link>
    <router-link :to="{name: 'Contact' }" class="w3-bar-item w3-button"><span @click="displayMenu=false">CONTACT</span></router-link>
  </div>
</div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{
            displayMenu:false
        }
    },
    methods:{
        displayM(){
           this.displayMenu = !this.displayMenu;
        }
    }
}
</script>

<style scoped>
</style>