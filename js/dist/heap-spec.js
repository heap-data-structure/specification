"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/000-dependencies.js */
		var util = require("util");
		var compare = require("aureooms-js-compare");
		var random = require("aureooms-js-random");
		var itertools = require("aureooms-js-itertools");
		var functools = require("aureooms-js-functools");

		var shuffle = random.shuffle;

		var tester = function tester(method) {

			return function (heaps) {

				itertools.exhaust(itertools.map(functools.chain([itertools.chain, itertools.list, functools.partial(functools.star, [method])]), itertools.product([heaps, [["increasing", compare.increasing], ["decreasing", compare.decreasing]], [[1], [16], [17], [31], [32], [33], [63], [64], [65]]], 1)));
			};
		};

		var tester2 = function tester2(method) {

			return function (heaps) {

				itertools.exhaust(itertools.map(functools.chain([itertools.chain, itertools.list, functools.partial(functools.star, [method])]), itertools.product([heaps, [["increasing", compare.increasing], ["decreasing", compare.decreasing]], [[1], [16], [17], [31], [32], [33], [63], [64], [65]], [[1], [16], [17], [31], [32], [33], [63], [64], [65]]], 1)));
			};
		};

		/* js/src/001-adt */
		/* js/src/001-adt/DummyHeap.js */

		var DummyHeap = function DummyHeap(compare) {

			this.compare = function (a, b) {
				return compare(a.value, b.value);
			};
			this.array = [];
			this.length = 0;
		};

		DummyHeap.Reference = function (value) {
			this.value = value;
		};

		DummyHeap.prototype.head = function () {

			if (this.length === 0) return undefined;

			return this.array[0].value;
		};

		DummyHeap.prototype.headreference = function () {

			if (this.length === 0) return null;

			return this.array[0];
		};

		DummyHeap.prototype.pop = function () {

			if (this.length === 0) return undefined;

			--this.length;
			return this.array.shift().value;
		};

		DummyHeap.prototype.popreference = function () {

			if (this.length === 0) return null;

			--this.length;
			return this.array.shift();
		};

		DummyHeap.prototype.push = function (value) {

			var reference = new DummyHeap.Reference(value);

			this.pushreference(reference);

			return reference;
		};

		DummyHeap.prototype.pushreference = function (reference) {

			this.array.push(reference);

			this.array.sort(this.compare);

			++this.length;
		};

		DummyHeap.prototype.merge = function (other) {

			this.array = this.array.concat(other.array).sort(this.compare);

			this.length += other.length;
		};

		DummyHeap.prototype.update = function (reference, value) {

			reference.value = value;

			this.array.sort(this.compare);
		};

		DummyHeap.prototype.decreasekey = DummyHeap.prototype.update;

		DummyHeap.prototype.increasekey = DummyHeap.prototype.update;

		DummyHeap.prototype["delete"] = function (reference) {

			this.array.splice(this.array.indexOf(reference), 1);
			--this.length;
		};

		exports.DummyHeap = DummyHeap;

		/* js/src/001-adt/DummyHeapWithoutReferences.js */

		var DummyHeapWithoutReferences = function DummyHeapWithoutReferences(compare) {

			this.compare = compare;
			this.array = [];
			this.length = 0;
		};

		DummyHeapWithoutReferences.prototype.head = function () {

			if (this.length === 0) return undefined;

			return this.array[0];
		};

		DummyHeapWithoutReferences.prototype.pop = function () {

			if (this.length === 0) return undefined;

			--this.length;
			return this.array.shift();
		};

		DummyHeapWithoutReferences.prototype.push = function (value) {

			this.array.push(value);

			this.array.sort(this.compare);

			++this.length;
		};

		DummyHeapWithoutReferences.prototype.merge = function (other) {

			this.array = this.array.concat(other.array).sort(this.compare);

			this.length += other.length;
		};

		exports.DummyHeapWithoutReferences = DummyHeapWithoutReferences;

		/* js/src/002-test */
		/* js/src/002-test/decreasekey.js */

		var _decreasekey = function _decreasekey(heapname, Heap, diffname, diff, n) {

			var title = util.format("Heap decreasekey (%s, %s, %d)", heapname, diffname, n);

			console.log(title);

			test(title, function () {

				var q, a, reference, references, i, x, b;

				q = Heap(diff);
				a = [];
				b = [];
				references = [];

				i = n;
				while (i--) {
					x = Math.random();
					reference = q.push(x);
					references.push(reference);
					a.push(x);
				}

				shuffle(references, 0, n);

				for (i = 0; i < n; ++i) {

					a[i] -= Math.random();
					q.decreasekey(references[i], a[i]);
				}

				i = n;

				while (i--) {

					b.push(q.pop());
				}

				a.sort(diff);
				b.sort(diff);

				deepEqual(b, a, "check identical");

				deepEqual(q.length, 0, "check length empty");

				deepEqual(q.head(), undefined, "check head empty");
				deepEqual(q.headreference(), null, "check headreference empty");
				deepEqual(q.pop(), undefined, "check pop empty");
				deepEqual(q.popreference(), null, "check popreference empty");
			});
		};

		exports._decreasekey = _decreasekey;
		exports.decreasekey = tester(_decreasekey);

		/* js/src/002-test/delete.js */
		var _del = function _del(heapname, Heap, diffname, diff, n) {

			var title = util.format("Heap delete (%s, %s, %d)", heapname, diffname, n);

			console.log(title);

			test(title, function () {

				var q, a, reference, references, i, x, b;

				q = Heap(diff);
				a = [];
				b = [];
				references = [];

				i = n;
				while (i--) {
					x = Math.random();
					reference = q.push(x);
					references.push(reference);
					a.push(x);
				}

				shuffle(references, 0, n);

				for (i = 0; i < n / 2; ++i) {

					b.push(references[i].value);
					q["delete"](references[i]);
				}

				for (; i < n; ++i) {

					b.push(q.pop());
				}

				a.sort(diff);
				b.sort(diff);

				deepEqual(b, a, "check identical");

				deepEqual(q.length, 0, "check length empty");

				deepEqual(q.head(), undefined, "check head empty");
				deepEqual(q.headreference(), null, "check headreference empty");
				deepEqual(q.pop(), undefined, "check pop empty");
				deepEqual(q.popreference(), null, "check popreference empty");
			});
		};

		exports._del = _del;
		exports.del = tester(_del);

		/* js/src/002-test/head.js */
		var _head = function _head(heapname, Heap, diffname, diff, n) {

			var title = util.format("Heap head (%s, %s, %d)", heapname, diffname, n);

			console.log(title);

			test(title, function () {

				var q, a, i, x, b;

				q = Heap(diff);
				a = [];

				i = n;

				while (i--) {
					x = Math.random();
					q.push(x);
					a.push(x);
				}

				i = n;
				b = [];

				while (i--) {
					b.push(q.head());
					q.pop();
				}

				a.sort(diff);

				deepEqual(b, a, "check head sorted");
				deepEqual(q.head(), undefined, "check head empty");
			});
		};

		exports._head = _head;
		exports.head = tester(_head);

		/* js/src/002-test/headreference.js */
		var _headreference = function _headreference(heapname, Heap, diffname, diff, n) {

			var title = util.format("Heap headreference (%s, %s, %d)", heapname, diffname, n);

			console.log(title);

			test(title, function () {

				var q, a, i, x, b;

				q = Heap(diff);
				a = [];

				i = n;
				while (i--) {
					x = Math.random();
					q.push(x);
					a.push(x);
				}

				i = n;
				b = [];

				while (i--) {
					b.push(q.headreference().value);
					q.pop();
				}

				a.sort(diff);

				deepEqual(b, a, "check head reference sorted");
				deepEqual(q.headreference(), null, "check head reference empty");
			});
		};

		exports._headreference = _headreference;
		exports.headreference = tester(_headreference);

		/* js/src/002-test/increasekey.js */
		var _increasekey = function _increasekey(heapname, Heap, diffname, diff, n) {

			var title = util.format("Heap increasekey (%s, %s, %d)", heapname, diffname, n);

			console.log(title);

			test(title, function () {

				var q, a, reference, references, i, x, b;

				q = Heap(diff);
				a = [];
				b = [];
				references = [];

				i = n;
				while (i--) {
					x = Math.random();
					reference = q.push(x);
					references.push(reference);
					a.push(x);
				}

				shuffle(references, 0, n);

				for (i = 0; i < n; ++i) {

					a[i] += Math.random();
					q.increasekey(references[i], a[i]);
				}

				i = n;

				while (i--) {

					b.push(q.pop());
				}

				a.sort(diff);
				b.sort(diff);

				deepEqual(b, a, "check identical");

				deepEqual(q.length, 0, "check length empty");

				deepEqual(q.head(), undefined, "check head empty");
				deepEqual(q.headreference(), null, "check headreference empty");
				deepEqual(q.pop(), undefined, "check pop empty");
				deepEqual(q.popreference(), null, "check popreference empty");
			});
		};

		exports._increasekey = _increasekey;
		exports.increasekey = tester(_increasekey);

		/* js/src/002-test/merge.js */
		var _merge = function _merge(heapname, Heap, diffname, diff, m, n) {

			var title = util.format("Heap merge (%s, %s, %d, %d)", heapname, diffname, m, n);

			console.log(title);

			test(title, function () {

				var q, q1, q2, a, x, i, b;

				a = [];
				q = Heap(diff);
				q1 = Heap(diff);
				q2 = Heap(diff);

				deepEqual(q.pop(), undefined, "1st empty pop");

				i = m;
				while (i--) {
					x = Math.random();
					q1.push(x);
					a.push(x);
				}

				i = n;
				while (i--) {
					x = Math.random();
					q2.push(x);
					a.push(x);
				}

				a.sort(diff);

				q.merge(q1);
				q.merge(q2);

				i = m + n;
				b = [];

				while (i--) {
					b.push(q.pop());
				}

				deepEqual(b, a, "check sorted");

				deepEqual(q.pop(), undefined, "2nd empty pop");

				deepEqual(q.length, 0, "queue empty");
			});
		};

		exports._merge = _merge;
		exports.merge = tester2(_merge);

		/* js/src/002-test/popreference.js */
		var _popreference = function _popreference(heapname, Heap, diffname, diff, n) {

			var title = util.format("Heap popreference (%s, %s, %d)", heapname, diffname, n);

			console.log(title);

			test(title, function () {

				var q, a, i, x, b;

				q = Heap(diff);
				a = [];

				i = n;
				while (i--) {
					x = Math.random();
					q.push(x);
					a.push(x);
				}

				i = n;
				b = [];

				while (i--) {
					b.push(q.popreference().value);
				}

				a.sort(diff);

				deepEqual(b, a, "check sorted");

				deepEqual(q.popreference(), null, "2nd empty pop");

				deepEqual(q.length, 0, "queue empty");
			});
		};

		exports._popreference = _popreference;
		exports.popreference = tester(_popreference);

		/* js/src/002-test/pushpop.js */
		var _pushpop = function _pushpop(heapname, Heap, diffname, diff, n) {

			var title = util.format("Heap pushpop (%s, %s, %d)", heapname, diffname, n);

			console.log(title);

			test(title, function () {

				var q, a, i, x, b;

				q = Heap(diff);
				a = [];

				i = n;
				while (i--) {
					x = Math.random();
					q.push(x);
					a.push(x);
				}

				a.sort(diff);

				i = n;
				b = [];

				while (i--) {
					b.push(q.pop());
				}

				deepEqual(b, a, "check sorted");

				deepEqual(q.pop(), undefined, "2nd empty pop");

				deepEqual(q.length, 0, "queue empty");
			});
		};

		exports._pushpop = _pushpop;
		exports.pushpop = tester(_pushpop);

		/* js/src/002-test/pushreference.js */
		var _pushreference = function _pushreference(heapname, Heap, diffname, diff, n) {

			var title = util.format("Heap pushreference (%s, %s, %d)", heapname, diffname, n);

			console.log(title);

			test(title, function () {

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

				shuffle(b, 0, n);

				i = n;
				while (i--) {
					q.pushreference(b.pop());
				}

				i = n;
				while (i--) {
					b.push(q.popreference().value);
				}

				a.sort(diff);

				deepEqual(b, a, "check sorted");

				deepEqual(q.popreference(), null, "2nd empty pop");

				deepEqual(q.length, 0, "queue empty");
			});
		};

		exports._pushreference = _pushreference;
		exports.pushreference = tester(_pushreference);

		/* js/src/002-test/update.js */
		var _update = function _update(heapname, Heap, diffname, diff, n) {

			var title = util.format("Heap update (%s, %s, %d)", heapname, diffname, n);

			console.log(title);

			test(title, function () {

				var q, a, reference, references, i, x, b;

				q = Heap(diff);
				a = [];
				b = [];
				references = [];

				i = n;
				while (i--) {
					x = Math.random();
					reference = q.push(x);
					references.push(reference);
					a.push(x);
				}

				shuffle(references, 0, n);

				for (i = 0; i < n; ++i) {

					a[i] += Math.random() - 0.5;
					q.update(references[i], a[i]);

					// not a typo
					q.update(references[i], a[i]);
				}

				i = n;

				while (i--) {

					b.push(q.pop());
				}

				a.sort(diff);

				deepEqual(b, a, "check identical");

				deepEqual(q.length, 0, "check length empty");

				deepEqual(q.head(), undefined, "check head empty");
				deepEqual(q.headreference(), null, "check headreference empty");
				deepEqual(q.pop(), undefined, "check pop empty");
				deepEqual(q.popreference(), null, "check popreference empty");
			});
		};

		exports._update = _update;
		exports.update = tester(_update);

		/* js/src/003-test.js */

		exports.test = function (heaps, references) {

			exports.head(heaps);
			exports.pushpop(heaps);
			exports.merge(heaps);

			if (!references) return;

			exports.update(heaps);
			exports.decreasekey(heaps);
			exports.increasekey(heaps);
			exports.del(heaps);
			exports.headreference(heaps);
			exports.popreference(heaps);
			exports.pushreference(heaps);
		};

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-heap-spec", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["heapspec"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-heap-spec");
})();