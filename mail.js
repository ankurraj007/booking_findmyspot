const firebaseConfig = {
    apiKey: "AIzaSyDTBYKvaY7fvu59tT2IW34Gehb1p9BU-6A",
    authDomain: "booking-8016c.firebaseapp.com",
    databaseURL: "https://booking-8016c-default-rtdb.firebaseio.com",
    projectId: "booking-8016c",
    storageBucket: "booking-8016c.appspot.com",
    messagingSenderId: "756135670925",
    appId: "1:756135670925:web:42c722f949778693705ec4",
    measurementId: "G-SRQKVJ5FV5"
};
firebase.initializeApp(firebaseConfig);
var bookingFormDB = firebase.database().ref("bookingForm");

document.getElementById("booking").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var phone = getElementVal("phone");
    var location = getElementVal("location");
    var liscense = getElementVal("license-plate");
    var checkin = getElementVal("checkin");
    var checkout = getElementVal("checkout");



    saveMessages(name, phone, location, liscense, checkin, checkout);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("bookingForm").reset();
}

const saveMessages = (name, phone, location, liscense, checkin, checkout) => {
    var newBookingForm = bookingFormDB.push();

    newBookingForm.set({
        name: name,
        phone: phone,
        location: location,
        liscense: liscense,
        checkin: checkin,
        checkout: checkout,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};