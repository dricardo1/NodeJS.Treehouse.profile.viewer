var a = 1;
//module.exports.a = a;
//Can be 'shorthanded': 'module' is not needed here, like running 'node module' instead of 'node module.js'
//exports.b = 2;

//Or override the exports and create a function
module.exports = function() {
	console.log('module 2!');
};