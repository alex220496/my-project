// TABS
let tabItems =document.querySelectorAll(".tab-img");
 let tabItemWrap =document.querySelector(".tab-imgs");
 let tabContent = document.querySelectorAll(".tab-content");



 function hideContent() {
     tabContent.forEach(tab =>{
         tab.classList.add("hide");
         tab.classList.remove("show");
       
     })
     tabItems.forEach(item => item.classList.remove("red"))
 }

 function showContent(i = 0) {
     tabContent[i].classList.add("show")
     tabContent[i].classList.remove("hide")
     tabItems[i].classList.add("red");
 }



 hideContent();
 showContent();
 console.log(tabContent);

 tabItemWrap.addEventListener("click", function(e){
     let target = e.target;
     console.log(target);

     if (target.classList.contains("tab-img")){
         tabItems.forEach((item, i) =>{
             if(item === target) {
                hideContent();
                 showContent(i)
                
            }
         })
     }

 });

$('.block-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  // MODAl and Scroll
 let btnGetStarted = document.querySelectorAll(".btn-get-started");
 let modal = document.querySelector(".modal");
 let btnClose =document.querySelector(".closed-modal")
 console.log(btnClose);

 btnGetStarted.forEach(btn => {
    btn.addEventListener("click",openModal)
 });

btnClose.addEventListener("click",hideModal)

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function hideModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

modal.addEventListener("click",function(e) {
    if(e.target === modal) {
        hideModal()
    }
});

function showModalByScroll () {
    if (window.pageYOffset > document.body.scrollHeight/2){
        openModal ();
        window.removeEventListener("scroll", showModalByScroll)
    }
}
window.addEventListener("scroll", showModalByScroll);
//Scroll menu 
 let jsheader = document.querySelector(".jsheader");
 function backBlack() {
     jsheader.classList.add("backblack");
}

function removebackBlack() {
    jsheader.classList.remove("backblack");
   
}

 function bgBlackByScroll() {
     if (window.pageYOffset > document.body.scrollHeight/100){
         backBlack();
     } else 
        removebackBlack(); 
}
 window.addEventListener("scroll", bgBlackByScroll);
 // MOBILE MENU

 let navMenu = document.querySelector(".nav-mobile");
 let mainMenu = document.querySelector(".navigation")

 navMenu.addEventListener("click", function(){
     navMenu.classList.toggle("active-menu")
     if(navMenu.classList.contains("active-menu")) {
         mainMenu.classList.add("active-menu")
     } else {
         mainMenu.classList.remove("active-menu")
     }
 })