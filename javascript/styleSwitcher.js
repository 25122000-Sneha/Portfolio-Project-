//Theme changer
const links = document.querySelectorAll(".alternate-style");
numberOfLinks = links.length;


function setActiveStyle(color){
    for(let i=0; i<numberOfLinks; i++)
    {
        if (color === links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");
        }
        else{
            links[i].setAttribute("disabled","true");
        }
    }
    
}

//Body skin changer
const bodySkin = document.querySelectorAll(".mode");
totalBodySkin = bodySkin.length;
for(let i=0; i<totalBodySkin; i++){
    bodySkin[i].addEventListener("change",function(){
        if(this.value === "dark"){
            document.body.className ="dark";
        }
        else{
            document.body.className = "";
        }
    })
}


//Toggle style-switcher
document.querySelector(".toggle-style-switcher").addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
  })