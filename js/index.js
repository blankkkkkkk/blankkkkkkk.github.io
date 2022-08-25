var content = document.querySelector(".content");
var beforelist = document.querySelectorAll(".before");
var afterlist = document.querySelectorAll(".after");
content.onmousedown = function(){
    content.style.cursor = "url(/src/down.ico), auto" ;
}

content.onmouseup = function(){
    content.style.cursor = "url(/src/up.ico), auto" ;
}


for(var i=0;i<beforelist.length;i++){
    beforelist[i].onclick = function(){
        this.style.display = "none" ;
        this.parentElement.lastElementChild.style.display = "block" ;
        var temp =  this.parentElement.lastElementChild;
        function hid(){
            temp.style.display = "none" ;
        }
        setTimeout(hid,500);  
    }
}

setInterval(function() {
    var i = Math.floor(Math.random()*9);
    beforelist[i].style.display = "block";
    function hidd(){
        beforelist[i].style.display = "none";
    }
    setTimeout(hidd,1000);   
    
}, 1500);
