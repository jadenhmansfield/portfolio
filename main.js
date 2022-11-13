//credits to sarah
//tracks cursor

var cursor = {
    _x: 0,
    _y: 0,
    $dot: document.querySelector('.cursor-dot'),
    
    func: function() {
      this.setupEventListeners();
    },
    
    setupEventListeners: function() {
      var self = this;
      document.addEventListener('mousemove', function(x) {
        //showing the cursor
        self.cursorVisible = true;
        if (self.cursorVisible) {
          self.$dot.style.opacity = 1;
        } else {
          self.$dot.style.opacity = 0;
        }
        //positioning cursor
        self.endX = x.pageX;
        self.endY = x.pageY;
        self.$dot.style.top = self.endY + 'px';
        self.$dot.style.left = self.endX +'px';
      });
    },
  }
  
  cursor.func();

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

//watering can on hover over flower image
/*
document.getElementById("flowers").addEventListener("click", myFunction);

function myFunction() {
  document.body.style.cursor = cursor:url('http://upload.wikimedia.org/wikipedia/commons/d/de/POL_apple.jpg');
}
*/


