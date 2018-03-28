<template>
  <div id="bracket">
      <div class="center-items">
          <h1>Setup The Bracket</h1>
          <p class="med-spacing">Type in the players' name below:</p>
          <input class="med-spacing" type="text" placeholder="Player's Name" v-model="tournyPlayer">
          <button @click="addPlayer">Submit</button>
      </div>
        
      <div class="center-items" @click="randomizeList"><button>Randomize the Bracket</button></div>
      <hr>
      <div class="center-items">
        <label>Name</label>
        <input type="text" v-model="player.username">
        <label>Email</label>
        <input type="text" v-model="player.email">
        <br>
        <button @click="submitPlayer">Submit</button>
      </div>
      
  </div>
</template>

<script>
	export default {
  data () {
    return {
      players: [
        {name: 'Bob', isWinner: false},
        {name: 'Jim', isWinner: false},
        {name: 'Bob 2', isWinner: false},
        {name: 'Jim 2', isWinner: false},
        {name: 'Bob 3', isWinner: false},
        {name: 'Jim 3', isWinner: false},
        {name: 'Bob 4', isWinner: false},
        {name: 'Jim 4', isWinner: false}
      ],
      isRandomed: false,
      newPlayers: [],
      player: {
        username: '',
        email: ''
      },
      tournyPlayer: ''
    }
  },
  methods: {
    randomizeList () {
      this.isRandomed = false
      let playerArray = this.players
      for (let i = playerArray.length - 1; i >= 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1))
        let plyrAtIndex = playerArray[randIndex]
        playerArray[randIndex] = playerArray[i]
        playerArray[i] = plyrAtIndex
      }
      this.players = playerArray
      this.isRandomed = true
    },
    submitPlayer () {
      console.log(this.player)
      this.$http.post('https://vuejs-http-f1a87.firebaseio.com/data.json', this.player)
        .then(response => {
          console.log(response)
        })
    },
    addPlayer () {
      this.newPlayers.push(this.tournyPlayer)
      console.log(this.newPlayers)
    }
  }
}
</script>



<style lang="sass" scoped>
  .med-spacing 
    line-height: 1.5
    margin-bottom: 5px

  .center-items
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    padding-bottom: 8px


  .flex-div
    display: flex
    justify-content: center
    margin-top: 50px

  .bracket-top
    border-style: solid
    border-width: 1px
    height: 60px
    width: 140px
    margin-bottom: 1px
    background-color: #e6e8ed

  .bracket-bottom
    border-style: solid
    border-width: 1px
    height: 60px
    width: 140px
    margin-bottom: 50px
    background-color: #e6e8ed

  .winner-bracket-1 
    margin-left: 70px
    transform: translateY(130%)

  .winner-bracket-2 
    margin-left: 70px
    transform: translateY(510%)

  .winner-bracket-3
    transform: translateY(400%)
    margin-left: 70px

  .winner-bracket-4
    margin-left: 70px
    transform: translateY(450%)

  .winner-bracket-col 
    display: flex
    flex-direction: column
</style>

