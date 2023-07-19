import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [
      { id: 1, titulo:"Ir ao mercado", concluido: false },
      { id: 2, titulo:"Ir ao escola", concluido: false },

    ],
  },
  getters: {
  },
  mutations: {
    //é um metodo que pode fazer algo no state
    adicionaTarefa(state, titulo) {
      if (titulo) {
      state.tarefas.push({
        id: new Date().getTime(),
        titulo,
        concluido: false
        });
      
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
