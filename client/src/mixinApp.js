export default {
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast('Texto foi publicado', {
        title: `${variant || 'default'}`,
        variant: variant,
        solid: true
      })
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