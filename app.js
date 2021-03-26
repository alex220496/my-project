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
