
var index = 0; 
autoSlideShow(); 
function autoSlideShow(){ 
    var i; 
    var x = document.getElementsByClassName("slide"); 
    for(i = 0; i < x.length; i++){ 
        x[i].style.display = "none"; 
    }
    index++; 
    if(index > x.length){index = 0} 
    x[index-1].style.display = "block"; 
    setTimeout(autoSlideShow, 3000); 
}