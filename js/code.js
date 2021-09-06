//header efect scroll
window.addEventListener("scroll", ()=>{
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


//efecto scroll sesion2
let animadoimg = document.querySelectorAll(".animarimg");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animadoimg.length; i++){

        let alturaAnimadoimg = animadoimg[i].offsetTop;
        if(alturaAnimadoimg - 500 < scrollTop){
            animadoimg[i].style.left = 0;
            animadoimg[i].style.opacity = 1;
        }
    }
}
window.addEventListener("scroll", mostrarScroll);


//efecto scroll sesion2 content
let animadocontent = document.querySelectorAll(".animado");
function mostrarScrollcontent(){
    let scrollTopcont = document.documentElement.scrollTop;
    for (var i=0; i < animadocontent.length; i++){

        let alturaAnimadocontent = animadocontent[i].offsetTop;
        if(alturaAnimadocontent - 500 < scrollTopcont){
            animadocontent[i].style.right = 0;
            animadocontent[i].style.opacity = 1;
        }
    }
}
window.addEventListener("scroll", mostrarScrollcontent);



//efecto scroll sesion3 content
let animarcaja = document.querySelectorAll(".animarcaja");
function mostrarScrollcajat(){
    let scrollTopcaja = document.documentElement.scrollTop;
    for (var i=0; i < animarcaja.length; i++){

        let alturaAnimarcaja = animarcaja[i].offsetTop;
        if(alturaAnimarcaja - 500 < scrollTopcaja){
            animarcaja[i].style.left = 0;
            animarcaja[i].style.opacity = 1;
        }
    }
}
window.addEventListener("scroll", mostrarScrollcajat);
