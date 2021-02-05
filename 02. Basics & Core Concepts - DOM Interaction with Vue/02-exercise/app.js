const app = Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            name: 'Merve',
            link: "https://github.com/mervekrblt"
        }
    },

    methods:{
        isSelected(box){
            if(box === 'A'){
                this.boxASelected = !this.boxASelected
                console.log(this.boxASelected)
            }else if(box === 'B'){
                this.boxBSelected = !this.boxBSelected
                console.log(this.boxBSelected)
            }else if(box === 'C'){
                this.boxCSelected = !this.boxCSelected
                console.log(this.boxCSelected)
            }
        }
    },
    
})

app.mount("#styling")