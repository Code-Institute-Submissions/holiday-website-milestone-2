(function(){
    emailjs.init("user_jvqUzv5Q4vQ4CvipeoRUn");
 })();

function sendForm(contactForm) {

  

    var info = {
        
    "fullname": contactForm.fullname.value,
    "dateofbirth": contactForm.dateofbirth.value,
    "emailaddress": contactForm.emailaddress.value,
    "furtherinfo": contactForm.furtherinfo.value  
    };


    emailjs.send("gmail", "holiday_request", info)
  
    .then(
        function(response) {
            return("SUCCESS", response);
        },
        function(error) {
            return("FAILED", error);


        }
    );

    
    return false;

    
}
