<template>
  <div>
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div class="rounded p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto">
          <todo-element :isEditable="true" :todo="$store.state.todos.find(todo => todo._id === $route.params.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoElement from '@/components/TodoElement';

export default {
  components: {
    TodoElement
  },
}
</script>