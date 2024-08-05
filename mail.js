const firebaseConfig = {
    apiKey: "AIzaSyD3zU3vffz1W8YBbtCHbgLUrd8fYRlBFXU",
    authDomain: "addtime-453e4.firebaseapp.com",
    databaseURL: "https://addtime-453e4-default-rtdb.firebaseio.com",
    projectId: "addtime-453e4",
    storageBucket: "addtime-453e4.appspot.com",
    messagingSenderId: "790574221214",
    appId: "1:790574221214:web:f6cfa78f1cd46cfad1f88f",
    measurementId: "G-1EPHN50YG0"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("signupForm");
  
  document.getElementById("signupForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var fullname = getElementVal("fullname");
    var username = getElementVal("username");
    var email = getElementVal("email");
    var password = getElementVal("password");
    var userId = getElementVal("userId");
    var lineProfilePic = getElementVal("lineProfilePic");
  
    saveMessages(fullname, username, email, password, userId, lineProfilePic);
  
    // enable alert
    const alertElement = document.querySelector(".alert");
    if (alertElement) {
      alertElement.style.display = "block";
  
      // remove the alert after 3 seconds
      setTimeout(() => {
        alertElement.style.display = "none";
      }, 3000);
    }
  
    // reset the form
    document.getElementById("signupForm").reset();
  }
  
  const saveMessages = (fullname, username, email, password, userId, lineProfilePic) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      fullname: fullname,
      username: username,
      email: email,
      password: password,
      userId: userId,
      lineProfilePic: lineProfilePic
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  