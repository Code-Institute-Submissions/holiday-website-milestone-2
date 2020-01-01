(function () {
	emailjs.init("user_jvqUzv5Q4vQ4CvipeoRUn");
})();

function sendForm(contactForm) {

	// this is the values that will be taken when form is filled in
	var info = {

		"fullname": contactForm.fullname.value,
		"dateofbirth": contactForm.dateofbirth.value,
		"emailaddress": contactForm.emailaddress.value,
		"furtherinfo": contactForm.furtherinfo.value
	};

	emailjs.send("gmail", "holiday_request", info)
		// this will display a modal upon completion of the form
		.then(
			$("#btn1").click(function () {

					$('#myModal').modal()

				}, // this will display an error if the form is not completed
				function (error) {
					alert("FAILED", error);
				})
		);
	return false;
}