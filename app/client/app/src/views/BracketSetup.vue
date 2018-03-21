<template>
<div id="bracket">
    <div class="center-items">
        <h1>Setup The Bracket</h1>
    </div>
      
    <div class="center-items" @click="randomizeList"><button>Randomize the Bracket</button></div> 

    <div class="flex-div" v-if="isRandomed">
        <div>
            <div class="bracket-top">{{ players[0].name }}</div>
            <div class="bracket-bottom"></div>

            <div class="bracket-top"></div>
            <div class="bracket-bottom"></div>

            <div class="bracket-top"></div>
            <div class="bracket-bottom"></div>

            <div class="bracket-top"></div>
            <div class="bracket-bottom"></div>
        </div>

        <div class="winner-bracket-col">
            <div class="winner-bracket-1">
                <div class="bracket-top"></div>
            </div>
            <div class="winner-bracket-1">
                <div class="bracket-top"></div>
            </div>

            <div class="winner-bracket-2">
                <div class="bracket-top"></div>
            </div>
            <div class="winner-bracket-2">
                <div class="bracket-top"></div>
            </div>
        </div>

        <div class="winner-bracket-col">
            <div class="winner-bracket-3">
                <div class="bracket-top"></div>
            </div>
            <div class="winner-bracket-3">
                <div class="bracket-top"></div>
            </div>
        </div>

        <div class="winner-bracket-col">
            <div class="winner-bracket-4">
                <div class="bracket-top"></div>
            </div>
        </div>

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
      isRandomed: false
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
    }
  }
}
</script>



<style lang="sass" scoped>
    .center-items
        display: flex
        justify-content: center
        align-items: center
    
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

