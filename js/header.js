window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.scrollTop >600, document.documentElement.scrollTop> 600){
        document.getElementById("main_header").style.display= "block";
    }
    else{
        document.getElementById("main_header").style.display= "none";
    }
};
