

let checkbox= document.getElementById("checkbox")
let label = document.querySelector("label")

let body = document.getElementById("body")



function dark(){

    
    if(checkbox.checked){
        body.style.backgroundColor =" #000000"
        label.classList.add("blackbg")
        // label.style.color = "aliceblue";
        label.innerHTML ="Light mode ?"
    }

    else{
        body.style.backgroundColor = "#ffffff"
        body.style.backgroundColor = "#ffffff"
        label.classList.remove("blackbg")
        label.classList.add("whitebg")
        label.innerHTML ="Dark mode ?"
    
    }

}









function changeBg(){
    let navbar = document.getElementById("header")
    let scrollvalue = window.scrollY;
    console.log(scrollvalue)


    if(scrollvalue < 1)
    {
        navbar.classList.remove("bgcolor")
    
    }
    else{
        navbar.classList.add("bgcolor")
    }
   

}

window.addEventListener("scroll" ,changeBg);