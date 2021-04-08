export default {
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast('Texto foi publicado', {
        title: `${variant || 'default'}`,
        variant: variant,
        solid: true
      })
    },
    limparUser() {
      this.usuario.first_name = ''
      this.usuario.sur_name = ''
      this.usuario.data_nascimento = ''
      this.usuario.email = ''
      this.usuario.avatar_id = ''
    },
    salvarUsers() {
      try {
          this.$http.post('/user/new', this.usuario)
          .then(() => {
            this.limparUser(),
            this.usuario.first_name = ''
            this.usuario.sur_name = ''
            this.usuario.data_nascimento = ''
            this.usuario.email = ''
            this.usuario.avatar_id = ''
        })
      } catch (error) {
        console.log('errro', error)
      }
      
    },
    limparText() {
			this.usuario.name = ''
			this.usuario.text = ''
		},
    salvarText() {
			this.$http.post('/textUser/new', this.usuario)
				.then(() => {
					this.limparText(),
					this.usuario.name = ''
					this.usuario.text = ''
      })
    }   
  }
}