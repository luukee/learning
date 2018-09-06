
var app = new Vue({ //creating a vue instance
    // then pass in the options object
    el: '#app', // where we want our vue to live, target the DOM node #app id

    data: { // data object
        message: "Hello Vue!",
        seen: false,
        todos: [ //object array
            { text: 'Learn JavaScript'},
            { text: 'Learn Vue'},
            { text: 'Build something awesome!'}
        ]
    }, // data object end
    // methods object
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

app.message = "I have not changed the data!";
app.seen = true

app.todos.push({ text: 'new item'}) //add a new element on the todos array
// next is v-model
