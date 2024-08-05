// ฟังก์ชั่นการล็อกอิน
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            // ล็อกอินสำเร็จ
            window.location.href = 'profile.html'; // เปลี่ยนเส้นทางไปยังหน้าที่คุณต้องการ
        })
        .catch((error) => {
            // เกิดข้อผิดพลาด
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Error: ' + errorMessage);
        });
});
