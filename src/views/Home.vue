<template>
  <div>
    
  <v-container>
      <Header/>
  </v-container>
  

    
     <Carrusel/>
      <Information/>
      <Services />
       <Footer />
       
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Carrusel from '@/components/Carrusel.vue'
import Information from '@/components/Information.vue'
import Footer from '@/components/Footer.vue'
import Services from '@/components/Services.vue'
export default {
  name: 'Home',
  components: {
   
    Header,
    Carrusel,
    Information,
    Footer,
    Services
  }
}
</script>


<style scoped>


</style>