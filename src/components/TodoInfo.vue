<template>
  <div class="hello">
    <router-link class="link" to="/">Back</router-link>
    <div>
       <div class="wrap">
            <hr>
            <h2>Choosen Todo: {{ $route.params.id }}</h2>
            <h3>Description: {{ $route.params.desc }}</h3>
            <hr>
            <input type="text" placeholder="Edit title: " v-model="upTitle"><br>
            <input type="text" placeholder="Edit description: " v-model="upDesc"><br>
            <button class="btn" v-on:click="updateTodo($route.params.n)">Update</button>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInfo',
  data: function() {
    return{
      todos: [],
      newTodo: null,
      newTitle: null,
      upTitle: null,
      upDesc: null
    }
  },
  mounted() {
    
  },
  methods: {
    updateTodo(n){
        if(this.upTitle == null || this.upDesc == null){
          alert("No empty field required!");
          return;
        }
        else{
          this.$store.getters.getTodos[n].title = this.upTitle;
          this.$store.getters.getTodos[n].description = this.upDesc;
          alert("Success! Your todo updated!");
          this.upTitle = '';
          this.upDesc = '';
        }
    }
  }
}
</script>

<style scoped>
.btn{
    background-color: rgba(0, 0, 0, 0.08);
    padding: 10px 8px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
}
.link{
  display: inline-block;
  padding: 5px 35px;
  text-decoration: none;
  color: black;
  margin: 8px;
  border: 2px solid aquamarine;
}
input{
    width: 300px;
    height: 30px;
    border-radius: 20px;
    padding-left: 15px;
    margin: 5px;
    border: 1px solid black;
}
</style>
