<template>
    <div class="white--text " >

        <div  class=" content  darkBlue  d-flex ">

            <v-container  class="d-flex content" >
                <v-row  class="d-flex align-center  ">
                
                    <v-col cols="12" sm="12" Maryland="12" lg="3" SG="3">
                        <h3 class="headline">Medellín</h3>
                        <p class="subtitle-1">
                            <span> Calle 19A # 44-25 Local 206 </span> 
                            <br>
                            <span>Edificio Salud y Servicios..</span>
                        </p>
                    </v-col>

                    <v-col cols="12" sm="12" Maryland="12" lg="3" SG="3">
                        <h3 class="headline">Rionegro</h3>
                        <p class="subtitle-1">
                            <span>Carrera 55 A #35- 2027, piso 4 Cs 402-404  </span> <br>
                            <span>Torre 2, City Médica.</span>
                        </p>
                    </v-col>

                    <v-col  cols="12"  sm="12" Maryland="12" lg="6" SG="6">
                        <iframe class="cont "
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7932.629839611141!2d-75.574785!3d6.222141!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0f5815194e96cbd!2sNEUMOMED!5e0!3m2!1ses!2sco!4v1590685109173!5m2!1ses!2sco"  width="95vw"
                        height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> 
                    </v-col>

                </v-row>
            </v-container>
      
        </div>


        <div class=" darkBlue  d-flex justify-center ">
            <p class="  text-xs-center subtitle-1 ">
                Neumomed | Todos los derechos reservados 2020
            </p>
        </div>

    </div>
</template>


<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>


.cont{
    width: 100%;
}

</style>