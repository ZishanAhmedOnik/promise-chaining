let p = new Promise((res, rej) => {
	let i = 10;

	let interval = setInterval(() => {
		i = i + 10;

		console.log(i);

		if(i === 30) {
			res(i);
		}
		else if(i === 50) {
			clearInterval(interval);
		}
	}, 1000);
});

p.then((i) => {
	console.log('From setInterval', i);
})
