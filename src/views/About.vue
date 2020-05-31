<template>
  <div  >
    
 <v-container>
      <Header/>
  </v-container>
  <v-container>
       <SectionForm/>
      
  </v-container>
     
 <Footer />

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import SectionForm from '@/components/SectionForm.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
export default {
  name: 'About',
  components: {
  SectionForm,
  Header,
  Footer
  },
  data(){
    return{
    
    }
  },
  
  


}
</script>

<style scoped>

</style>