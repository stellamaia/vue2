<template>
  <div>
    <v-list-item
     >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox>
            <v-checkbox
            :input-value="tarefa.concluido"
            />
          </v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through':  concluido }"
          >
            {{ tarefa.titulo }}
          </v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "TarefaComponent",
  props: ["tarefa"],
  data() {
    return {
      concluido: false, // ou o valor inicial desejado
    };
  },
  methods: {
    handleToggleConcluida() {
      this.concluido = !this.concluido;
    },
  },
};
</script>


<style>
</style>
