<template>
    <div class="flex mb-4 items-center">
      <p v-if="!isEditing" class="w-full text-gray-900"
          :class="{
              'line-through': todo.done
          }"
      >
          {{todo.description}}
      </p>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700" v-else v-model="description" />
      <button @click="toggleDone(todo._id)" v-if="!todo.done" class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Fait</button>
      <button @click="toggleDone(todo._id)" v-else-if="todo.done" class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500">Pas fait</button>
      <button v-if="!isEditable" @click="deleteTodo(todo._id)" class="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Supprimer</button>
      <button v-if="!isEditable" @click="$router.push({ name: 'todo', params: { id: todo._id } })" class="flex p-2 ml-2 border-2 rounded text-green-500 border-green-500 hover:text-white hover:bg-green-500">Edit Page</button>
      <button v-if="isEditable" @click="toggleEdit()" class="flex p-2 ml-2 border-2 rounded text-green-500 border-green-500 hover:text-white hover:bg-green-500">Edit</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
      data() {
        return {
            isEditing: false,
            description: this.todo.description
          }
        },
        props: {
            todo: {
                _id: Number,
                done: Boolean,
                description: String,
                date:Date
            },
            isEditable: Boolean
        },
        methods: {
          ...mapActions([
              'toggleDone',
              'deleteTodo',
              "editTodo"
          ]),
          toggleEdit() {
            if (this.isEditing) {
              this.editTodo({
                ...this.todo,
                description: this.description
              });
            }
            this.isEditing = !this.isEditing;
          }
        }
    }
</script>