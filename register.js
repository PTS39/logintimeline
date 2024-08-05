document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var fullname = document.getElementById('fullname').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var userId = document.getElementById('userId').value;
    var lineProfilePic = document.getElementById('lineProfilePic').value;

    var data = {
        fullname: fullname,
        username: username,
        email: email,
        password: password,
        userId: userId,
        lineProfilePic: lineProfilePic,
        action: 'register'
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
        alert('Registration successful!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Registration failed!');
    });
});
