window.onscroll=()=>{scrollNavbar()};

scrollNavbar=()=>{
    var scroll=$(window).scrollTop();
        if(scroll>110)
        {
            $("nav").addClass("changing-back");
        }
        else{
            $("nav").removeClass("changing-back");
        }
}

