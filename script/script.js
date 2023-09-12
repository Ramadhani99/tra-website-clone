// Get references to the link and the element to toggle
const toggleLink = document.getElementById("toogle-navigation");
const elementToToggle = document.getElementById("navigation-link");

// Add a click event listener to the link
toggleLink.addEventListener("click", function (event) {
  // Prevent the default link behavior (e.g., navigating to a new page)
  event.preventDefault();

  // Toggle the visibility of the element
  if (
    elementToToggle.style.display === "none" ||
    elementToToggle.style.display === ""
  ) {
    elementToToggle.style.display = "block";
  } else {
    elementToToggle.style.display = "none";
  }
});
