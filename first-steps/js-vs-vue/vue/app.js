const app = Vue.createApp({
    data(){
        return {
            todoText : null,
            todoList : [],
            url : "https://www.google.com"
        }
    },
    methods : {
        addTodo(){
            this.todoList.push(this.todoText)
        }
    }
}).mount(('#app'))
