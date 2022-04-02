import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

import config from "@/config/page";
// Create a new store instance.
const store = new Vuex.Store({
  state: {
    page: 1,
    todos: [
    ]
  },
  getters: {
    paginatedTodos(state) {
      return state.todos.slice((state.page - 1) * config.PAGE_SIZE, (state.page - 1) * config.PAGE_SIZE + config.PAGE_SIZE);
    },
    LastTodoTodos(state) {
      return state.todos.slice(0, 3);
    },
    percentageDone(state) {
      return `${state.todos.length > 0 ? (((state.todos.filter(todo => todo.done)).length / state.todos.length) * 100).toFixed(2) : 0}%`;
    },
    maxTodoId(state) {
      return Math.max(...state.todos.map(todo => todo.id));
    }
  },
  mutations: {
    deleteTodo(state, id) {
      state.todos.splice(state.todos.findIndex(todo => todo._id === id), 1);
      this.commit('deleteTodosAPI',id);
    },
    addTodo(state, todo) { // ajouter un id afin de séparer les différents élément ajouter
      if (todo) {
        this.commit('addTodosAPI',todo);
      }
    },
    editTodo(state, updatedTodo) {
      const todoToEditIndex = state.todos.findIndex(todo => todo._id === updatedTodo._id);
      if (todoToEditIndex > -1) {
        state.todos.splice(todoToEditIndex, 1, updatedTodo);
        this.commit("editTodosAPI", updatedTodo);
      }
    },
    toggleDone(state, id) {
      const todoToEdit = state.todos.find(todo => todo._id === id);
      if (todoToEdit) {
        todoToEdit.done = !todoToEdit.done;
        this.commit('editTodosAPI',todoToEdit);
      }
    },
    selectPage(state, page) {
      state.page = page;
    },
    async refreshTodos(state){
      axios
          .get('http://localhost:4000/api/v1/todos/')
          .then(async (response)=>{
            state.todos = [];
            response.data.forEach((element)=>{
              console.log(element)
              state.todos.push(element)
            });
          })
    },
    async editTodosAPI(state,todo){
      axios
          .patch(`http://localhost:4000/api/v1/todos/${todo._id}`,todo);
    },
    async deleteTodosAPI(state,id){
      axios
          .delete(`http://localhost:4000/api/v1/todos/${id}`);
    },
    async addTodosAPI(state,object){
      axios
          .post(`http://localhost:4000/api/v1/todos/`,object)
          .then(()=>{
            this.commit('refreshTodos',object);
          });
    },
  },
  actions: {
    refreshTodos({commit}) {
      commit("refreshTodos");
    },
    deleteTodo({commit}, id) {
      commit("deleteTodo", id);
    },
    addTodo({commit}, description) {
      commit("addTodo", {description, done: false});
    },
    editTodo({commit}, todo) {
      commit("editTodo", todo);
    },
    toggleDone({commit}, id) {
      commit("toggleDone", id);
    },
    selectPage({commit}, page) {
      commit("selectPage", page);
    }
  }
});

export default store;