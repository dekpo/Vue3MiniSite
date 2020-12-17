<template>
  <Header>
    <a class="w3-bar-item w3-button w3-hover-black w3-right" @click="displayC()" title="Shppping Cart">
      ({{nbProduct}}) <i class="fa fa-shopping-cart"></i> <span class="w3-hide-small">Shopping Cart</span>
    </a>
  </Header>


 <!-- ROUTER-VIEW PERMET DE CHARGER LE COMPOSANT CORRESPONDANT POUR CHAQUE ROUTE -->
   <router-view />
 <!-- ROUTER-VIEW PERMET DE CHARGER LE COMPOSANT CORRESPONDANT POUR CHAQUE ROUTE -->


  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      nbProduct:1,
      displayCart:false,
      displayC(){
        this.displayCart = !this.displayCart;
      }
    }
  }
};
</script>

<style>
@import url("https://www.w3schools.com/w3css/4/w3.css");
@import url("https://fonts.googleapis.com/css?family=Lato");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Lato", sans-serif;
}
</style>
