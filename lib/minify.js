var through = require('through2');


module.exports = function(options, info) {
	return through(function(buffer, encoding, callback) {
		var s = buffer.toString();

		s = s.replace(/\/\*(.|\n|\r)*?\*\//g, ""); //删除注释
		s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
		s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
		s = s.replace(/;\s*;/g, ";"); //清除连续分号
		s = s.trim(); //去掉首尾空白

		callback(null, s);
	});
};

