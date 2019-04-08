let show_hide = document.querySelectorAll("#show_hide");
let sub_dropdown = document.querySelectorAll("#sub-dropdown");
let sign = document.querySelectorAll("#sign");


show_hide[0].addEventListener("click",()=>{
    if(sub_dropdown[0].style.display== "block"){
        sub_dropdown[0].style.display = "none";
        sign[0].innerHTML="+";
        show_hide[0].style.backgroundColor = "#FFFFFF";
    }else{
        sub_dropdown[0].style.display = "block";
        sign[0].innerHTML="-";
        show_hide[0].style.backgroundColor = "#ebebe3";
    }
})

show_hide[1].addEventListener("click",()=>{
    if(sub_dropdown[1].style.display== "block"){
        sub_dropdown[1].style.display = "none";
        sign[1].innerHTML="+";
        show_hide[1].style.backgroundColor = "#FFFFFF";
        
    }else{
        sub_dropdown[1].style.display = "block";
        sign[1].innerHTML="-";
        show_hide[1].style.backgroundColor = "#ebebe3";
    }
})
