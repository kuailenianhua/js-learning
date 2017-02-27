function myPromise(flag) {
	return new Promise((resolve, reject) => {
		if(flag) {
			resolve('success!');
		} else {
			reject('failed!');
		}
	});
}

myPromise(true).then(value => {
	console.log(value);
	return 10;
}, err => {
	console.log(err);
	return 9;
}).then(num => console.log(num*num));

let p1 = new Promise((resolve, reject) => {
	setTimeout(()=>reject(new Error('fail')), 3000);
});
let p2 = new Promise((resolve, reject) => {
	setTimeout(()=>resolve(p1), 1000);
});
p2.then(result=>console.log(result));
p2.catch(error=>console.log(error));