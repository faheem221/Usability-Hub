let toggle_button = document.getElementById("parent");
active = false;
toggle_button.addEventListener('click', ()=>{
    if(active==false){
        active=true;
        console.log('clicked')
        document.getElementById('child').style.animation = 'slide_right .6s forwards ease';
        toggle_button.style.transitionDelay = '.7s';
        toggle_button.style.transition = '.7s';
        toggle_button.style.backgroundColor = '#2196F3';
    }

    else if(active==true){
        active=false;
        console.log('tick')
        document.getElementById('child').style.animation = 'slide_left .6s forwards ease';
        toggle_button.style.backgroundColor = 'rgb(88, 88, 88)';
    }
})