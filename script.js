document.addEventListener('DOMContentLoaded', function () {
    const pageTitle = document.getElementById('pageTitle');
    const actionButton = document.getElementById('actionButton');
    const mapElement = document.getElementById('map');

    const page = window.location.pathname.split('/').pop().replace('.html', '');
    const action = page === 'advicetimein' ? 'Time In' : 'Time Out';

    pageTitle.innerText = action;
    actionButton.innerText = action;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Geolocation is not supported by this browser!'
        });
    }

    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const mapUrl = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;

        mapElement.innerHTML = `<iframe src="${mapUrl}" width="100%" height="100%" style="border:0;"></iframe>`;

        actionButton.addEventListener('click', function () {
            saveData(lat, lon, action);
        });
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                Swal.fire('Permission Denied', 'User denied the request for Geolocation.', 'error');
                break;
            case error.POSITION_UNAVAILABLE:
                Swal.fire('Position Unavailable', 'Location information is unavailable.', 'error');
                break;
            case error.TIMEOUT:
                Swal.fire('Timeout', 'The request to get user location timed out.', 'error');
                break;
            case error.UNKNOWN_ERROR:
                Swal.fire('Unknown Error', 'An unknown error occurred.', 'error');
                break;
        }
    }

    function saveData(latitude, longitude, action) {
        const data = {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            userId: 'exampleUserId',  // Replace with actual userId logic
            username: 'exampleUsername',  // Replace with actual username logic
            latitude: latitude,
            longitude: longitude,
            action: action
        };

        fetch('https://script.google.com/macros/s/AKfycbwugLvTgbXJrUKdSebnDugdH0V8Omgw-_hwnMWUM_jBs-p4cDMNq1H7ypzT419O8i4/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            Swal.fire('Success', 'Data saved successfully', 'success');
        })
        .catch(error => {
            Swal.fire('Error', 'Error saving data: ' + error, 'error');
        });
    }
});
