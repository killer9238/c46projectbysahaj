class Player{
    constructor(){
        this.index=null;
        this.x=500
        this.y=200
        this.name=null;
        this.score=0;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }    
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          score:this.score,
          x:this.x,
          y:this.y
        });
      }

      getScore(){
        var playerindex="players/player"+this.index + "/score"
        var scoreRef = database.ref(playerindex);
        scoreRef.on("value",(data)=>{
        this.score = data.val();
        })
      }

      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
}