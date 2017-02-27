Function.prototype.addMethod = function(name, fn) {
	this[name] = fn;
	return this;
}

var methods = function(){};
methods.addMethod('test', function() {
	console.log('test');
	return this;
}).addMethod('test2', function() {
	console.log('test2');
	return this;
});
methods.test().test2();
// methods.test2();