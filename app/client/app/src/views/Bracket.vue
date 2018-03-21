<template>
<div id="bracket">
    <div class="center-items">
        <h1>Smash Brothers Extra Life Tournament Bracket</h1>
    </div>
      
    <div class="center-items"><button>Randomize the Bracket</button></div> 

    <div class="flex-div">
        <div>
            <div class="bracket-top"></div>
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
