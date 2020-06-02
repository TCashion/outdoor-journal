// geolocation functions for new and edit forms 
const locationForm = document.getElementById('add-location-form');
const currentRadio = document.getElementById('current-radio');
const customRadio = document.getElementById('custom-radio');
const skipRadio = document.getElementById('skip-radio');
const locationDivEl = document.getElementById('location-input');
const locationInput = document.getElementById('trip-location');
const deleteLink = document.getElementById('delete-link');
const deleteVerification = document.getElementById('delete-verification');
const noEndDateEl = document.getElementById("end-date-checkbox");
const endDateInputEl = document.getElementById("trip-end-date");
let currentLat;
let currentLong;
navigator.geolocation.getCurrentPosition(function(location) {
    currentLat = location.coords.latitude;
    currentLong = location.coords.longitude;
    locationInput.setAttribute('value', `${currentLat}, ${currentLong}`);
});

locationForm.addEventListener('click', function(e) {
    if (currentRadio.checked || skipRadio.checked) {
        locationDivEl.setAttribute('style', 'display: none');
        locationInput.setAttribute('value', `${currentLat}, ${currentLong}`);
    } else {
        locationDivEl.setAttribute('style', 'display: block');
        locationInput.setAttribute('value', '');
        locationInput.setAttribute('placeholder', 'lat, long');
    };
    if (noEndDateEl.checked) {
        endDateInputEl.value = null; 
        endDateInputEl.setAttribute('style', 'display:none'); 
        console.log('checked')
    } else if (!noEndDateEl.checked) {
        console.log('unchecked')
        endDateInputEl.setAttribute('style', 'display:block'); 
    };
});

// specific to edit form
deleteLink.addEventListener('click', function(e) {
    e.preventDefault()
    deleteVerification.setAttribute('style', 'display: block');
});