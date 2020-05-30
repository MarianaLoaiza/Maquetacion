
<template>
   
    
   <div >
       <v-row class="d-flex align-center"> 
           <v-col cols="6" 
                class="d-flex justify-start  ">
                <img 
                 
                    src="@/assets/Logo-Oficial-sin-bordes.png"
                    height="50"
                    width="100"
                    >
                    

                   
           </v-col>
           <v-col cols="6"
                class="d-flex justify-end  pr-12"
              
                >
           

               <router-link to="/" class="link  pr-12" >INICIO</router-link>
                
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