function getUser(userId) {
	return new Promise((resolve, reject) => {
		console.log('Get the user from the database');

		setTimeout(() => {
			resolve({
				userID: userId,
				userName: 'admin'
			});
		}, 1000);
	});
}

function getServices(user) {
	return new Promise((resolve, reject) => {
		console.log(`Get the services of ${user.userName} from the API`);

		setTimeout(() => {
			resolve(['Email', 'VPN', 'CDN']);
		}, 3 * 1000);
	});
}

function getServicesCost(services) {
	return new Promise((resolve, reject) => {
		console.log(`Calculate the service cost of ${services}`);

		setTimeout(() => {
			resolve(services.length * 100);
		}, 2 * 1000);
	});
}

getUser(100)
	.then(getServices)
	.then(getServicesCost)
	.then(console.log)
