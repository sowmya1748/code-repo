console.log("Website Loaded Successfully!");

// Simple button interaction
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Button Clicked!");
  });
});
