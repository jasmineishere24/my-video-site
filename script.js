// Select all collapsible buttons
const coll = document.getElementsByClassName("collapsible");

// Loop through each button
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // Toggle active class
    this.classList.toggle("active");

    // Show or hide the content
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
