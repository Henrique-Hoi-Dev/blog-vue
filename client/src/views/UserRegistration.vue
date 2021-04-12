<template>
  <div>
      <h1>Registro</h1>
      <div class="form-register animate__animated animate__fadeInDown">
        <div>
          <div
            class="imagePreviewWrapper"
            :style="{ 'background-image': `url(${avatar})` }"
            @click="selectImage">
          </div>
          <input
            class="avatar"
            accept="image/*"
            ref="file"
            type="file"
            @input="pickFile"
            @change="onSelect">
          </div>
        <label class="input" >
          <input class="input__field" type="text" placeholder=" " v-model="usuario.first_name"/>
          <span class="input__label">Nome</span>
        </label>
        <label class="input" >
          <input class="input__field" type="text" placeholder=" " v-model="usuario.sur_name"/>
          <span class="input__label">Sobrenome</span>
        </label>
        <label class="input" >
          <input class="input__field" type="text" placeholder=" " max="10" v-mask="'##/##/####'" v-model="usuario.data_nascimento"/>
          <span class="input__label">Data de Nascimento</span>
        </label>
        <label class="input" >
          <input class="input__field" type="text" placeholder=" " v-model="usuario.email"/>
          <span class="input__label">Email</span>
        </label>
        <div class="form-button">
          <b-button variant="dark" @click="salvarUsers()">Enviar</b-button>                     
        </div>
      </div>      
  </div>
</template>

<script>

export default {
  data() {
      return {
        avatar: null,
        usuario: {
          first_name: '',
          sur_name: '',
          data_nascimento: '',
          email: '',
          avatar_id: null
        }
      }      
    },
    methods: {
      selectImage() {
          this.$refs.file.click()
      },
      pickFile() {
        let input = this.$refs.file
        let file = input.files

        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.avatar = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      },
      async onSelect(event) {
        let formData = new FormData();
          formData.append('file', event.target.files[0])
        let res = await fetch('http://localhost:3000/files', {
        method: 'POST',
        body: formData,
        });
        let data = await res.json();
        this.data = data;

        this.usuario.avatar_id = data.id
      }, 
      /*eslint no-mixed-spaces-and-tabs: ["error", "smart-tabs"]*/
      limparUser() {
        this.usuario.first_name = ''
        this.usuario.sur_name = ''
        this.usuario.data_nascimento = ''
        this.usuario.email = ''
        this.avatar = ''
		  },
      salvarUsers() { 
        this.$http.post('/user/new', this.usuario)
				.then(() => {
          this.limparUser(),
          this.usuario.first_name = ''
          this.usuario.sur_name = ''
          this.usuario.data_nascimento = ''
          this.usuario.email = ''
          this.usuario.avatar_id = ''
        })
      }
    }  
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
  width: 10rem;
}
.imagePreviewWrapper {
    width: 150px;
    height: 150px;
    display: block;
    margin: 0 auto 30px;

    border: 2px solid #333;
    border-radius: 1rem;

    cursor: pointer;
    background-size: cover;
    background-position: center center;
}
.avatar  {
  display: none;
}
</style>
