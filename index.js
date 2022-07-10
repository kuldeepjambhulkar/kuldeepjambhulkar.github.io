
// Issue-31: Automate current employment duration #31
const currentEmploymentDurationElement =  document.querySelector('#current-employment');
const currentEmploymentStartDate = new Date(2022, 04);
const today = new Date();
const currentEmploymentDuration = Math.abs( today - currentEmploymentStartDate );
const currentEmploymentDurationInMonths = Math.floor(currentEmploymentDuration / 2629746000);
currentEmploymentDurationElement.textContent = `${currentEmploymentStartDate.toLocaleString('default', { month: 'long' })}, ${currentEmploymentStartDate.getFullYear()} - Present (${currentEmploymentDurationInMonths + 1} Mos)`
// Issue-31: End
