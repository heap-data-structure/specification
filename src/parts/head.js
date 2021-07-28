import {tester} from '../tester.js';

export function _head(_test, length, heapname, makeHeap, diffname, diff, n) {
	const title = `Heap head (${heapname}, ${diffname}, ${n})`;

	_test(title, (t) => {
		const q = makeHeap(diff);
		const a = [];

		let i = n;

		while (i--) {
			const x = Math.random();
			q.push(x);
			a.push(x);
		}

		a.sort(diff);

		i = n;
		const b = [];

		while (i--) {
			b.push(q.head());
			q.pop();
		}

		t.deepEqual(b, a, 'check head sorted');
		t.deepEqual(q.head(), undefined, 'check head empty');
	});
}

export const head = tester(_head);
