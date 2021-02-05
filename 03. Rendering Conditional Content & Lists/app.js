const app = Vue.createApp({
  data() {
    return {
      obj:{
        name: 'Merve',
        age: 26
      },
      enteredGoals: '',
      goals: [] 
    };
  },

  methods: {
    addGoal(){
      if(this.enteredGoals.length !==0){
        this.goals.push(this.enteredGoals)
        console.log(this.goals)
      }
      
    }
  }
});

app.mount('#user-goals');
