
    document.addEventListener('DOMContentLoaded', () => {
        // Get the navbar element
        const navbar = document.getElementById('nav');
      
        // Get all of the elements inside the navbar that are list items
        const navbarLinks = navbar.querySelectorAll('li');
      
        // Loop through each link element and add an event listener for when it is hovered over
        navbarLinks.forEach(link => {
          link.addEventListener('mouseover', () => {
            // When the link is hovered over, add the 'font-bold' class to make the text bold
            link.classList.add('font-bold');
            // Also add the 'border-b-2' class to create a 2-pixel border at the bottom of the link
            link.classList.add('border-b-2', 'border-black');
          });
      
          // Add an event listener for when the mouse leaves the link
          link.addEventListener('mouseout', () => {
            // When the mouse leaves the link, remove the 'font-bold' and 'border-b-2' classes
            link.classList.remove('font-bold', 'border-b-2', 'border-black');
          });
        });
      });
      