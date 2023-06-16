<script>
import { defineComponent } from 'vue';
import Nav from './components/Navbar.vue'
import Footer from './components/Footer.vue';

export default defineComponent({
  components: {Nav, Footer},
  data(){
    return{
    }
  }
})
</script>

<template>
  <Nav class="" />
  <Footer class="z-[0]" />
</template>

<style scoped>

</style>
