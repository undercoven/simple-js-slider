var interval = 3000;

let slides, length, i, ballsDiv, balls;
slides = document.getElementsByClassName("slideItem");
ballsDiv = document.querySelector(".balls");

slides[0].style.display = "block";
sessionStorage.curentSlide = 1;

const slideShowInterval = setInterval(playSlide, interval);


(function(){
    for(i=0;i<slides.length;i++)
    {
        ballsDiv.innerHTML += "<i onclick=\"showMe("+i+")\" class='far fa-circle'></i>";        
    }    
})();

balls = document.getElementsByClassName("fa-circle");
balls[0].classList.remove("far");    
balls[0].classList.add("fas");  


function playSlide(){

    if(sessionStorage.curentSlide){}else{sessionStorage.curentSlide = 0}
    cur = sessionStorage.curentSlide;
    if(cur == (slides.length - 1)){
        sessionStorage.curentSlide = 0;
        hideElements();
        slides[cur].style.display = "block";
    }
    else{
        var next = parseInt(cur) + 1;    
        hideElements();
        slides[cur].style.display = "block";
        sessionStorage.curentSlide = next;    
    }
    balls[cur].classList.remove("far");    
    balls[cur].classList.add("fas");    
}




function hideElements(){
    for(var x=0;x<slides.length;x++)
    {
        slides[x].style.display = "none";    
        balls[x].classList.remove("fas");    
        balls[x].classList.add("far");     
    }
}

function showMe(i){
    clearTimeout(slideShowInterval);
    hideElements();
    slides[i].style.display = "block";
    balls[i].classList.remove("far");    
    balls[i].classList.add("fas");      
}
//remember victorian.io