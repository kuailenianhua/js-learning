let obj = {a: 13};
let myobj = new Proxy(obj, {
	get: function(target, property) {
		if(property in target) {
			return target[property];
		}
		return 35;
	}
});

console.log(myobj.a);
console.log(myobj.time);