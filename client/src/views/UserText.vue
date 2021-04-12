<template>
  <div class="hello">
      <h1>Sua História</h1>
    <div class="input-msg animate__animated animate__fadeInDown">        
          <div class="form__group field">
            <input type="input"
              v-model="usuario.name" 
              class="form__field" 
              placeholder="Name" name="name" id='name' required />
            <label for="name" class="form__label">Titulo</label>
          </div>
        <b-form-textarea
          id="textarea-large"
          size="lg"
          placeholder="Escreva sua historia"
          v-model="usuario.text">
        </b-form-textarea>
    </div>
      <div class="form-button">
        <b-button variant="dark" @click="salvarText(), makeToast('success')">Enviar</b-button>                     
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
        name: '',
        text: ''
      }
    }
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-weight: 700;
  font-family: cursive;
}
.hello {
  flex-direction: column;
  align-items: center;
  margin: 40px;
}
#textarea-large {
  margin-top: 10px;
  height: 400px;
}
$primary: #007bff;
$secondary: #004085;
$white: #333;
$gray: #9b9b9b;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}
.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
}
.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: $gray;
}
.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight:700;    
  }
  padding-bottom: 6px;  
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
}
.form__field{
  &:required,&:invalid { box-shadow:none; }
}
.form-button {
  margin: 10px;
}
button {
  width: 200px
}
</style>
