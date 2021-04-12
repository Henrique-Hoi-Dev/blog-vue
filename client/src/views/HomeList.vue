<template>
  <div class="form-list">
    <h1>Histórias</h1>
    
    <div class="w3-container animate__animated animate__fadeInDown"  v-for="text in data" :key="text.id">
      <ul class="w3-ul w3-card-4">
        <li class="w3-bar">
          <img src="../assets/avatar.png" class="w3-bar-item w3-circle w3-hide-small" style="width:85px">
          <span class="w3-large" >{{ text.name }}</span><br>

          <div class="w3-bar-item">
            <span >{{ text.text }}</span>
         </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      baseUrl: process.env.BASE_URL
    }
  },
  beforeMount(){
    this.getText();
  },
    methods: { 
    async getText() {
      const res = await fetch('http://localhost:3000/textUser');
      const data = await res.json();
      this.data = data;
    }
  },
}
</script>

<style scoped>
h1 {
  font-weight: 700;
  margin-bottom: 40px;
}
li {
  list-style-type: none;
}
ul {
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);
}
.form-list {
  margin-bottom: 20px;
 }
.w3-container {
  margin: 20px;
}
.w3-ul {
    list-style-type: none;
    padding: 0;
} 
.w3-ul li {
    padding: 8px 16px;
    border-bottom: 1px solid #ddd;
}
.w3-bar {
    width: 100%;
    overflow: hidden;
}
.w3-large {
    border-bottom: 2px solid;
    font-size: 25px!important;
    font-family: cursive;
}
.w3-bar .w3-bar-item {
    padding: 8px 16px;
    float: left;
    width: auto;
    border: none;
    display: block;
    outline: 0;
    border-radius: 50%;
}   
</style>
