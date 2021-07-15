class Player {
    constructor(){
        this.index=null
        this.name=null
        this.distance=0
    }

    //reads the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val()
        })
    }

    //writes the playerCount value in the database
    updateCount(count){
        database.ref("/").update({
            playerCount :count
        })
    }

    //players - player1 - name and distance

     //writes the player name and distance value in the database
     updateInfo(){
        database.ref("players/player"+this.index).set({
            name :this.name,
            distance:this.distance
        })
    }

    // collects all the players information from the database
    static getPlayersInfo() {
        database.ref("players").on("value",(data)=>{
            players = data.val()
        })
    }
}