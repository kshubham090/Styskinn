var crsr = document.querySelector("#cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove" ,function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top  = dets.y+"px"
}) 



function init(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}

init();

var nt = gsap.timeline({
    scrollTrigger:{
        trigger: "#page1 h1" ,
        scroller: ".main",
        start:"top -5%",
        end : "top -40%" , 
        scrub :3
    }
})
nt.to("#page1 h1" , {
    x:-180,
} , "okish")

nt.to("#page1 h2" , {
    x: 500,
} , "okish")

nt.to("#page1 video" , {
    width: "90%",
} , "okish")

var nt2 = gsap.timeline({
  scrollTrigger:{
      trigger: "#page1 h1" ,
      scroller: ".main",
      start:"top -90%",
      end : "top -120" , 
      scrub :2
  }
})

nt2.to(".main", {
  backgroundColor:"white" ,
})

var nt3 = gsap.timeline({
  scrollTrigger:{
      trigger: "#page1 h1" ,
      scroller: ".main",
      start:"top -400%",
      end : "top -410" , 
      scrub :2
  }
})

nt3.to(".main" , {
  backgroundColor : "#151515"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
      elem.addEventListener("mouseenter" , function(){
        elem.style.backgroundColor = "#f92222d2" 
        var att = elem.getAttribute("data-image")
        crsr.style.width = "250px"
        crsr.style.height = "250px"
        crsr.style.borderRadius = "5%"
        crsr.style.backgroundImage = `url(${att})`
        
      })
      elem.addEventListener("mouseleave" , function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
         
        
      })
})