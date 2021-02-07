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
        this.enteredGoals =''
      }
      
    },
    removeGoal(idx){
      this.goals.splice(idx, 1)
      console.log(idx)
    }
  }
});

app.mount('#user-goals');
