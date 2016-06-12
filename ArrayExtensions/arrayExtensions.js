(function () {
	'use strict';

	Array.prototype.myFilter = function () {
		let paramsAsArray = Array.from(arguments),
			result = [],
			self = this;

		paramsAsArray.forEach(function (item, idx) {
			result.push(self.filter(function (el) {
				return item === el;
			}));
		});

		result = result.reduce(function (prev, current, index) {
			current.forEach(function (item) {
				prev.push(item);
			});
			return prev;
		}, []);

		return result;
	};

	Array.prototype.search = function () {
		let paramsAsArray = Array.from(arguments),
			result = {},
			self = this;

		paramsAsArray.forEach(function (item) {
			var currentResult = self.reduce(function (prev, current, i) {
				if (current === item)
					prev.push(i);
				return prev;
			}, []);

			result[item] = currentResult;
		});		

		return result;
	};

	Array.prototype.max = function () {
		return Math.max.apply('', this);
	};

	Array.prototype.min = function () {
		return Math.min.apply('', this);
	};

	Array.prototype.sum = function () {
		return this.reduce(function (prev, current) {
			return prev += current;
		}, 0);
	};

	Array.prototype.product = function () {
		return this.reduce(function (prev, current) {
			return prev *= current;
		}, 1);
	};
} ());