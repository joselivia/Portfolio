function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menu-icon").style.display = "none"; // Hide menu icon
    document.body.style.overflow = "auto";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("menu-icon").style.display = "block"; // Show menu icon
    document.body.style.overflow = "auto";
  }

      // Wait for the DOM content to be fully loaded
      document.addEventListener("DOMContentLoaded", function() {
        const d = new Date();
        document.getElementById("date").innerHTML = d.toDateString();
    });