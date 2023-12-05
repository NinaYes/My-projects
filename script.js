let text = "Developer. Designer. Enterpreneur.";
let i = 0;
let speed = 200;


function type() {
    if(i < text.length){
        document.querySelector('#par').textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();

gsap.from(".project", {opacity:0, duration: 2, delay: 1, stagger: .6})
gsap.to(".image", {y: 20, ease: "slow", duration: 1})

const bio = document.querySelector(".text");
const btn = document.querySelector(".btn")
btn.addEventListener('click', function myBio(){
    gsap.from(".text", {opacity:0, duration: 2, delay: 1, stagger: .6})
    gsap.from(".three", {x: 50, ease: "slow", duration: 1})
    let move = 40;
gsap.to(".box", {ease: "bounce", duration: 2, stagger: .3, delay: 1.5, y: function(i){
    if(i%2 === 1){
        return move
    }
    else {
        return -move
    }
}})
})
myBio();

