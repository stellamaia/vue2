<template>
  <div>
    <v-list-item  :class="{'blue lighten-4': tarefaCopy.concluida }" @click="toggleConcluida">
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox v-model="tarefaCopy.concluida"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title :class="{'text-decoration-line-through': tarefaCopy.concluida}">
            {{ tarefaCopy.titulo }}
          </v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "TarefaComponent",
  props: ['tarefa'],
  data() {
    // return {
    //   tarefaCopy: false
    // }
  },
  computed: {
    tarefaCopy() {
      return { ...this.tarefa }; // Cria uma cópia da propriedade 'tarefa'
    }
  },
  methods: {
    toggleConcluida() {
      this.tarefaCopy.concluida = !this.tarefaCopy.concluida;
      this.$emit('toggle-concluida', this.tarefaCopy.concluida);
    }
  }
}
</script>

<style>
</style>
