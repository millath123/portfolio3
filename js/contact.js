

// Function to validate the contact form
function validateForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate name (must be more than 3 characters)
    if (name.length < 3) {
        alert("Name must be at least 3 characters long.");
        return false;
    }

    // Validate email (must be valid format)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate message (must be more than 3 characters)
    if (message.length < 3) {
        alert("Message must be at least 3 characters long.");
        return false;
    }
    else{
        success();

    }
    return true;


    // If all validations pass, the form will be submitted
   
    


}

function success(){
    alert('submit successfully!');
}


// document.addEventListener("DOMContentLoaded", function () {
//     const contactForm = document.getElementById("contactForm");
//     contactForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       if (validateForm()) {
//         // The form is valid, so proceed with submission.
//         submitForm();
//       }
//     });

//     function validateForm() {
//       // Get form input values
//       const name = document.getElementById("name").value.trim();
//       const email = document.getElementById("email").value.trim();
//       const subject = document.getElementById("subject").value.trim();
//       const message = document.getElementById("message").value.trim();

//       // Validate name (must be more than 3 letters and not empty)
//       if (name.length < 4) {
//         alert("Name must be at least 4 characters long.");
//         return false;
//       }

//       // Validate email (must be a valid email format and not empty)
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
//         alert("Please enter a valid email address.");
//         return false;
//       }

//       // Validate subject (must not be empty)
//       if (subject.length === 0) {
//         alert("Please enter a subject.");
//         return false;
//       }

//       // Validate message (must be more than 3 letters and not empty)
//       if (message.length < 4) {
//         alert("Message must be at least 4 characters long.");
//         return false;
//       }

//       return true; // All validations passed
//     }

//     function submitForm() {
//       // Process the form submission here (you may use AJAX to send data to the server)
//       // For the purpose of this example, we will show a simple alert with the submission time.
//       const submissionTime = new Date().toLocaleString();
//       alert("Message sent successfully! Submission time: " + submissionTime);

//       // Reset the form after successful submission (optional)
//       contactForm.reset();
//     }
//   });
