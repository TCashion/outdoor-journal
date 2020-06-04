// geolocation functions for new and edit forms 
const locationForm = document.getElementById('trip-details-form');
const currentRadio = document.getElementById('current-radio');
const customRadio = document.getElementById('custom-radio');
const skipRadio = document.getElementById('skip-radio');
const locationDivEl = document.getElementById('location-input');
const locationInput = document.getElementById('trip-location');
const deleteLink = document.getElementById('delete-link');
const deleteVerification = document.getElementById('delete-verification');
const noEndDateEl = document.getElementById("end-date-checkbox");
const endDateInputEl = document.getElementById("trip-end-date");
const tripLat = document.getElementById('lat-coords').innerText;
const tripLong = document.getElementById('long-coords').innerText;
let currentLat;
let currentLong;
navigator.geolocation.getCurrentPosition(function(location) {
    currentLat = location.coords.latitude;
    currentLong = location.coords.longitude;
    if(currentRadio.checked) {
        locationInput.setAttribute('value', `${currentLat}, ${currentLong}`);
    };
});

locationForm.addEventListener('click', function(e) {
    if (currentRadio.checked || skipRadio.checked) {
        locationDivEl.setAttribute('style', 'display: none');
        if(currentRadio.checked) {
            locationInput.setAttribute('value', `${currentLat}, ${currentLong}`);
        };
    } else if(customRadio.checked) {
        locationInput.setAttribute('value', `${tripLat}, ${tripLong}`);
        locationDivEl.setAttribute('style', 'display: block');
    };
    if (noEndDateEl.checked) {
        endDateInputEl.value = null; 
        endDateInputEl.setAttribute('style', 'display:none'); 
    } else if (!noEndDateEl.checked) {
        endDateInputEl.setAttribute('style', 'display:block'); 
    };
});

// specific to edit form
deleteLink.addEventListener('click', function(e) {
    e.preventDefault()
    deleteVerification.setAttribute('style', 'display: block');
});