var fs = require('node-fs'),
	_ = require('underscore'),
	rootPath = '';

function Temperature(root) {
	rootPath = root;
}

Temperature.prototype.Read = function() {
	return new Promise( function(resolve, reject) {
		fs.readFile(rootPath + 'w1_slave', 'utf-8', function (err, data) {
			if (err) {
				reject(err);
			} else {
				var index = data.lastIndexOf('t=') + 2;
				var tempStr = data.substr(index, 6);
				var temp = parseInt(tempStr);
				temp = temp / 1000;
				resolve(temp.toFixed(1));
			}
		});
	});
}

module.exports = Temperature