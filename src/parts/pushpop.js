import {tester} from '../tester.js';

export function _pushpop(_test, length, heapname, makeHeap, diffname, diff, n) {
	const title = `Heap pushpop (${heapname}, ${diffname}, ${n})`;

	_test(title, (t) => {
		const q = makeHeap(diff);
		const a = [];

		if (length) t.deepEqual(q.length, 0, 'check length zero');

		let i = n;
		while (i--) {
			const x = Math.random();
			q.push(x);
			a.push(x);
			if (length) t.deepEqual(q.length, a.length);
		}

		a.sort(diff);

		i = n;
		const b = [];

		while (i--) {
			b.push(q.pop());
			if (length) t.deepEqual(q.length, i);
		}

		t.deepEqual(b, a, 'check sorted');

		t.deepEqual(q.pop(), undefined, '2nd empty pop');

		if (length) t.deepEqual(q.length, 0, 'check length zero');
	});
}

export const pushpop = tester(_pushpop);
