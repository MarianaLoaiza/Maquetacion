<template>
    
          
 
        <div class="mb-2 cont"  >
             <v-carousel hide-delimiters cycle  class="cont" >
            <v-carousel-item class="cont"
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
            ></v-carousel-item>
  </v-carousel>  
        </div>



</template>

<script>
export default {
      name:'Carrusel',

        data () {
      return {
        items: [
          {
            src: require('@/assets/Banner1.jpg'),
           
            
  
          },
          {
            src: require('@/assets/Banner2.jpg'),
          },
         
          {
            src: require('@/assets/Banner3.jpg'),
          },

           {
            src: require('@/assets/Banner4.jpg'),
          },

           {
            src: require('@/assets/Banner5.jpg'),
          },

           {
            src: require('@/assets/Banner6.jpg'),
          },
        ],
      }
    },
}


</script>

<style scoped>
.cont{
    width: 100%;
    background-size: center;
}

</style>