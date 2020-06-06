const currentRadio = document.getElementById('current-radio');
const customRadio = document.getElementById('custom-radio');
const skipRadio = document.getElementById('skip-radio');
const tripDetailsForm = document.getElementById('trip-details-form');
const locationFormContainerEl = document.getElementById('location-form-container')
const locationInput = document.getElementById('location-input');
let currentLat;
let currentLong;
navigator.geolocation.getCurrentPosition(function(location) {
    currentLat = location.coords.latitude;
    currentLong = location.coords.longitude;
    if(currentRadio.checked) {
        locationInput.setAttribute('value', `${currentLat}, ${currentLong}`);
    };
});

tripDetailsForm.addEventListener('click', function(e) {
    if (currentRadio.checked || skipRadio.checked) {
        locationFormContainerEl.setAttribute('style', 'display: none');
        if(currentRadio.checked) {
            locationInput.setAttribute('value', `${currentLat}, ${currentLong}`);
        };
        if(skipRadio.checked) {
            locationInput.setAttribute('value', null);
        };
    } else if(customRadio.checked) {
        locationInput.setAttribute('value', `${currentLong}, ${currentLong}`);
        locationFormContainerEl.setAttribute('style', 'display: block');
    };
});