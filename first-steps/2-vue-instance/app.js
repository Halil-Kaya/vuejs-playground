const app = Vue.createApp({
    data(){
        return{
            title : "First steps",
            content : "Contents",
            eduflow:{
                title : "click me",
                target:"target_",
                url:"https://google.com",
                alt:"google",
            },
            owner : "Halil Kaya",
            cords:{
                x : 0,
                y: 0
            }
        }
    },
    methods:{
        changeTitle(msg){
            this.title=msg
        },
        updateCoords(message,event){
            this.changeTitle(`${event.x} , ${event.y}`)
            this.cords.x = event.x;
            this.cords.y = event.y;
        },
        testBtn(event){
            console.log(event)
        }
    }
}).mount('#app')