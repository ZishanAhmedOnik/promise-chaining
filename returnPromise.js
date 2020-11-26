let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10);
	}, 3 * 1000);
});

p.then((result) => {
	console.log(result);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(result * 2);
		}, 3 * 1000);
	});
}).then((result) => {
	console.log(result);

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(result * 3);
		}, 3 * 1000);
	});
}).then((result) => {
	console.log(result);
});
