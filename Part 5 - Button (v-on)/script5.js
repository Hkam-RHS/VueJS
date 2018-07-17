var app5 = new Vue({
    el:"#app-5",
    data: {
        message: "Reverse this message",
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

