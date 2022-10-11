<template>
    <v-container fluid grid-list-md>
        <v-row dense>
            <v-col cols="12">
                <v-card
                color="#f2f2f2"
                dark
                class="elevation-5"
                >
                    <v-card-title class="text-h4 black--text ">
                    Informações do usuario 
                    </v-card-title>
                    <v-card-subtitle class="ml-3 mt-2 black--text">ID : #{{User.id}} </v-card-subtitle>
                    <v-card-text class="ml-3 black--text">
                                 <p>Usuario : {{User.username}} </p>
                                 <p>Senha : {{User.password}} </p>
                    </v-card-text>   
                    <v-card-actions class="ml-3">
                        <v-btn color="#3e3e3c" @click="inactiveUser" >
                            Desativar Usuario
                        </v-btn>
                    </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import userService from '@/service/userService'
import router from '@/router';
export default {
    data(){
        return{
            User : {
                id: null,
                username : null,
                password : null,
            }
        }
    },
    methods:{
       getUser(){
        userService.getById(localStorage.getItem('token')).then((res) =>{
            this.User = res.data
        })
       },
    //    editUser(){
    //      let payload = this.User
    //      userService.update(this.User.id, payload).then((res)=>{
    //         if(res.status == 200){
    //             alert('Usuario alterado com sucesso')
    //         }
    //      })
    //    },
       inactiveUser(){
            userService.disable(this.User.id).then((res) =>{
                if(res.status == 200){
                    alert('Usuario Deletado')
                    localStorage.clear()
                    router.push("/")
                }
            })
       }
    },
    created(){ 
        this.getUser() 
    }
}
</script>

<style lang="scss" scoped>
</style>