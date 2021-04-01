<template>
  <div >
    <h1>Histórias</h1>
    <div v-for="text in data" :key="text.id" class="nav">
    <h4>Titulo: {{ text.name }}</h4>
        <p>
        {{ text.text }}
        </p>
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
      console.log(data)
    }
  },
}
</script>

<style scoped>
.nav {
  display: grid;
  flex-direction: column;

  margin: 10px;
  align-items: center;
}
p {
  margin: 10px 80px;

  font-family: cursive;
  align-self: flex-start;
}
h1 {
  font-weight: 700;
  margin-bottom: 40px;
}
h4 {
  font-family: cursive;
  font-weight: bold;
}
li {
  list-style-type: none;
}
</style>
