var like = document.querySelector(".container");
var love = document.querySelector("#img");

like.addEventListener("dblclick", function(){
    love.style.transform = 'translate(-50%,-50%) scale(1)';
    love.style.opacity = 0.8;
    setTimeout(function(){
        love.style.transform = 'translate(-50%,-50%) scale(0)'
    },2000);
    setTimeout(function(){
        love.style.opacity = 0;
    },1000)
})
