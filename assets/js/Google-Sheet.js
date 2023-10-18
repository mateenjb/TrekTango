// Contact Form
const scriptUrl = 'https://script.google.com/macros/s/AKfycbyjdpK4TgYcRuAwM2acTEx1GHWqaKhNYapx-rfKSWnb0TuqqtpeU0U1st9r4Yv1CMO7iw/exec';



                  
const ContactForm = document.forms['contact-form'];
ContactForm.addEventListener('submit',e =>{
    e.preventDefault()
    fetch(scriptUrl,{method:'Post',body: new FormData(ContactForm)})
    .then(response => alert("Thank You! your form is submitted successfully. "))
    .then(() =>{
        window.location.reload();
    })
    .catch(
        error => console.log('Error!',error.message)
    );
    document.getElementById("submitButton").addEventListener("click", function () {
        // Clear input and textarea fields after a brief delay (to allow form submission)
        setTimeout(function () {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("date").value = "";
          document.getElementById("Message").value = "";
        }, 1000);
      });
})






const ConsultationForm = document.forms['consultation'];

const ConsultationUrl = 'https://script.google.com/macros/s/AKfycbwa3nxpMANODAvSFRE-PzkGSxDNU-r7XL4tRXp3cvqaWLLfBJoXl3hNtMq33fsUxVoS/exec';

ConsultationForm.addEventListener('submit',e =>{
    e.preventDefault()
    fetch(ConsultationUrl,{method:'Post',body: new FormData(ConsultationForm)})
    .then(response => alert("Thank You! your form is submitted successfully. "))
    .then(() =>{
        window.location.reload();
    })
    .catch(
        error => console.log('Error!',error.message)
    )
    document.getElementById("submitButton").addEventListener("click", function () {
        // Clear input and textarea fields after a brief delay (to allow form submission)
        setTimeout(function () {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("date").value = "";
          document.getElementById("Message").value = "";
        }, 1000);
      });
});


document.addEventListener('DOMContentLoaded', function () {
    const flightForm = document.forms['flight-form']; // Match the form name to 'flight-form'
    const flightUrl = 'https://script.google.com/macros/s/AKfycby-mZiVy3AsCJD77z1c38FuWEc7SWctlspnH_juVtD9VTU_G_eDLa5pounLvvbZLcSh/exec';

    flightForm.addEventListener('submit', e => {
        e.preventDefault();

        fetch(flightUrl, { method: 'POST', body: new FormData(flightForm) })
            .then(response => {
                if (response.ok) {
                    alert("Thank You! Your form is submitted successfully.");
                    // Clear input fields after a brief delay (to allow form submission)
                    setTimeout(function () {
                        flightForm.reset();
                    }, 1000);
                } else {
                    alert("Error submitting the form. Please try again later.");
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert("An error occurred. Please try again later.");
            });
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const VehicleForm = document.forms['Vehicle-form'];
    const VehicleUrl = 'https://script.google.com/macros/s/AKfycbwVGDjeRqElQIheWo4ZHaqIZlONg3bI5c7I18Ci2RXIc5qsvMhK1fTPx5WziVoq3MWj/exec';

    VehicleForm.addEventListener('submit', function (e) {
        e.preventDefault();

        fetch(VehicleUrl, { method: 'POST', body: new FormData(VehicleForm) })
            .then(function (response) {
                if (response.ok) {
                    alert("Thank You! Your form is submitted successfully.");
                    // Clear input fields after a brief delay (to allow form submission)
                    setTimeout(function () {
                        VehicleForm.reset();
                    }, 1000);
                } else {
                    alert("Error submitting the form. Please try again later.");
                }
            })
            .catch(function (error) {
                console.error('Error!', error.message);
                alert("An error occurred. Please try again later.");
            });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const hotelForm = document.forms['hotel-form'];
    const hotelUrl = 'https://script.google.com/macros/s/AKfycbw9-k9x2OSOKNa9JXlv5klDELLqQt--SYC83XFvSC-ViOKyANxQigxiFCsTTrajaLW0pA/exec';

    hotelForm.addEventListener('submit', function (e) {
        e.preventDefault();

        fetch(hotelUrl, { method: 'POST', body: new FormData(hotelForm) })
            .then(function (response) {
                if (response.ok) {
                    alert("Thank You! Your form is submitted successfully.");
                    // Clear input fields after a brief delay (to allow form submission)
                    setTimeout(function () {
                        hotelForm.reset();
                    }, 1000);
                } else {
                    alert("Error submitting the form. Please try again later.");
                }
            })
            .catch(function (error) {
                console.error('Error!', error.message);
                alert("An error occurred. Please try again later.");
            });
    });
});












































































































































