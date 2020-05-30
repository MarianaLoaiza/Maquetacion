import axios from 'axios'
const posts = {
    namespaced: true,

    state:{
        datos: [],
        secciones: [],
        opcionesLista: [],
      
    },

    mutations:{
        SET_POSTS(state, data){
            state.opcionesLista = data.variable
            state.secciones = data.seccion
            state.datos = data.variable
          
        },

        
    },

    actions:{
       async loadPosts({commit}){
           await axios
            .get(`https://formularios-prueba-tecnica-6ihrk4y23q-ue.a.run.app/formularios/api/v3/prueba_tecnica`)
            .then(res =>{
                 commit('SET_POSTS',res.data.data.data)
                
                console.log(res.data)
            })

            .catch(error => console.log(error))

        }
    }
    
}

export default posts;