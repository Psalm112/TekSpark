window.addEventListener('load', ()=>{
    const preload = document.querySelector('.preloaderbg');
    preload.classList.add('preload-finish');
});

let indexNum = 0;
      let popup = document.getElementById("popUp");
      let y = document.getElementById("btnSpan");
      let z = document.getElementById("btn");
      slide();
      navSlide();
      function slide() {
          var i;
          var x = document.getElementsByClassName("slides");
          for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
          }
          indexNum++;
          if (indexNum > x.length) {indexNum = 1}
          x[indexNum - 1].style.display = "block";
          setTimeout(slide, 4000);
      }
      window.onclick = function(event) {
          if(event.target == popup){
              popup.style.display = "none"
          }
      }
      function btnSpan() {
          if (z.onmouseover == true){
              y.style.borderStyle = "white";
          }
      }
      function navSlide(){
          const burger = document.querySelector('.burger');

          const nav = document.querySelector('.navUl');

          const navLinks = document.querySelectorAll('.navUl li');

          burger.addEventListener('click', ()=>{
              nav.classList.toggle('nav-active');

              burger.classList.toggle('exit');

              navLinks.forEach((link, index) => {
              if(link.style.animation){
                  link.style.animation = '';
              }else{
                  link.style.animation = "navlink 0.5s ease fowards ${index / 7 +2}s"
              }
          });
     });
    }