const navMenuOpen = document.getElementById("navMenuOpen"),
      menuClose = document.getElementById("menuClose"),
      mobileMenu = document.getElementById("mobileMenu");



      navMenuOpen.addEventListener("click", function() {
        mobileMenu.style.display = "inline";
      })


      menuClose.addEventListener("click", function() {
        mobileMenu.style.display = "none";
      })