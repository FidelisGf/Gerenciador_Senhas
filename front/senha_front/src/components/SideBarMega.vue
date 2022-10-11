<template>
    <div>
        <!--Dekstop Version -->
        <v-navigation-drawer v-if="!$vuetify.breakpoint.smAndDown"
        :app="$vuetify.breakpoint.mdAndUp"
        :fixed="$vuetify.breakpoint.mdAndUp"
        color="#f2f2f2"
        :scroll-toolbar-off-screen="$vuetify.breakpoint.smAndDown"
        permanent
        :width="320"
        >  
        <v-list
            nav 
          >
          <v-row class="mt-2" >
            <v-col >
              <v-list-item @click="$router.push('/senhas')" class="d-flex-row justify-center"  link>
                <v-card class="rounded-xl" elevation="6">
                    <v-card-title class="mt-n2 ml-2">Senhas</v-card-title>
                    <v-row  style="margin-top: 1px">
                      <v-col cols="1" class="mt-n5 ml-3">
                        <v-icon large color="teal lighten-1" left>
                          mdi-archive-check
                        </v-icon>
                      </v-col>
                      <v-col cols="9" class="mt-n3 ml-5">
                        <p>Gerenciador de Senhas</p>
                      </v-col>
                      <v-col cols="1" class="mt-n5 ml-n12">
                        <v-icon large color="teal lighten-1" right>
                          mdi-chevron-right
                        </v-icon>
                      </v-col>
                    </v-row> 
                </v-card>
              </v-list-item> 
            </v-col>
            </v-row>
            <v-row class="mt-2" >
              <v-col >
                <v-list-item @click="$router.push('/usuario')" class="d-flex-row justify-center"  link>
                  <v-card class="rounded-xl" elevation="6">
                      <v-card-title class="mt-n2 ml-2">Usuarios</v-card-title>
                      <v-row  style="margin-top: 1px">
                        <v-col cols="1" class="mt-n5 ml-3">
                          <v-icon large color="teal lighten-1" left>
                            mdi-account
                          </v-icon>
                        </v-col>
                        <v-col cols="9" class="mt-n3 ml-5">
                          <p>Modifique seu usuario </p>
                        </v-col>
                        <v-col cols="1" class="mt-n5 ml-n12">
                          <v-icon large color="teal lighten-1" right>
                            mdi-chevron-right
                          </v-icon>
                        </v-col>
                      </v-row> 
                  </v-card>
                </v-list-item> 
              </v-col>
              </v-row>
        </v-list>
      </v-navigation-drawer>
    <!-- Middle Version -->
    <v-container v-if="$vuetify.breakpoint.smAndDown" class="info">
        <v-row >
          <v-col >
            <v-list-item @click="$router.push('/senhas')" class="d-flex-row justify-center" link>
              <v-card class="rounded-xl" style="width:100vh;" elevation="5">
                  <v-card-title>Senhas</v-card-title>
                  <v-row >
                    <v-col cols="1" class="mt-n4 ml-3">
                      <v-icon large color="teal lighten-1" left>
                        mdi-package-variant-closed
                      </v-icon>
                    </v-col>
                    <v-col cols="9" class="mt-n3 ml-5">
                      <p>Gerenciador de Senhas</p>
                    </v-col>
                    <v-col cols="1" class="mt-n4 ml-n12">
                      <v-icon large color="teal lighten-1" right>
                        mdi-chevron-down
                      </v-icon>
                    </v-col>
                  </v-row> 
              </v-card>
            </v-list-item> 
          </v-col>
        </v-row>
    </v-container>
    </div>
</template>
<script>
/* eslint-disable */
export default {
  data(){
    return {
      dialog: false,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>