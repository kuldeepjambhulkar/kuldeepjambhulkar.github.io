
// Issue-31: Automate current employment duration #31
const currentEmploymentDurationElement = document.querySelector('#current-employment');
const currentEmploymentStartDate = new Date(2022, 4); // Month is 0-based, so 4 represents May
const today = new Date();

// Calculate the difference in months
let yearsDifference = today.getFullYear() - currentEmploymentStartDate.getFullYear();
let monthsDifference = today.getMonth() - currentEmploymentStartDate.getMonth();

// Adjust yearsDifference if necessary
if (monthsDifference < 0) {
    yearsDifference--;
    monthsDifference += 12;
}

// Total months
const totalMonths = yearsDifference * 12 + monthsDifference;

// Format duration
const years = Math.floor(totalMonths / 12);
const months = totalMonths % 12;

currentEmploymentDurationElement.textContent = `${currentEmploymentStartDate.toLocaleString('default', { month: 'long' })}, ${currentEmploymentStartDate.getFullYear()} - Present (${years} yrs ${months} mos)`;

// Issue-31: End
