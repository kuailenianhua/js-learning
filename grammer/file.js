let fs = require('fs');
function getData() {
	fs.readFile('ES6.js', (err, data) => {
		if(err) throw err;
		// console.log(data.toString());
		return data.toString();
	});
}
function test() {
	let data = yield getData();
	console.log(data);
}
test();