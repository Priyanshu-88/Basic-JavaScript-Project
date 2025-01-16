var addfriend = document.querySelector("#add");
var istatus = document.querySelector("h3");
// var remove = document.querySelector("#remove")
var flag =  0;


addfriend.addEventListener("click", function(){
    if(flag == 0){
        istatus.innerHTML= "Friends";
        istatus.style.color="green";
        addfriend.innerHTML = "Remove"
        flag = 1;
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "brown";
        addfriend.innerHTML = "Add Friend";
        flag = 0;
    }
})
// remove.addEventListener("click", function(){
//     istatus.innerHTML="Stranger";
//     istatus.style.color="brown"
// })
