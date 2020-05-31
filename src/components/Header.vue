
<template> 
  <div>
    
      <v-row class="d-flex align-center"> 
      
        <v-col cols="12" sm="12" Maryland="6" lg="6" SG="6"
        class="d-flex justify-start">
            <img 
              src="@/assets/Logo-Oficial-sin-bordes.png"
              height="50"
              width="100">
        </v-col>

        <v-col cols="12" sm="12" Maryland="6" lg="6" SG="6"
        class="d-flex justify-end  pr-12  ">
              <router-link to="/" class="link  pr-10 " ><strong>INICIO</strong></router-link>
              <router-link to="/About" class="link  pr-10" ><strong>FORMULARIO</strong></router-link>
        </v-col>
        <router-view/>
       
      </v-row>

  </div>              
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.link{

  text-decoration: none;
  
}
</style>