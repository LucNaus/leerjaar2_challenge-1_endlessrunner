var chicken = document.getElementById('chicken');
var obstacle = document.getElementById('obstacle');
var counter = 0;

function jump(){
    if(chicken.classlist !="animate"){
        chicken.classList.add("animate");
    }
    setTimeout(function(){
        chicken.classList.remove("animate");
        counter++;
    },500);

}

var lose = setInterval(function(){
    var chickentop =
    parseint(window.getComputedStyle(chicken). 
        getPropertyValue("top"));
        var blockLeft =
    parseint(window.getComputedStyle(obstacle). 
    getPropertyValue("left"));  
    if(blockLeft<20 && blockLeft>0 && chickentop>=130){
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("SCORE"+ counter);
        counter = 0;
    }
},10);