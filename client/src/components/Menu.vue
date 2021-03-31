<template>
  <div>
  <b-button v-b-toggle.sidebar-variant variant="dark">
  <b-icon icon="justify" scale="1.5"></b-icon>
  </b-button>
    <b-sidebar id="sidebar-variant" title="Menu" bg-variant="dark" text-variant="light" shadow>

      <div class="px-3 py-2">
        <router-link to="/" >Incio</router-link>
      </div>
      <div class="px-3 py-2">
        <router-link to="/user/registration" >Registro usuário</router-link>
      </div>
      <div class="px-3 py-2">
        <router-link to="/user/text" >Sua história</router-link>
      </div>
      
    </b-sidebar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
button {
  color: #fff;
  display: flex;
  margin: 20px;
}
</style>
