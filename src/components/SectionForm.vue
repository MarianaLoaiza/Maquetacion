
<template>
    
   <div>
     <h2 class="text-xs-center">Formulario</h2>
      
      <v-expansion-panels
        v-for="secciones of secciones" :key="secciones.id" >
        
        <v-expansion-panel class="ma-2">
          <v-expansion-panel-header> 
            {{secciones.nombre}}
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <ul v-for="datos of datos" :key="datos.id" >
              <li v-if="datos.seccion == 1 && secciones.valor == 1 " >
                {{datos.nombre}} 
              </li>
            </ul> 

            <ul  v-for="datos of datos" :key="datos.id" >
                <li v-if="datos.seccion == 2 && secciones.valor == 2 " >
                    {{datos.nombre}}   
                </li>
            </ul> 

            <ul  v-for="datos of datos" :key="datos.id" >
              <li v-if="datos.seccion == 3 && secciones.valor == 3 " >
                {{datos.nombre}}
              </li>
            </ul> 
      
   
        </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      
   </div>        
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'SectionForm',

  computed:{
    ...mapState('datos', ['datos']),
    ...mapState('secciones', ['secciones']),
    
  },

  created(){
      this.$store.dispatch('datos/loadPosts'),
      this.$store.dispatch('secciones/loadPosts')
 }
}
</script>

<style scoped>

</style>