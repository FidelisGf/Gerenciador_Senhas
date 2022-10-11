<template>
    <v-row justify="center">
      <v-dialog
        v-model="this.$store.getters.getResultadoSenha"
        persistent
        max-width="490"
      >
        <v-card>
          <v-card-title class="text-h5">
            Resultado da busca
          </v-card-title>
          <v-card-text>
            <p>Senha : <b>{{this.$store.getters.getSenha.password}}</b></p>
            <p>Descrição : <b>{{this.$store.getters.getSenha.description}}</b></p>
            <p>Url : <b>{{this.$store.getters.getSenha.url}}</b></p>
            <p>Estado : <b>{{this.$store.getters.getSenha.inactive}}</b></p>
            <p></p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="desativeResult"
            >
              Fechar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>

<script>
export default {
    data(){
        return{
            result : null
        }
    },
    methods:{
        desativeResult(){
            this.$store.commit("disableResultadoSenha")
        }
    },
}
</script>

<style lang="scss" scoped>

</style>