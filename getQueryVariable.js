//method to get url query params

function getQueryVariable(variable) {
    var url = window.location.href,
	vars = {};
	url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
		key = decodeURIComponent(key);
		value = decodeURIComponent(value);
		vars[key] = value;
	});
	return vars[variable];
};
