// rock paper scisers 
let rock = document.getElementById("rock")
//rock is 1
let paper = document.getElementById("paper")
//paper is 2
let sis = document.getElementById("sis")
//sis is 3 
let playerdes = 0;
let totalwin = 0;
let totallose = 0;
let totaldraw = 0;
function play(playerdes){
    let botdes = Math.ceil(Math.random() * 3)
    if (botdes == playerdes){
        draw()
    }
    else if(playerdes == 1 && botdes == 2||
        playerdes == 2 && botdes == 3 ||
        playerdes == 3 && botdes == 1
    ){
        lose()
    }
    else if(playerdes == 2 && botdes == 1 ||
        playerdes == 3 && botdes == 2 ||
        playerdes == 1 && botdes == 3
    ){
        win()
    }
    console.log(playerdes , botdes);
} 
function lose(){
    alert("lose");
    totallose = totallose + 1;
}
function win(){
    alert("win");
    totalwin = totalwin + 1;
}
function draw(){
    alert("draw");
    totaldraw = totaldraw + 1;
}
rock.addEventListener("click", function(){play(1)})
paper.addEventListener("click", function(){play(2)})
sis.addEventListener("click", function(){play(3)})