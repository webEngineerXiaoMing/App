<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import './style/public.css'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
html,body,div,table,tr,td,th,p,ul,li,dd,dt,dl,i,span{
  padding: 0;
  margin: 0;
}
a{
  color: #000;
  text-decoration: none;
}
li {
  list-style: none;
}
.fl {
  float: left;
}
.fr{
  float: right;
}
.clear::after{
  content: '';
  clear: both;
  display: block;
}
</style>
