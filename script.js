// script.js

// Select the elements
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const closeIcon = document.getElementById('close-icon');

// Function to open the sidebar
function openSidebar() {
    sidebar.style.width = '250px';
}

// Function to close the sidebar
function closeSidebar() {
    sidebar.style.width = '0';
}

// Event listeners
menuIcon.addEventListener('click', openSidebar);
closeIcon.addEventListener('click', closeSidebar);
