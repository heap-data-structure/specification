import {shuffle} from '@randomized/random';
import {tester} from '../tester.js';

export function _pushreference(
	_test,
	length,
	heapname,
	makeHeap,
	diffname,
	diff,
	n,
) {
	const title = `Heap pushreference (${heapname}, ${diffname}, ${n})`;

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

		const b = [];

		i = n;
		while (i--) {
			b.push(q.popreference());
			if (length) t.deepEqual(q.length, i);
		}

		shuffle(b, 0, n);

		i = n;
		while (i--) {
			q.pushreference(b.pop());
			if (length) t.deepEqual(q.length, n - b.length);
		}

		i = n;
		while (i--) {
			b.push(q.popreference().value);
			if (length) t.deepEqual(q.length, i);
		}

		a.sort(diff);

		t.deepEqual(b, a, 'check sorted');

		t.deepEqual(q.popreference(), null, '2nd empty pop');

		if (length) t.deepEqual(q.length, 0, 'check length zero');
	});
}

export const pushreference = tester(_pushreference);
