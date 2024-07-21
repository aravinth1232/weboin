

let checkbox= document.getElementById("checkbox")
let label = document.querySelector("label")

let body = document.getElementById("body")

let h= document.getElementById("header")
// let a1 = document.getElementById("a1")

let f = document.getElementById("footer")
let article = document.getElementById("article")

function dark(){

    
    if(checkbox.checked){
        body.style.backgroundColor =" #000000"
        label.classList.add("blackbg")
        // label.style.color = "aliceblue";
        label.innerHTML ="Lightmode ?"
        h.style.backgroundColor =" #000000"
        f.style.backgroundColor =" #000000"
        article.style.backgroundColor =" #1a1111"
       
        
    }

    else{
        body.style.backgroundColor = "#ffffff"
        body.style.backgroundColor = "#ffffff"
        label.classList.remove("blackbg")
        label.classList.add("whitebg")
        label.innerHTML ="Darkmode ?"
        h.style.backgroundColor=" rgb(223, 197, 197)";
        f.style.backgroundColor=" rgb(223, 197, 197)";
        article.style.backgroundColor =" #d32020"
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