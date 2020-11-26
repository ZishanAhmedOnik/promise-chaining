function generatePromise(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num);
		}, 3 * 1000);
	});
}

generatePromise(10).then((result) => {
	console.log(result);

	return generatePromise(result * 2);
}).then((result) => {
	console.log(result);

	return generatePromise(result * 3);
}).then(result => {
	console.log(result);
});
