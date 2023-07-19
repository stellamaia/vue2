<template>
  <div>
    <v-col
          cols="12"
          >
          <v-text-field
            v-model="campoInput"
            label="Qual sua tarefa?"
            outlined
            clearable
            @keyup.enter="handleAddTarefa"
          ></v-text-field>
        </v-col>
    <v-list flat subheader>
      <v-list-item-group  multiple active-class="">
        <div 
        v-for="tarefa, index in $store.state.tarefas" 
        :key="index"
        >
          <TarefaComponent :tarefa="tarefa"/>
          <!-- Passando a propriedade tarefa para o component TarefaComponent 
          pode passar um valor para essa propriedade usando a sintaxe de vinculação :   -->
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import TarefaComponent from "@/components/tarefas/TarefaComponent.vue";

export default {
  name: "TarefasView",

  components: {
    TarefaComponent,
  },
  data() {
    return {
      campoInput:null,
  
    };
  },
 methods: {
  handleAddTarefa() {
    this.$store.commit("adicionaTarefa",  this.campoInput)
    this.campoInput = null;
    },
    handleToggleConcluida(concluida) {
      this.tarefa = { ...this.tarefa, concluida };
    }
  }
};
</script>
