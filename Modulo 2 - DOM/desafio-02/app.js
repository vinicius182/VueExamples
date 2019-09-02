new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Oi!')
        },
        alteraValor(e) {
            this.valor = e.target.value
        }
    }
})