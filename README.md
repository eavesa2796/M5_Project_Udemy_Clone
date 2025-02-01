
# Udemy Clone

This project is a simplified recreation of the Udemy platform, where users can browse courses, sign up, and interact with the website through a responsive layout built with Bootstrap. The project also explores using interactive features with JavaScript.

## Project Overview

The goal of this project is to practice the use of **Bootstrap** for building responsive and structured websites, and to improve **JavaScript** skills by implementing functionalities for a website.

### **Part 1: Bootstrap Website**

#### Navigation Bar
- Created a responsive navigation bar with at least 3 links (e.g., Categories, Plans, My Courses, View Cart, Login, and Sign Up).
- Ensured the navbar adjusts properly on different screen sizes using Bootstrap’s built-in responsiveness.

#### Home Page
- Designed the homepage to match the feel of the Udemy website, with headings, images, and a hero section.
- Added sections that provide users with key information and an introduction to the platform.

#### Form Section
- Included a signup form for user input with two different input types: text, email, and number.
- The form could be expanded in the future to allow users to register for courses, sign up for newsletters, etc.

#### Table
- Displayed relevant information in a table (e.g., list of plans available, plan features).
- This could later be expanded to show pricing, course schedules, or other key metrics.

#### Bootstrap Components
- Used three Bootstrap components to enhance the site’s design:
  - **Cards**: Used to display different course categories.
  - **Carousel**: Rotated images showcasing different reasons to sign up.
  - **Accordion**: For FAQs section to make the page more interactive.

### **Part 2: JavaScript Functions**

#### JavaScript Functions
Added interactive features that could enhance the homepage. These functions are integrated into the website:

- **showPopover**: This function initializes Bootstrap popovers, which are small content boxes that appear when a user clicks or hovers over an element. This feature enhances the user interface by providing additional information or options.
- **initializeNavButtons**: This function adds interactivity to navigation buttons. When a user clicks on a button, it highlights the active button by adding a bottom border, making the navigation experience more intuitive and visually appealing.
- **updateSkillsHeading**: This function changes the text content of the skills section based on the button clicked. It updates the section heading to match the label of the selected button, allowing users to see information relevant to their choice.
- **updateLearningImage**: This function updates the image displayed in the “Focused Learning” section depending on the selected learning option. When a user clicks on one of the learning categories (e.g., “Hands-on training,” “Certification prep”), the corresponding image is displayed to visually represent the content.
- **checkTerms**: This function automatically checks the "Terms and Conditions" checkbox when the user clicks the "Agree" button, streamlining the sign-up or agreement process by ensuring the user agrees to the terms without needing to manually check the box.
- **showConfetti**: When the user clicks the sign-up button, this function triggers a confetti animation to celebrate the action. It adds a fun and interactive visual effect to the signup process, improving the user experience.
- **darkMode**: This function allows users to toggle between light and dark modes on the website. It changes the theme of the page by switching CSS attributes and updates the theme text and icon, enhancing accessibility and user preferences.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, Bootstrap

## Future Improvements

- Integrate payment gateway for course purchase functionality.
- Implement a video player for viewing course content.
- Add user reviews and ratings for courses.
- Develop admin features to manage courses and users.
