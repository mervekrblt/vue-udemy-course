const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },

  watch: {
    counter(value){
      if(value > 50){
        this.counter = 0
      }
    }
  },

  computed:{
    fullName(){
      if(this.name !== ""){
        return this.name + " " + "karabulut"
      } else {
        return ""
      }
    },
/* doesnt work. Need watch
    stopOver50(){
      if(this.counter < 50){
        this.counter = 0
      }
    }
*/
  },
  
  methods: {
    add(num){
      this.counter = this.counter + num 
    },

    reduce(num){
      this.counter = this.counter - num
    },

    setName(event, lastName){
      this.name = event.target.value + " " + lastName
    },

    submitForm(){
      alert("Confirmed")
    },

    confirmName(){
      this.confirmedName = this.name
    }
  }
});

app.mount('#events');
