<template>
    <div  class="  d-flex ma-8 " id="eje" >
        <v-container  class="d-flex  " id="eje">
            <v-row  class="d-flex align-center" id="eje">
                
                <v-col cols="12" sm="4" Maryland="4" lg="4" SG="4" id="eje">
                    <hr >
                    <br>
                    <h3 class="darkBlue--text headline font-weight-medium">Programas</h3>
                    <br>
                    <li class="gray--text subtitle-1"><span>Programa de EPOC y ASMA</span></li>
                    <li class="gray--text subtitle-1"><span>Programa de SAHOS </span></li>
                    <li class="gray--text subtitle-1"><span>Programa Dejar de Fumar </span></li>
                       
                </v-col>

                <v-col cols="12" sm="4" Maryland="4" lg="4" SG="4">
                    <hr>
                    <br>
                    <h3 class="darkBlue--text headline font-weight-medium">Terapias</h3>
                    <br>
                    <li class="gray--text subtitle-1"><span>Rehabilitación Pulmonar </span></li>
                    <li class="gray--text subtitle-1"><span>Terapia Miofuncional Orofacial </span></li>
                    <li class="gray--text subtitle-1"><span>Terapia Cognitivo Conductual</span></li>
                </v-col>

                <v-col cols="12" sm="4" Maryland="4" lg="4" SG="4">
                   <hr>
                   <br>
                   <h3 class="darkBlue--text headline font-weight-medium">Consultas</h3>
                   <br>
                    <li class="gray--text subtitle-1"><span>Consulta de Neumología </span></li>
                    <li class="gray--text subtitle-1"><span>Consulta de Nutrición</span></li>
                    <li class="gray--text subtitle-1"><span>Consulta de Psicología</span></li>
                </v-col>

            </v-row>
        </v-container>   

    </div>
        
</template>


<script>
export default {
    name: 'Services'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;1,300&display=swap');
#eje{
  font-family: 'Montserrat', sans-serif;
}

hr{
    height: 2px;
   border: 0;  
   background-color: #2b2b2b;
}



</style>      
 