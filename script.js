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
  }      // Wait for the DOM content to be fully loaded
      document.addEventListener("DOMContentLoaded", function() {
        const d = new Date();
        document.getElementById("date").innerHTML = d.toDateString();
    });

    /* count down */

    document.addEventListener("DOMContentLoaded", function() {
      // Calculate years of experience from 2022 to current year
      var startYear = 2022;
      var currentYear = new Date().getFullYear();
      var yearsOfExperience = currentYear - startYear;

      // Update the content in the span with id "experienceYears"
      document.getElementById('experienceYears').textContent = yearsOfExperience + " years";
  });

// Optional: Simulate delay before typing starts
setTimeout(function() {
  var title = "Software Developer";
  var description = "Passionate Full-Stack Developer and Mobile App Developer";
  
  // Typing animation for the title
  typeWriter(document.querySelector('.typewriter h1'), title, 0, function() {
    // Typing animation for the description after title is complete
    typeWriter(document.querySelector('.typewriter p'), description, 0, function() {
      // Optional: Center align after typing is complete
      document.querySelector('.typewriter').style.textAlign = 'center';
    });
  });
}, 500);

// Function to simulate typing animation
function typeWriter(element, text, index, callback) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(function() { typeWriter(element, text, index, callback); }, 50); // Adjust typing speed here
  } else {
    if (typeof callback === 'function') callback();
  }
}

// Optional: Smooth scroll to element if it exists
document.querySelector('.typewriter').scrollIntoView({ behavior: 'smooth' });

