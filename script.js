window.addEventListener('DOMContentLoaded', function(){
document.querySelector('#hero').addEventListener('mousemove',function(det){
    gsap.to('#play-reel',{
        x:det.clientX,
        y:det.clientY,
        duration:1,
        ease: Power2,
    })
})
document.querySelector('#hero').addEventListener('mouseleave',function(det){
    gsap.to('#play-reel',{
        x:det.clientX,
        y:det.clientY,
        opacity:0,
        duration:.5,
    })
})
document.querySelector('#hero').addEventListener('mouseenter',function(det){
    gsap.to('#play-reel',{
        x:det.clientX,
        y:det.clientY,
        duration:.5,
        ease: Power2,
        opacity:1,
    })
})
gsap.to('#dot',{
    rotate:216,
    ease:'power4 out',
    duration:5,
    scrollTrigger:{
        trigger: '#dot',
        start:'top 20%',
        end:'top 110%',
        scrub:6,
      }
})
gsap.to('#crc',{
    attr:{'stroke-dashoffset':'16','stroke-dasharray':'123.2'}, 
    ease:'power4 out',
    scrollTrigger:{
        trigger: '#dot',
        start:'top 20%',
        end:'top 110%',
        scrub:6,
      }
})
gsap.from('#ani-cont h2 span h2',{
y:'-26vw',
    ease:'power4 out',
    scrollTrigger:{
        trigger: '#dot',
        start:'top 20%',
        end:'top 110%',
        scrub:6,
      }
})





})


gsap.from('#p2-top div h3',{
    y:50,
    scrollTrigger:{
        trigger: '#page2',
        start:'top 60%',
        end:'top 110%',
        scrub:3,
      }
})
gsap.from('#page2 div h2',{
    y:50,
    ease:'power3 in',
    scrollTrigger:{
        trigger: '#page2',
        start:'top 60%',
        end:'top 110%',
        scrub:3,
      }
})