function sendForm(contactForm) {

    (function(){
        emailjs.init("user_jvqUzv5Q4vQ4CvipeoRUn");
     })();

    var info = {
        
    "fullname": contactForm.fullname.value,
    "dateofbirth": contactForm.dateofbirth.value,
    "emailaddress": contactForm.emailaddress.value,
    "furtherinfo": contactForm.furtherinfo.value  
    };


    emailjs.send("gmail", "holiday_request",)
  
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
    
}
