//Submitting Form
function submitter() {

	// 1. Turn form data into proper JSON array
	var formJSON = getFormData();

	// 2. POST JSON array (through REST service) to java file through AJAX
	$.ajax({
		headers : {
			'Accept' : 'application/json',
			'Content-Type' : 'application/json'
		},
		url : '/MyWebApp/rs/RestService/insert',
		type : 'post',
		dataType : 'jsonp',
		data : formJSON
	});

	// clear form
	$('#myForm')[0].reset();
	// 3. Return false so that form does not try to resubmit
	return false;
};

//function to get data from form only if data != null
function getFormData() {
	var jsObject = new Object();

	$("#myForm input, #myForm select, #myForm textarea").each(function() {
		var key = $(this).attr("name");
		var value = $(this).val();

		if (value != null && value != '') {
			jsObject[key] = value;
		}
	});

	return JSON.stringify(jsObject);
}
