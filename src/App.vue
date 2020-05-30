<template>
   <v-app>
    <div >
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
.icon{
  width: 5vw;
  height: 8vh;
  position: fixed;
  bottom: 25px;
  right: 20px;
  border-radius: 80% ;
}
</style>