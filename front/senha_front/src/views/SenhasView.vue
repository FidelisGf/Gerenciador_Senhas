<template>
    <v-container fluid grid-list-md>
        <v-row justify="center">
            <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  block
                  @click="cleanForm"
                  class="mt-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Nova Senha
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5" v-if="!editMode && !detailMode">Cadastro de Senha</span>
                  <span class="text-h5" v-if="editMode && !detailMode">Ediçaõ de Senha</span>
                  <span class="text-h5" v-if="detailMode">Detalhes da Senha</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row v-if="!detailMode">
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="senha"
                          label="Senha"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="desc"
                          label="Descrição"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="url"
                          label="Url"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row v-if="detailMode">
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="senha"
                            label="Senha"
                            required
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="desc"
                            label="Descrição"
                            readonly
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="url"
                            label="Url"
                            readonly
                          ></v-text-field>
                        </v-col>
                       
                      </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    v-if="!editMode"
                    color="blue darken-1"
                    text
                    @click="postSenha"
                  >
                    Criar
                  </v-btn>
                  <v-btn
                    v-if="editMode"
                    color="blue darken-1"
                    text
                    @click="editSenha"
                  >
                  Editar
                </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <v-row>
            <v-col cols="12">
                <v-data-table
                    :headers="headers"
                    :items="$store.getters.listSenhas"  
                    :items-per-page="10"
                    class="elevation-2"
                >
                <template v-slot:[`item.info`]="{ item }">
                    <v-icon color="blue darken-4"  @click="infoSenha(item)">mdi-alpha-i-circle</v-icon>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon small color="teal lighten-1" class="mr-2" @click="editViewSenha(item)">mdi-pencil</v-icon>
                    <v-icon small color="red lighten-1" @click="deleteSenha(item)">mdi-delete</v-icon>
                </template>
                <template v-slot:top>
                    <v-text-field
                    v-model="search"
                    color="teal lighten-1"
                    label="Procure Pela exata descrição"
                    class="mx-4"
                    ></v-text-field>
                    <v-btn
                        color="cyan lighten-1"
                        class="ml-2"
                        dark
                        @click="findSenhaByDesc"
                        >
                            Buscar
                    </v-btn>
                </template>
                </v-data-table>
                <ResultadoBuscaSenha></ResultadoBuscaSenha>
            </v-col>     
        </v-row>
    </v-container>
</template>

<script>
import senhaService from '@/service/senhaService'
import userService from '@/service/userService'
import ResultadoBuscaSenha from '../components/ResultadoBuscaSenha.vue'
export default {
    data() {
        return {
            search: null,
            senha: null,
            url: null,
            detailMode: false,
            id: null,
            Users: [],
            desc: null,
            User : {
                id: null,
                username : null,
                password : null,
            },
            editMode: false,
            Senhas: [],
            dialog: false,
        };
    },
    methods: {
        editViewSenha(item) {
            this.editMode = true;
            this.id = item.id;
            this.senha = item.password;
            this.url = item.url;
            this.desc = item.description;
            this.usuario = item.user;
            this.dialog = true;
        },
        infoSenha(item) {
            this.detailMode = true;
            this.id = item.id;
            this.senha = item.password;
            this.url = item.url;
            this.desc = item.description;
            this.usuario = item.user;
            this.dialog = true;
        },
        cleanForm() {
            this.detailMode = false;
            this.editMode = false;
            this.id = null;
            this.senha = null;
            this.url = null;
            this.desc = null;
            this.usuario = null;
        },
        getUser() {
            userService.getById(localStorage.getItem('token')).then((res) => {
                this.User = res.data
                console.log(this.User);
            });
        },
        postSenha() {
            let payload = { password: this.senha, description: this.desc, url: this.url, user: this.User };
            senhaService.postSenha(payload).then((res) => {
                let payload2 = { id: res.data.id, password: this.senha, description: this.desc, url: this.url, user: this.usuario };
                this.$store.commit("saveListSenhas", payload2);
            });
        },
        editSenha() {
            let payload = { id: this.id, password: this.senha, description: this.desc, url: this.url, user: this.usuario };
            senhaService.editSenha(this.id, payload).then((res) => {
                console.log(res);
            });
        },
        findSenhaByDesc() {
            senhaService.findSenhaByDesc(this.search).then((res) => {
                this.$store.commit("activeResultadoSenha");
                this.$store.commit("saveSenha", res.data)
                console.log(this.$store.state.senha)
            });
        },
        deleteSenha(item) {
            senhaService.delete(item.id).then((res) => {
                alert("Deletado com sucesso !");
                console.log(res);
                this.$store.commit("deleteInListSenhas", item.id);
            });
        },
        getSenhas() {
            senhaService.getSenhas(localStorage.getItem('token')).then((res) => {
                console.log(res);
                this.$store.commit("beginListSenhas", res.data.content);
            });
        }
    },
    computed: {
        headers() {
            return [
                { text: "Detalhes", value: "info", sortable: false },
                {
                    text: "Senha",
                    align: "start",
                    value: "password",
                },
                { text: "Descrição", value: "description" },
                { text: "Url", value: "url" },
               
                { text: "Actions", value: "actions", sortable: false },
            ];
        },
    },
    created() {
        this.getUser();
        this.getSenhas();
    },
    components: { ResultadoBuscaSenha }
}
</script>

<style lang="scss" scoped>

</style>