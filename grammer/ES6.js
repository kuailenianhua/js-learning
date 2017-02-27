class Test {
	constructor() {
		console.log('create!');
	}

	sayHello() {
		console.log('hello');
		return this;
	}

	sayHi() {
		console.log('hi~');
		return this;
	}
}

class Child extends Test {

	// @override
	sayHello() {
		super.sayHello();
		console.log('child hello');
	}
}

let test = new Test();
test.sayHello().sayHi();
test.sayHi().sayHello();
test = new Child();
test.sayHello();

let [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log(c);