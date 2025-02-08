exports.validateEmail = (email) => {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
};

exports.validatePassword = (password) => {
	return password.length >= 8;
};