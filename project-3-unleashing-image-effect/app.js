let cursor=document.querySelector("#cursor");
let container=document.querySelector(".container");
 
 let main=document.querySelector(".main");
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:"back.out",
        
        
    });
})
container.addEventListener("mouseenter",function(){
    cursor.innerHTML="view<br>more";
    cursor.style.backgroundColor="black";
    gsap.to(cursor,{
        scale:2,
    });


})
container.addEventListener("mouseleave",function(){
    cursor.innerHTML="";
    cursor.style.backgroundColor="white";
    gsap.to(cursor,{
        scale:1,
    })
});


function breaktext(){
    var h1=document.querySelector("h1");
    let h1text=h1.textContent;
    var splittext=h1text.split("");
    var cluteer="";
    
    splittext.forEach(function(elem){
    cluteer+=`<span>${elem}</span>`;
    
    })
    h1.innerHTML=cluteer;
    }
    breaktext();
    gsap.from("h1 span",{
        y:50,
        opacity:0,
        duration:0.8,
        delay:0.3,
        stagger:0.15,
        // stagger:-0.15,
    })
