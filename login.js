document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var data = {
        username: username,
        password: password,
        action: 'login'
    };

    fetch('https://script.google.com/macros/s/AKfycbxeyse6V_QRFeC_c_Zg50QlmLjMKeL8HwWkjssqWScEEPXmr4gkitocv9Z7Xr_j-_iFuA/exec', {
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
