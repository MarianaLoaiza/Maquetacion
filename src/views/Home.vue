<template>
  <div >
    
  <v-container>
      <Header/>
  </v-container>
  

    <div id="letter">

     <Carrusel/>
      <Information/>
      <Services  />
       <Footer />
    </div>
       
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;1,300&display=swap');
#letter{
  font-family: 'Montserrat', sans-serif;
}

</style>