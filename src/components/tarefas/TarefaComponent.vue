<template>
  <div>
    <v-list-item >
      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox>
            {{ tarefa.titulo }}
          </v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
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
  props: ['tarefa'],  
  
}
</script>

<style>
</style>
