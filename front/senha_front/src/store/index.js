import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Senhas : [],
    showResultadoSenha : false,
    senha : null
  },
  getters: {
      listSenhas(state){
       return state.Senhas
      },
      getResultadoSenha(state){
        return state.showResultadoSenha
      },
      getSenha(state){
        return state.senha
      }
  },
  mutations: {
    saveSenha(state, payload){
      state.senha = payload
    },
    activeResultadoSenha(state){
      state.showResultadoSenha = true
    },
    disableResultadoSenha(state){
      state.showResultadoSenha = false
    },
    beginListSenhas(state, payload){
      state.Senhas = payload
    },
    clearListSenhas(state){
      state.Senhas.length = 0
    },
    saveListSenhas(state, payload){
      state.Senhas.push(payload)
    },
    deleteInListSenhas(state, payload){
      state.Senhas =  state.Products.filter(item => item.id !== payload)
    },
  },
  actions: {
  },
  modules: {
  }
})
