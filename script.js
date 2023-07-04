let header = document.getElementById("wave");
window.onscroll = function(){
    let top = window.scrollY;
    console.log(top);
    if(top >= 400 && top<=1400){
        header.classList.add("active1");
    }
    else if(top>=1500){
        header.classList.add("active2");
    }
    else{
        header.classList.remove("active1");
        header.classList.remove("active2");
    }
}

