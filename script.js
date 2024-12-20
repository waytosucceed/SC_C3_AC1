document.addEventListener("DOMContentLoaded", function() {
    // Show the first section by default
    const firstButton = document.querySelector('.sidenav button');
    firstButton.classList.add('active-button');
    
    const firstSectionId = firstButton.getAttribute('onclick').match(/'([^']+)'/)[1];
    document.getElementById(firstSectionId).style.display = 'block';
});

function showContent(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.sidenav button');
    buttons.forEach(button => {
        button.classList.remove('active-button');
    });

    // Add active class to the clicked button
    const activeButton = event.currentTarget;
    activeButton.classList.add('active-button');
}
// Function to toggle the sidebar visibility
function toggleSidenav() {
    const sidenav = document.querySelector('.sidenav');
    sidenav.classList.toggle('active'); // Toggle the active class
}

// Function to close the sidebar when clicking outside of it
function closeSidenav(event) {
    const sidenav = document.querySelector('.sidenav');
    const toggleButton = document.querySelector('.toggle-sidenav');

    // Check if the click was outside the sidenav and the toggle button
    if (!sidenav.contains(event.target) && !toggleButton.contains(event.target)) {
        sidenav.classList.remove('active'); // Remove the active class
    }
}

// Event listener for clicks on the document
document.addEventListener('click', closeSidenav);
