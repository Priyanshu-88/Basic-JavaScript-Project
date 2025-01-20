var arr = [
    {
        dp:"https://m.media-amazon.com/images/I/41t7My0HfjL._AC_UF1000,1000_QL80_.jpg",
        story:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Maharana_Pratap_By_Surendra_Singh_Shaktawat.jpg/800px-Maharana_Pratap_By_Surendra_Singh_Shaktawat.jpg",
    },
    {
        dp:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQFkg7Hk54IGMYa7Qqz5jlYQORZIfJFp-_G21wvptDB2hkBh1Xmb9Tjm27wg-oxIGtxKAjEu4IiGgMlT9-ksntc7A",
        story:"https://m.media-amazon.com/images/I/81rLFlLYhjL._AC_UF1000,1000_QL80_.jpg",
    },
    {
        dp:"https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63d91f694461c5001dcf70b7.jpg",
        story:"https://i.pinimg.com/1200x/ff/d8/95/ffd8952e228f5bbad73c029570a5483d.jpg",
    },
    {
        dp:"https://www.historicnation.in/storage/2020/01/sri-krishnadevaraya-of-vijayanagar.jpg",
        story:"https://historified.in/wp-content/uploads/2023/04/4eb77248d2d6805ddfccd2f1f24ad786-564x560.jpg",
    },
]

var clutter = ""

var storyi = document.querySelector("#storian");

arr.forEach(function(val,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${val.dp}" alt="dp Image">
    </div>`
});

storyi.innerHTML = clutter;

storyi.addEventListener("click",function(dets){
    document.querySelector(".fullScreen").style.display = "block";
    document.querySelector(".fullScreen").style.backgroundImage = `URL(${arr[dets.target.id].story})`;

    // var star = arr[dets.target.id].story
})


