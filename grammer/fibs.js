function* fibs() {
	let [a, b] = [0, 1];
	while(true) {
		yield a;
		[a, b] = [b, a+b];
	}	
}

let fib = fibs();
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());