const BASE_URL = '/api/trips';

function getTrips() {
    return fetch(BASE_URL, {
        headers: new Headers({
            'Content-type': 'application/json',
        })
    })
    .then(trips => trips.json());
}

export default {
    getTrips
}