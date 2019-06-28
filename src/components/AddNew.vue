<template>
  <div class="hello">
    <router-link class="link" to="/">Back</router-link>
    <p>
        <input v-model="newTitle" placeholder="Enter title: "><br>
        <input v-model="newTodo" placeholder="Enter description: "><br>
        <button class="btn" @click="addTodo">Add</button>

        <h5>{{ this.$store.state.todos }}</h5>
    </p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            newTitle: null,
            newTodo: null
        }
    },
    methods: {
        addTodo() {
            if (!this.newTodo || !this.newTitle) {
                alert("No empty field required!");
                return;
            }
            let temp =  { "title": this.newTitle, "description": this.newTodo, "done": false };
            console.log(temp);
            this.$store.state.todos.push(temp);
            alert("Success! Your todo updated!");
            this.newTodo = '';
            this.newTitle = '';
        }
    }
}
</script>

<style scoped>
.link{
  display: inline-block;
  padding: 5px 35px;
  text-decoration: none;
  color: black;
  margin: 8px;
  border: 2px solid aquamarine;
}
.btn{
    background-color: rgba(0, 0, 0, 0.08);
    padding: 10px 35px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
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