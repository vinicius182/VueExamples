new Vue({
    el: '#desafio',
    data: {
        nome: 'Vinícius Ferreira Dias',
        idade: 22,
        blink: './blink.png'
    },
    methods: {
        numeroRandom(){
            return Math.random(0, 1);
        }
    }
})