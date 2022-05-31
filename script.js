document.querySelector('.hamburger').addEventListener('click' , function (){
    document.querySelector('.list').classList.toggle ('slide');
    document.querySelector('#menu').classList.toggle ('turn');
});
gsap.from(".hamburger", {duration:1  , rotate: 360 , opacity:0 , delay:1});
gsap.from(".ayo", {duration:1.5 ,ease: "bounce" ,rotate:180, x:-50 , y:-300 ,delay:1});
gsap.from(".infinity", {duration:1 ,repeat:-1 ,repeatDelay:2 ,ease: "bounce" ,rotate:45, y:-30 ,x:-100,delay:0});

function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 30;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = -30;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
      duration: 1.3, 
      x: 0,
      y: 0, 
      delay:1,
      autoAlpha: 1, 
      ease: "expo", 
      overwrite: "auto"
    });
  }
  
  function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  });