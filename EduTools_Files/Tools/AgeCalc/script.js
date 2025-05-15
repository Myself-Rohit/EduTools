// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const ageForm = document.getElementById('ageForm');
    const birthDateInput = document.getElementById('birthDate');
    const result = document.getElementById('result');

    ageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const birthDate = new Date(birthDateInput.value);
        const ageInfo = calculateAge(birthDate);
        result.innerHTML = `
            You are ${ageInfo.years} years old.<br>
            That's approximately ${ageInfo.months} months.<br>
            That's approximately ${ageInfo.weeks} weeks.<br>
            That's approximately ${ageInfo.days} days.
        `;
    });

    function calculateAge(birthDate) {
        const today = new Date();
        const diffInMilliseconds = today - birthDate;
        
        const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
        const oneWeek = oneDay * 7;
        const oneMonth = oneDay * 30.44; // average days in a month
        const oneYear = oneDay * 365.25; // average days in a year considering leap years

        const ageInDays = Math.floor(diffInMilliseconds / oneDay);
        const ageInWeeks = Math.floor(diffInMilliseconds / oneWeek);
        const ageInMonths = Math.floor(diffInMilliseconds / oneMonth);
        const ageInYears = Math.floor(diffInMilliseconds / oneYear);

        return {
            years: ageInYears,
            months: ageInMonths,
            weeks: ageInWeeks,
            days: ageInDays
        };
    }
});






