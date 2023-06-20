<script>
import { defineComponent } from 'vue';
import Nav from './Navbar.vue'
import Footer from './Footer.vue';

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
      <Nav />
      <!-- was done in the landing page branch -->
      <router-view></router-view>
      <Footer class="z-[0]" />
    </div>
  </template>