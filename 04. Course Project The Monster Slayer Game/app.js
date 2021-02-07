function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}

const app = Vue.createApp({
    data () {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            clicked: 0,
            winner: null,
            logMessages: []
        }
    },

    computed:{
        monsterBarStyle(){
            if(this.monsterHealth < 0){
                return {width: '0%'}
            }
            return {width: this.monsterHealth + '%'}
        },

        playerBarStyle(){
            if(this.playerHealth < 0){
                return {width: '0%'}
            }
            return {width: this.playerHealth + '%'}
        },

        isDiviableBy3(){
            return this.clicked % 3 !==0
        }
    },

    watch: {
        playerHealth(value) {
            if(value <= 0 && this.monsterHealth <= 0){
                //draw
                this.winner = 'draw'
            }else if(value <= 0) {
                //monster win
                this.winner = 'monster'
            }
        },

        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0){
                //draw
                this.winner = 'draw'
            }else if(value <= 0) {
                //player win
                this.winner = 'player'
            }
        },
    },

    methods: {
        attackMonster() {
            this.clicked ++
            const attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue
            this.addLogMessages('player', 'attack', attackValue)
            this.attackPlayer()
        },

        attackPlayer() {
            const attackValue = getRandomValue(8, 15)
            console.log(attackValue)
            this.addLogMessages('monster', 'attack', attackValue)
            this.playerHealth -= attackValue
        },

        specialAttack() {
            this.clicked ++
            const attackValue = getRandomValue(10, 25)
            this.monsterHealth -= attackValue
            this.addLogMessages('player', 'special-attack', attackValue)
            this.attackPlayer()
        },

        healPlayer() {
            this.clicked ++
            const healValue = getRandomValue(8, 20)
            if(this.playerHealth + healValue > 100){
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue
            }
            this.addLogMessages('player', 'heal',healValue)
            this.attackPlayer()
        },

        newGame(){
            this.playerHealth= 100,
            this.monsterHealth= 100,
            this.clicked= 0,
            this.winner=null,
            this.logMessages=[]
        },

        surrender(){
            this.winner = 'monster'
        },

        addLogMessages(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }

    }
})

app.mount("#game")