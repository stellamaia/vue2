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
    //Os getters são funções que só permitem obter dados do estado de maneira computada
  },
  mutations: {
    //São funções síncronas que alteram o estado
    adicionaTarefa(state, titulo) {
      if (titulo) {
        //se titulo for valido, a funcao cria uma nova tarefa 
      state.tarefas.push({
        id: new Date().getTime(),
        titulo,
        concluido: false
        });
      
      }
    },
    removeTarefa(state, id) {
     state.tarefas =  state.tarefas.filter(tarefa => tarefa.id !== id)
    }
  },
  actions: {
  },
  modules: {
  }
})
