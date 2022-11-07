//credits to sarah

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


window.onscroll = function() {
  var theta = document.documentElement.scrollTop / 50 % Math.PI;

document.getElementById('flower').style.transform ='rotate(' + theta + 'rad)';
}

/*
document.getElementById("flowers").addEventListener("click", myFunction);

function myFunction() {
  document.body.style.cursor = cursor:url('http://upload.wikimedia.org/wikipedia/commons/d/de/POL_apple.jpg');
}
*/


