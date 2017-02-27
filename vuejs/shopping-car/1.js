var f = (n) => {
	for(let i=0; i<n; i++) {
		console.log(i);
	}
};
f(10);
var [a, b, c] = [1, 2, 3];
console.log(a);

function* fibs() {
	var [a, b] = [0, 1];
	while(true) {
		yield a;
		[a, b] = [b, a+b];
	}
}
var [f1, f2, f3, f4, f5, f6, f7] = fibs();
console.log([f1, f2, f3, f4, f5, f6, f7]);
console.log("\u{20BB7}");
console.log("pa".repeat(3));
var name="Amy", age=19;
console.log(`Hello! ${name}`);
