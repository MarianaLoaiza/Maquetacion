<template>
   <v-app >
    <div  >
      <router-view/>
    <div>
      <a href="https://api.whatsapp.com/send?phone=573508872241&text=Hola%20Neumomed%2C%20quiero%20pedir%20una%20cita." target="blank"> <img src="@/assets/wp.png" alt="" class="icon"></a>
    </div>
  
    </div>
  </v-app>
</template>

<script>


export default {
  
  name: 'App',
  data: () => ({
    
  }),
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;1,300&display=swap');
#app{
  font-family: 'Montserrat', sans-serif;
}
.icon{
  width: 5%;
 
  position: fixed;
  bottom: 25px;
  right: 30px;
  border-radius: 80% ;
}
</style>