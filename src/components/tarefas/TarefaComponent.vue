<template>
  <div>
    <v-list-item
    :class="{'blue lighten-4' : tarefa.concluido}"
    @click="tarefa.concluido = !tarefa.concluido">
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox>
            <v-checkbox
              v-model="concluido"
              @change="handleToggleConcluida"
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

  computed: {
    concluido: {
      get() {
        return this.tarefa.concluido;
      },
      set(value) {
        this.$emit("update:concluido", value);
      },
    },
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
