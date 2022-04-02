<template>
  <div class="flex items-center justify-center">
    <div class="w-full flex items-center justify-center font-sans">
      <div class="rounded p-6 m-4 w-full  overflow-y-auto">
        <div>
          <todo-element v-for="todo in paginatedTodos" :key="todo.id" :todo="todo" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TodoElement from "@/components/TodoElement.vue";
// import { mapGetters } from "vuex";

export default {
  components: {
    TodoElement,
  },
  computed: {
    paginatedTodos() {
      return this.$store.getters.LastTodoTodos;
    }
  }
}
</script>
