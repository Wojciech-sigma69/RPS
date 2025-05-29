// rock paper scisers 
let rock = document.getElementById("rock")
//rock is 1
let paper = document.getElementById("paper")
//paper is 2
let sis = document.getElementById("sis")
//sis is 3 
let playerdes = 0;
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
} 
function lose(){
    alert("lose")
}
function win(){
    alert("win")
}
function draw(){
    alert("draw")
}
rock.addEventListener("click", play(1))
paper.addEventListener("click", play(2))
sis.addEventListener("click", play(3))