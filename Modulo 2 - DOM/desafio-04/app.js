new Vue({
	el: '#desafio',
	data: {
		classe1: 'destaque',
		classe2: '',
		classe3: '',
		perigo: true,
		cor: 'magenta',
		estilo: {
			width: '100px',
			height: '100px'
		},
		largura: 0,
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			var temp = setInterval(() => {
				valor += 5
				this.largura = `${valor}%`
				if(valor == 100) clearInterval(temp)
			}, 500)
		},
		setBool(e) {
			if(e.target.value == "true") {
				this.perigo = true
			} else if (e.target.value == "false"){
				this.perigo = false
			}
		}
	}
})
