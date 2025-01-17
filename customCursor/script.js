var move = document.querySelector("#main");
var cur = document.querySelector(".cursor");

move.addEventListener("mousemove", function(dets){
    cur.style.left = dets.x+"px";
    cur.style.top = dets.y+"px";
})