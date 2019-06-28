<template>
  <div id="app">
    <h1>Todos App based on Vuex</h1>
    <router-view/>
  </div>
</template>

<script>
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default {
  name: 'App'
}
</script>

<style>
html, body{
  box-sizing: border-box;
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
