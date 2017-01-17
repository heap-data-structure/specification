'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pushreference = undefined;
exports._pushreference = _pushreference;

var _tester = require('../tester');

var _aureoomsJsRandom = require('aureooms-js-random');

function _pushreference(_test, heapname, Heap, diffname, diff, n) {

	var title = 'Heap pushreference (' + heapname + ', ' + diffname + ', ' + n + ')';

	_test(title, function (t) {

		var q, a, i, x, b;

		q = Heap(diff);
		a = [];

		i = n;
		while (i--) {
			x = Math.random();
			q.push(x);
			a.push(x);
		}

		b = [];

		i = n;
		while (i--) {
			b.push(q.popreference());
		}

		(0, _aureoomsJsRandom.shuffle)(b, 0, n);

		i = n;
		while (i--) {
			q.pushreference(b.pop());
		}

		i = n;
		while (i--) {
			b.push(q.popreference().value);
		}

		a.sort(diff);

		t.deepEqual(b, a, "check sorted");

		t.deepEqual(q.popreference(), null, "2nd empty pop");

		t.deepEqual(q.length, 0, "queue empty");
	});
}

var pushreference = exports.pushreference = (0, _tester.tester)(_pushreference);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJ0cy9wdXNocmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIl9wdXNocmVmZXJlbmNlIiwiX3Rlc3QiLCJoZWFwbmFtZSIsIkhlYXAiLCJkaWZmbmFtZSIsImRpZmYiLCJuIiwidGl0bGUiLCJxIiwiYSIsImkiLCJ4IiwiYiIsIk1hdGgiLCJyYW5kb20iLCJwdXNoIiwicG9wcmVmZXJlbmNlIiwicHVzaHJlZmVyZW5jZSIsInBvcCIsInZhbHVlIiwic29ydCIsInQiLCJkZWVwRXF1YWwiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7OztRQUdnQkEsYyxHQUFBQSxjOztBQUhoQjs7QUFDQTs7QUFFTyxTQUFTQSxjQUFULENBQTBCQyxLQUExQixFQUFpQ0MsUUFBakMsRUFBMkNDLElBQTNDLEVBQWlEQyxRQUFqRCxFQUEyREMsSUFBM0QsRUFBaUVDLENBQWpFLEVBQXFFOztBQUUzRSxLQUFNQyxpQ0FBK0JMLFFBQS9CLFVBQTRDRSxRQUE1QyxVQUF5REUsQ0FBekQsTUFBTjs7QUFFQUwsT0FBT00sS0FBUCxFQUFjLGFBQUs7O0FBRWxCLE1BQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCOztBQUVBSixNQUFJTCxLQUFNRSxJQUFOLENBQUo7QUFDQUksTUFBSSxFQUFKOztBQUVBQyxNQUFJSixDQUFKO0FBQ0EsU0FBUUksR0FBUixFQUFjO0FBQ2JDLE9BQUlFLEtBQUtDLE1BQUwsRUFBSjtBQUNBTixLQUFFTyxJQUFGLENBQU9KLENBQVA7QUFDQUYsS0FBRU0sSUFBRixDQUFPSixDQUFQO0FBQ0E7O0FBRURDLE1BQUksRUFBSjs7QUFFQUYsTUFBSUosQ0FBSjtBQUNBLFNBQVFJLEdBQVIsRUFBYztBQUNiRSxLQUFFRyxJQUFGLENBQVFQLEVBQUVRLFlBQUYsRUFBUjtBQUNBOztBQUVELGlDQUFTSixDQUFULEVBQVksQ0FBWixFQUFlTixDQUFmOztBQUVBSSxNQUFJSixDQUFKO0FBQ0EsU0FBUUksR0FBUixFQUFjO0FBQ2JGLEtBQUVTLGFBQUYsQ0FBaUJMLEVBQUVNLEdBQUYsRUFBakI7QUFDQTs7QUFFRFIsTUFBSUosQ0FBSjtBQUNBLFNBQVFJLEdBQVIsRUFBYztBQUNiRSxLQUFFRyxJQUFGLENBQVFQLEVBQUVRLFlBQUYsR0FBaUJHLEtBQXpCO0FBQ0E7O0FBRURWLElBQUVXLElBQUYsQ0FBT2YsSUFBUDs7QUFFQWdCLElBQUVDLFNBQUYsQ0FBYVYsQ0FBYixFQUFnQkgsQ0FBaEIsRUFBbUIsY0FBbkI7O0FBRUFZLElBQUVDLFNBQUYsQ0FBYWQsRUFBRVEsWUFBRixFQUFiLEVBQStCLElBQS9CLEVBQXFDLGVBQXJDOztBQUdBSyxJQUFFQyxTQUFGLENBQWFkLEVBQUVlLE1BQWYsRUFBdUIsQ0FBdkIsRUFBMEIsYUFBMUI7QUFFQSxFQTFDRDtBQTRDQTs7QUFFTSxJQUFNTix3Q0FBZ0Isb0JBQVFqQixjQUFSLENBQXRCIiwiZmlsZSI6InB1c2hyZWZlcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0ZXN0ZXIgfSBmcm9tICcuLi90ZXN0ZXInIDtcbmltcG9ydCB7IHNodWZmbGUgfSBmcm9tICdhdXJlb29tcy1qcy1yYW5kb20nIDtcblxuZXhwb3J0IGZ1bmN0aW9uIF9wdXNocmVmZXJlbmNlICggX3Rlc3QsIGhlYXBuYW1lLCBIZWFwLCBkaWZmbmFtZSwgZGlmZiwgbiApIHtcblxuXHRjb25zdCB0aXRsZSA9IGBIZWFwIHB1c2hyZWZlcmVuY2UgKCR7aGVhcG5hbWV9LCAke2RpZmZuYW1lfSwgJHtufSlgO1xuXG5cdF90ZXN0KCB0aXRsZSwgdCA9PiB7XG5cblx0XHR2YXIgcSwgYSwgaSwgeCwgYjtcblxuXHRcdHEgPSBIZWFwKCBkaWZmICk7XG5cdFx0YSA9IFtdO1xuXG5cdFx0aSA9IG47XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR4ID0gTWF0aC5yYW5kb20oKTtcblx0XHRcdHEucHVzaCh4KTtcblx0XHRcdGEucHVzaCh4KTtcblx0XHR9XG5cblx0XHRiID0gW107XG5cblx0XHRpID0gbjtcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGIucHVzaCggcS5wb3ByZWZlcmVuY2UoKSApO1xuXHRcdH1cblxuXHRcdHNodWZmbGUoIGIsIDAsIG4gKTtcblxuXHRcdGkgPSBuO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0cS5wdXNocmVmZXJlbmNlKCBiLnBvcCgpICk7XG5cdFx0fVxuXG5cdFx0aSA9IG47XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRiLnB1c2goIHEucG9wcmVmZXJlbmNlKCkudmFsdWUgKTtcblx0XHR9XG5cblx0XHRhLnNvcnQoZGlmZik7XG5cblx0XHR0LmRlZXBFcXVhbCggYiwgYSwgXCJjaGVjayBzb3J0ZWRcIiApO1xuXG5cdFx0dC5kZWVwRXF1YWwoIHEucG9wcmVmZXJlbmNlKCksIG51bGwsIFwiMm5kIGVtcHR5IHBvcFwiICk7XG5cblxuXHRcdHQuZGVlcEVxdWFsKCBxLmxlbmd0aCwgMCwgXCJxdWV1ZSBlbXB0eVwiICk7XG5cblx0fSk7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHB1c2hyZWZlcmVuY2UgPSB0ZXN0ZXIoIF9wdXNocmVmZXJlbmNlICkgO1xuIl19