<template>
  <div>
      <h1>Registro</h1>
      <div class="form-register animate__animated animate__fadeInDown">
              <div>
                <div
                  class="imagePreviewWrapper"
                  :style="{ 'background-image': `url(${usuario.avatar_id})` }"
                  @click="selectImage">
                </div>

                <input
                  class="avatar"
                  accept="image/*"
                  ref="fileInput"
                  type="file"
                  @input="pickFile"
                  @change="onSelect($event)">
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
          <b-button variant="dark" @click="salvarUsers(), makeToast('success')" >Enviar</b-button>                     
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
          first_name: 'Henrique',
          sur_name: 'Hoinacki',
          data_nascimento: '20/12/1994',
          email: 'riqueah@gmail.com',
          avatar_id: null
        }
      }      
    },
    methods: {
      selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput

        let file = input.files

        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.usuario.avatar_id = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      },
      onSelect(e) {
          this.usuario.avatar_id = e.target.files[0]
          console.log(this.usuario.avatar_id)
      },
       async onSubmit() {
        const data = new FormData();
        data.append('file', this.usuario.avatar_id )
        console.log(data)

        try {
          await this.$http.post('/files', data, {
            onUploadProgress: progressEvent => {
              console.log(progressEvent.loaded / progressEvent.total)
       }
      }) } catch (err) {

          console.log(err)
        }
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
