<template>
    <div  class="  darkGray white--text d-flex "  >
        <v-container  class="d-flex " >
            <v-row  class="d-flex align-center content">
                
                <v-col cols="12" class="information " xs="12" sm="12" Maryland="6" lg="6" SG="5" >
                    <hr class="darkBlue" >
                    <br>
                    <h5 class="font-weight-bold">NEUMOMED</h5>
                    <br>
                    <span class="font-weight-bold display-1 ">Neumomed IPS</span>
                    <br>
                    <br>
                    <span class="">ofrece una atención integral a pacientes con enfermedades respiratorias  y trastornos del sueño. 
                        </span>
                </v-col>

                <v-col class="content" cols="12" xs="12" sm="12" Maryland="6" lg="6" SG="7">
                    <v-img
                    class="img"
                    src="../assets/_MG_5091.jpg"
                    max-height="750">
                    </v-img>
                </v-col>

            </v-row>
        </v-container>
   
    </div>
</template>

<script>
export default {
    name: 'Information'
}
</script>

<style scoped>
.cont{
    width: 100%;
    
}


.img{
     width:80vw;
    border-radius: 235px 38px 174px 51px;
}
</style>