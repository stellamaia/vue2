<template>
  <div>
    <v-list-item>
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox>
            <v-checkbox :input-value="tarefa.concluido" />
          </v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title :class="{ 'text-decoration-line-through': concluido }">
            {{ tarefa.titulo }}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click.stop="handleRemoveTarefa(tarefa.id)">
            <v-icon color="red" class="material-symbols-outlined">delete</v-icon>

          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
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
    handleRemoveTarefa(id) {
      this.$store.commit("removeTarefa", id);
    },
  },
};
</script>


<style></style>
