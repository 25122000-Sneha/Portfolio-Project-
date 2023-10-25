window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})



//Aside Navbar
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNav = navList.length;

const allSections = document.querySelectorAll(".section");
const totalSections = allSections.length;


for(let i=0; i<totalNav; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        //remove back-section class
        for(let i=0; i<totalSections; i++){
            allSections[i].classList.remove("back-section");
        }

        for(let j=0;  j<totalNav; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                //add back-section class
                 allSections[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element){
    for(let i=0; i<totalSections; i++){
        allSections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", function(){
    asideSectionTogglerBtn();

})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSections; i++){
        allSections[i].classList.toggle("open");
    }
}