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
  <div class="bg-[whitesmoke]">
    <!-- was done in the landing page branch -->
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
