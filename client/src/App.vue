<template>
  <div id="app">
    <div id="nav">
      <Menu></Menu>
    </div>   
    <router-view />
    <div id="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Menu, Footer }
}
</script>


<style >
body{
  background-color: #f0efe7 !important;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin: 20px;
}
#nav a {
  font-weight: bold;
  color: #0056b3;
  text-decoration: none;
}
#nav a:hover {
  transition: 0.5s;
  opacity: 0.5;
}
.b-sidebar:not(.b-sidebar-right) {
  max-width: 200px;
}
#footer {
  position: relative;
  bottom: 0;
  width: 100%;
  height: 250px;
  background-color: #333;
}
</style>
