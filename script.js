var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove" ,function(dets){
    crsr.style.left = dets.x-150+"px"
    crsr.style.top  = dets.y-150+"px"
}) 

gsap.to("#nav" ,{
    backgroundColor : "#000",
    duration : 1,
    height : "110px" ,
    scrollTrigger : {
        trigger:"#nav",
        scroller : "body" , 
        // markers : true,
        start: "top -20%" , 
        end : "top -21%",
        scrub :4,
    }

})

gsap.to( "#main" , {
    backgroundColor : "#000" ,
    scrollTrigger : {
        trigger : "#main" ,
        scroller : "body" , 
        start : "top -10%",
        end: "top -50%",
        scrub : 2,
    }
})