//Script to Show Popover
function showPopover() {
  let popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  let popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
}
showPopover();

/*
 * This function will add the active class to the
 * button container that is clicked adding a bottom border
 */
function initializeNavButtons() {
  // Get all nav button containers
  const skillButtonContainers = document.querySelectorAll(
    ".nav-button-container"
  );

  // Iterate through each container
  skillButtonContainers.forEach((container) => {
    // Find the button within the current container
    const button = container.querySelector(".nav-button");

    // Add a click event listener to the button
    if (button) {
      button.addEventListener("click", () => {
        // Remove the active class from all containers
        skillButtonContainers.forEach((item) =>
          item.classList.remove("nav-button-container-active")
        );

        // Add the active class to the clicked container
        container.classList.add("nav-button-container-active");
      });
    }
  });
}

initializeNavButtons();

/*
 *This function will change the text content of the
 *skills section to match the button value
 */
function updateSkillsHeading() {
  //Store the heading element in a variable
  let skillsHeading = document.getElementById("skillsHeading");
  //Get all of the button labels
  const buttonValue = document.querySelectorAll(".button-label");
  //Iterate through the buttons
  buttonValue.forEach((button) => {
    //Add a click event listener on each button
    button.addEventListener("click", () => {
      //Update the heading text
      skillsHeading.textContent = button.innerHTML;
    });
  });
}
updateSkillsHeading();

// Focused Learning section function
function updateLearningImage() {
  // Get all the focused learning divs
  const focusedLearningDivs = document.querySelectorAll(".focused-learning");

  focusedLearningDivs.forEach((div) => {
    div.addEventListener("click", () => {
      // Get the heading inside the clicked div
      const heading = div.querySelector(".focused-learning-heading");

      if (!heading) return; // Prevent errors if no heading is found

      // Get only the main heading text, ignoring <span>
      const headingText = heading.childNodes[0].textContent.trim();

      // Update image based on heading text
      const imageElement = document.getElementById("focusedLearningImage");
      if (!imageElement) return; // Prevent errors if image element is not found

      switch (headingText) {
        case "Hands-on training":
          imageElement.src = "images/hands-on-training.webp";
          break;
        case "Certification prep":
          imageElement.src = "images/certification-prep.webp";
          break;
        case "Insights and analytics":
          imageElement.src = "images/insights-and-analytics.webp";
          break;
        case "Customizable content":
          imageElement.src = "images/customizable-content.webp";
          break;
        default:
          console.warn("No matching case for:", headingText);
      }
    });
  });
}

updateLearningImage();

//Check the terms checkbox when agree button is clicked
function checkTerms() {
  const agreeButton = document.getElementById("agreeBtn");

  //Add a click event listener on the agree button
  agreeButton.addEventListener("click", () => {
    const check = document.getElementById("checkbox");
    check.checked = "true";
  });
}
checkTerms();

//Function to show confetti when a visitor signs up
function showConfetti() {
  document.getElementById("signUpBtn").addEventListener("click", (event) => {
    event.preventDefault(); //Prevent the default behavior
    //set the confetti values
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  });
}
showConfetti();

//Function to toggle between light mode and dark mode
function darkMode() {
  //Get the themeToggle element
  const themeToggle = document.getElementById("themeToggle");
  //Get the theme bg text
  const themeText = document.getElementById("themeText");
  //Get the theme icon elements
  const themeIconMoon = document.getElementById("themeIconMoon");
  const themeIconSun = document.getElementById("themeIconSun");
  //Get the html element
  const htmlElement = document.documentElement;

  themeToggle.addEventListener("click", () => {
    //Get the current theme
    const currentTheme = htmlElement.getAttribute("data-bs-theme"); //light
    //Toggle the theme
    const newTheme = currentTheme === "light" ? "dark" : "light";
    htmlElement.setAttribute("data-bs-theme", newTheme); //new theme will be light or dark

    //Toggle the text
    themeText.textContent = newTheme === "dark" ? "Light Mode" : "Dark Mode";

    //Toggle the icons
    themeIconMoon.classList.toggle("d-inline");
    themeIconSun.classList.toggle("d-none");
  });
}
darkMode();
