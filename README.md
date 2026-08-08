# Frontend Mentor - Mortgage Repayment Calculator Solution

This is a solution to the [Mortgage Repayment Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-6231025a2d4b3d2008320456). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- Calculate monthly and total repayments based on loan amount, mortgage term, interest rate, and mortgage type (Repayment or Interest Only).
- View clear validation errors if any required fields are missed or submitted empty.
- Dynamically toggle input visual highlights and error borders based on form validation state.
- Clear all inputs and reset the result state back to the initial empty state using the "Clear All" action.
- View an accessible, responsive design optimized for desktop and mobile screen sizes.

---

## My process

### Built with

- Semantic HTML5 markup
- CSS Custom Properties & CSS Modules
- Flexbox & CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

### What I learned

Building this project reinforced several foundational React concepts:

1. **Lifting State Up:** Passing calculation results from `CalculatorForm` up to the parent component and then down to `ResultsContainer`.
2. **Conditional Rendering & Dynamic Classes:** Displaying error badges and updating border colors conditionally based on state.
3. **Currency Formatting:** Formatting raw calculation outputs using `Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' })`.

---

## Author

- GitHub - [SibaGh](https://github.com)