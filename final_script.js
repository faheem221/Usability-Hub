var ham_button = document.querySelector('.hamburger');
import LocomotiveScroll from "locomotive-scroll";
active = false;

ham_button.addEventListener('click', ()=>{
    if(active==false){
        console.log('click')
        active=true;
      
     
    }

    else if(active==true){
        console.log('unclick')
        active=false;

   
    }
})



const scroll = new LocomotiveScroll({
    el: document.querySelector('.locomotive'),
    smooth: true,
    lerp:0.1,
    multiplier:1
});