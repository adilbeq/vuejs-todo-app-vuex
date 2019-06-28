<template>
  <div class="hello">
    <router-link class="link" to="/add">Add New Todo</router-link>
    <div class="box" :class="{ 'done': todo.done }" v-for="(todo, n) in this.$store.getters.getTodos" :key="n">
      <router-link class="nonDecor" :to="'/info/' + todo.title + '/' + todo.description + '/' + n">
        <h2>{{ todo.title }}</h2>
        <h3>{{ todo.description }}</h3>
      </router-link>
      <div style="z-index: 352;">
        <button id="mark" class="btn" @click="saveDone(n)">Done</button>
        <button class="btn" @click="removeTodo(n)">Remove</button>          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    saveDone(n){
      let button = document.querySelectorAll("#mark")[n];
      if(!this.$store.getters.getTodos[n].done){
        button.innerHTML = "Unmark";
        this.$store.getters.getTodos[n].done = true;
      }
      else{
        button.innerHTML = "Done";
        this.$store.getters.getTodos[n].done = false;
      }
    },
    removeTodo(x) {
      console.log(this.$store.getters.getTodos[x]);
      delete this.$store.getters.getTodos.splice(x, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  color: rgba(0, 0, 0, 0.5);
}
.nonDecor{
  text-decoration: none;
}
.link{
  display: inline-block;
  padding: 5px 35px;
  text-decoration: none;
  color: black;
  margin: 8px;
  border: 2px solid aquamarine;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box {
  margin: 0 auto;
  width: 400px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.2)
}
.box.done {
  background-color: aquamarine;
  border: none;
  box-shadow: 0px 10px 30px rgba(aquamarine,0.4)
}
.btn{
  background-color: rgba(0, 0, 0, 0.08);
  padding: 10px 8px;
  border: none;
  border-radius: 5px;
}
.link{
  display: inline-block;
  padding: 5px 35px;
  text-decoration: none;
  color: black;
  margin: 8px;
  border: 2px solid aquamarine;
}
</style>
