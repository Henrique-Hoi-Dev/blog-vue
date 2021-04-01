<template>
  <div>
      <h1>Registro</h1>
      <div class="form-register">
        <label class="input" >
          <input class="input__field" type="text" placeholder=" " v-model="usuario.first_name"/>
          <span class="input__label">Nome</span>
        </label>
        <label class="input" >
          <input class="input__field" type="text" placeholder=" " v-model="usuario.sur_name"/>
          <span class="input__label">Sobrenome</span>
        </label>
        <label class="input" >
          <input class="input__field" type="date" placeholder=" " v-model="usuario.data_nascimento"/>
          <span class="input__label">Data de Nascimento</span>
        </label>
        <label class="input" >
          <input class="input__field" type="text" placeholder=" " v-model="usuario.email"/>
          <span class="input__label">Email</span>
        </label>
        <div class="form-button">
          <b-button variant="dark" @click="salvar(), makeToast('success')" >Enviar</b-button>                     
        </div>
      </div>
  </div>
</template>

<script>
import mixinApp from '@/mixinApp'

export default {
  mixins: [ mixinApp ],
  data() {
      return {
        usuario: {
          first_name: '',
          sur_name: '',
          data_nascimento: '',
          email: ''
        }
      }
    },
    
}
</script>

<style scoped lang="scss">
.form-register {
  margin: 70px;

  display: flex;
  flex-direction: column;
}
h1 {
  font-weight: 700;
  font-family: cursive;
}
@import url('https://rsms.me/inter/inter.css');
.input {
  position: relative;
  width: auto;
  margin-top: 15px;
  
  &__label {
    position: absolute;
    left: 0;
    top: 0;
    padding: calc(.5rem * 0.75) calc(.5rem * .5);
    margin: calc(.5rem * 0.75 + 3px) calc(.5rem * .5);
    background: pink;
    white-space: nowrap;
    transform: translate(0, 0);
    transform-origin: 0 0;
    background: #f0efe7;
    transition: transform 120ms ease-in;
    font-weight: bold;
    line-height: 1.2;
   
  }
  &__field {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 1px solid currentColor;
    padding: calc(.5rem * 1.5) .5rem;
    color: currentColor;
    background: transparent;
    border-radius: 8px;
    
    &:focus,
    &:not(:placeholder-shown) {
      & + .input__label {
        transform: translate(.25rem, -65%) scale(.8);
        color: #007bff;
      }
    }
  }
}
.form-button {
  margin: 10px;
}
button {
  width: 500px
}
</style>
