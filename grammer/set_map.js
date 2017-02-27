var s = new Set();
var arr = [1, 2, 3, 4, 5];
arr.map(x => {
	s.add(x);
});
console.log(s);
var arr2 = [for (let i of arr) {
	console.log(i);
}];
console.log(arr2);