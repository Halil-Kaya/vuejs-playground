const app = Vue.createApp({
    data(){
        return {
            fullName : ""
        }
    },
    methods: {
        updateValue(event){
            this.fullName = event.target.value
        }
    },
}).mount("#app")