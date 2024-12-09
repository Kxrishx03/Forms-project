# React Auth App

This project is a modern React application designed for user authentication. It features sign-up and login forms, password strength indicators, and toast notifications using React Toastify. This app was built using Vite for fast development and includes responsive design for a great user experience across devices.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast, next-generation frontend build tool.
- **Formik**: A library for handling form state and validation in React.
- **Yup**: A JavaScript schema builder for value parsing, validation, and sanitation.
- **React Toastify**: A toast notifications library for React applications.
- **CSS Modules**: For modular, scoped CSS styling.

## Setup

To run this application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Kxrishx03/Forms-project.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd Forms-project
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
5. **Access the Application on browser**

# Design Choices

## Frontend Framework
- **React** was chosen for its component-based architecture and strong ecosystem.
- **Vite** was selected for faster builds and an optimized development experience.

## Form Handling
- **Formik** was used for handling form state and validations due to its simplicity and robust API.
- **Yup** was integrated for declarative validation schemas, ensuring consistent validation rules.

## Password Strength Indicator
- Designed to give users immediate feedback about password quality.
- Strength checks include:
  - Length
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters

## Notifications
- **React Toastify** was used for toast notifications due to its flexibility and ease of use.

## Routing
- **React Router** enables seamless navigation between sign-up and login pages.

## Styling
- CSS modules and a global CSS file provide a combination of scoped and shared styles for consistency.

---

# Assumptions 

## Assumptions
- Users are expected to provide valid email addresses during sign-up.
- Passwords must meet the strength criteria:
  - Minimum of 8 characters
  - Includes uppercase, lowercase, numeric, and special characters.
- The "Remember Me" feature only remembers the email, not the password, for security reasons.



   
