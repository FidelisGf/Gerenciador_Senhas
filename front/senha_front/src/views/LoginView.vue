<template>
    <v-app >
       <v-main>
          <v-container fluid fill-height>
             <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                   <v-card class="elevation-16">
                      <v-toolbar dark color="primary">
                         <v-toolbar-title>Login</v-toolbar-title>
                      </v-toolbar>
                      <v-card-text>
                      <form ref="form" @submit.prevent="logar">
                             <v-text-field
                               v-model="User.username"
                               name="username"
                               type="text"
                               placeholder="Usuario"
                               required
                            ></v-text-field>
       
                             <v-text-field
                               v-model="User.password"
                               name="password"
                               type="password"
                               placeholder="Senha"
                               required
                            ></v-text-field>
                            <v-btn type="submit" @click="login" class="mt-4" color="primary" value="log in">Login</v-btn>
                            <router-link to="/register">
                              <v-btn type="submit" class="mt-4 ml-4" color="primary" value="log in">Registrar-se</v-btn>
                            </router-link> 
                       </form>
                      </v-card-text>
                   </v-card>
                 
                </v-flex>
             </v-layout>
          </v-container>
       </v-main>
    </v-app>
 </template>
 
 <script>
 import router from '@/router';
import userService from '@/service/userService'
 export default {
   
   data() {
     return {
      User:{
         username: "",
         password: "",
      }
     };
   },
   methods: {
      login(){
         userService.login(this.User).then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.id);
            router.push("/home")
         })
      }
   },
   created(){
      localStorage.clear();
   }
 };
 </script>