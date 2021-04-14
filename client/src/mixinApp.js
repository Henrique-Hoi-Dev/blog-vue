export default {
  methods: {
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