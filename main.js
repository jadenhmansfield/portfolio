//preloader

var jaden=document.getElementById("jadenlogo");
var loader=document.getElementById("preloader");
    window.addEventListener("load", function(){
      setTimeout(() => {
        loader.style.display= "none";
        jaden.style.display="inline";
      }, 10000);
    })

    

//flower rotate on scroll

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById('flower');
  image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}

//text animation preloader
//credits to marjorie

const text = document.querySelector(".text-anim");
const strText = text.textContent;
const textArr = strText.split("");

text.textContent = "";

for (let i = 0; i < textArr.length; i++){
    text.innerHTML += "<span>" + textArr[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 500);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === textArr.length){
        animComplete();
        return;
    }
}

function animComplete(){
    clearInterval(timer);
    timer = null;
}

var animation=bodymovin.loadAnimation({
  container: document.getElementById('anim'),
  renderer: 'svg',
  loop:true,
  autoplay:true,
  path:'data.json'
})




