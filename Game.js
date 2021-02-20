class Game{
    constructor(){

    }
    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
        snake=createSprite(500,200)
        x=500
        y=200
        snake.addImage(snakeimage)
        //snake.addAnimation("snake2",bodyimage)
        snake.scale=0.5

        snakebody1=new snakeBody(500,200,10)
       snakebodies.push(snakebody1)
       snakebodies=[snakebody1]
       console.log(snakebodies[snakebodies.length-1])
        /*snake2=createSprite(500,200)
        snake2.addImage(snakeimage)
        snake2.scale=0.5

        snakes=[snake1,snake2];*/
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
          snake.x=snakebody1.body.position.x
          snake.y=snakebody1.body.position.y
            background(rgb(198,135,103));
            image(bgimage, 0,0,1000,1000);
            spwanApple();
            /*for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1 ;*/
             //}
             if(keyDown(UP_ARROW)){
            //  snake.velocityY=-1
            y=y-50
            snake.y=y
            snake.x=x
              player.x=snake.x;
              player.y=snake.y;
              var x1=snake.x
              var y1=snake.y
              for (var i=0;i<snakebodies.length;i++){
                Matter.Body.setPosition(snakebodies[i].body,{x:x1,y:y1})
                y1=y1-50
               }
             
             // Matter.Body.setStatic(snakebody1,false)
              player.update();
            }
            if(keyDown(DOWN_ARROW)){
             //snake.velocityY=+1
             y=y+50
             snake.y=y
             snake.x=x
              player.x=snake.x;
              player.y=snake.y;
              var x1=snake.x
              var y1=snake.y
              for (var i=0;i<snakebodies.length;i++){
                Matter.Body.setPosition(snakebodies[i].body,{x:x1,y:y1})
                y1=y1+50
               }
              //Matter.Body.setPosition(snakebody1.body,{x:snake.x,y:snake.y})
             // Matter.Body.setStatic(snakebody1,false)
              player.update();
           }
           if(keyDown(LEFT_ARROW)){
              //snake.velocityX=-1
              x=x-50
              snake.y=y
              snake.x=x
              player.x=snake.x;
              player.y=snake.y;
              var x1=snake.x
              var y1=snake.y
              for (var i=0;i<snakebodies.length;i++){
                Matter.Body.setPosition(snakebodies[i].body,{x:x1,y:y1})
                x1=x1-50
               }
             // Matter.Body.setPosition(snakebody1.body,{x:snake.x,y:snake.y})
             // Matter.Body.setStatic(snakebody1,false)
              player.update();
           }
           if(keyDown(RIGHT_ARROW)){
              //snake.velocityX=+1
              x=x+50
              snake.y=y
              snake.x=x
              player.x=snake.x;
              player.y=snake.y;
              var x1=snake.x
              var y1=snake.y
              for (var i=0;i<snakebodies.length;i++){
                Matter.Body.setPosition(snakebodies[i].body,{x:x1,y:y1})
                x1=x1+50
               }
              //Matter.Body.setPosition(snakebody1.body,{x:snake.x,y:snake.y})
             // Matter.Body.setStatic(snakebody1,false)
              player.update();
           }
             snake.bounceOff(edges)
             textSize(20)
             fill("black")
            // Score=player.getScore();
             //text("Score:  "+Score,100,900)
             if(appleGroup.isTouching(snake)){
               appleGroup.destroyEach()
               appleeaten=true
               //var body1=createSprite(snake.x+10,snake.y+10,10,10)
                 var newsnakebody=new snakeBody(snakebodies[snakebodies.length-1].body.position.x-10,snakebodies[snakebodies.length-1].
                  body.position.y-10,10)
                 newsnakebody.display();
                 snakebodies.push(newsnakebody)
                 //console.log(snakebodies[length-1])
                var slingshot1=new Rope(snakebodies[snakebodies.length-2].body,newsnakebody.body)
                //console.log("snakebodycreated")
                // newsnakebody.display()
                 //console.log("after display")
                 slingshot1.display();
                // console.log(snakebodies.length)
                
              Score=Score+1
              player.score=Score
              player.update();
             }
             for (var i=0;i<snakebodies.length;i++){
              snakebodies[i].display()
              
            //  strokeWeight(50)
              //stroke("black")
              //line(snakebodies[0].body.position.x,snakebodies[0].body.position.y,snakebodies[snakebodies.length-1].body.position.x,
                //snakebodies[snakebodies.length-1].body.position.y)
             }
             
        }     
        drawSprites(); 
    }
}