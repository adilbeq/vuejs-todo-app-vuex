import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
       todos: [
           { title: "first", description: "this is first todo", done: false },
           { title: "second", description: "this is second todo", done: false }
       ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getTodos(state){
            return state.todos;
        }
    }
});

export default store;