module.exports = {
    sortByActive,
    sortByDateAscending,
    sortByDateDescending,
    parseCoordinates
}

function parseCoordinates(location) {
    const coordinates = location.split(',').map(coord => parseFloat(coord));
    return {
        lat: coordinates[0],
        lng: coordinates[1]
    };
};

function sortByDateAscending(tripOne, tripTwo) {
    return tripOne.startDate - tripTwo.startDate;
};

function sortByDateDescending(tripOne, tripTwo) {
    return tripTwo.startDate - tripOne.startDate;
};

function sortByActive(tripOne, tripTwo) {
    if (tripOne.active && !tripTwo.active) return -1;
    if (!tripOne.active && tripTwo.active) return 1;
    if (!tripOne.active && !tripTwo.active 
        || tripOne.active && tripTwo.active) return 0;
};