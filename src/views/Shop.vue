<template>
<!-- Container (About Section) -->
<div class="w3-content w3-container w3-padding-64" id="about">
  <h3 class="w3-center">WELCOME TO THE SHOP</h3>
  <p class="w3-center"><em>I love coding...</em></p>
  <p>We have created a fictional "shop" website/blog with Vue.js CLI v3... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
    qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <h3 class="w3-center w3-border-top">SPECIAL OFFERS !</h3>
  <div class="w3-row">
    <div class="w3-col m6 w3-padding-large">
      <Product />
    </div>
    <div class="w3-col m6 w3-padding-large">
      <Product />
    </div>
  </div>
  <p class="w3-large w3-center w3-padding-16">We are really good at:</p>
  <p class="w3-wide"><i class="fa fa-coffee"></i>Drinking Coffee</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:90%">90%</div>
  </div>
  <p class="w3-wide"><i class="fa fa-laptop"></i>Web Developement</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:85%">85%</div>
  </div>
  <p class="w3-wide"><i class="fa fa-gamepad"></i>Gaming</p>
  <div class="w3-light-grey">
    <div class="w3-container w3-padding-small w3-dark-grey w3-center" style="width:75%">75%</div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Shop',
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{

    }
}
</script>

<style scoped>
.bgimg-1 {
  background-image: url('../assets/building.jpg');
  min-height: 300px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>