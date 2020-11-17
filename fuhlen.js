window.onload = () => {
     var index = 1;
     Next = function() {
          var imgs = ["g900s.jpg", "phone.jpg"];
          document.getElementById('img').src = imgs[index];
          index++;
          if (index == 2) {
               index = 0;
          }
     }

     Back = function() {
          var imgs = ["g900s.jpg", "phone.jpg"];
          document.getElementById('img').src = imgs[index];
          index++;
          if (index == 2) {
               index = 0;
          }
     }
     setInterval(Next, 3000);

     showMenu();

     window.onscroll = showMenu;

     function showMenu() {
          var menu = document.getElementById('menu');
          if (document.documentElement.scrollTop > 127)
               menu.classList.add('nav_menu');
          else
               menu.classList.remove('nav_menu');
          console.log("scroll: " + document.documentElement.scrollTop);
     }
}