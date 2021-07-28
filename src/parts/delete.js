import {shuffle} from '@randomized/random';
import {tester} from '../tester.js';

export function _del(_test, length, heapname, makeHeap, diffname, diff, n) {
	const title = `Heap delete (${heapname}, ${diffname}, ${n})`;

	_test(title, (t) => {
		const q = makeHeap(diff);
		const a = [];
		const b = [];
		const references = [];

		if (length) t.deepEqual(q.length, 0, 'check length zero');

		let i = n;
		while (i--) {
			const x = Math.random();
			const reference = q.push(x);
			references.push(reference);
			a.push(x);
			if (length) t.deepEqual(q.length, a.length);
		}

		shuffle(references, 0, n);

		for (i = 0; i < n / 2; ++i) {
			b.push(references[i].value);
			q.delete(references[i]);
			if (length) t.deepEqual(q.length, a.length - b.length);
		}

		for (; i < n; ++i) {
			b.push(q.pop());
			if (length) t.deepEqual(q.length, a.length - b.length);
		}

		a.sort(diff);
		b.sort(diff);

		t.deepEqual(b, a, 'check identical');

		if (length) t.deepEqual(q.length, 0, 'check length zero');

		t.deepEqual(q.head(), undefined, 'check head empty');
		t.deepEqual(q.headreference(), null, 'check headreference empty');
		t.deepEqual(q.pop(), undefined, 'check pop empty');
		t.deepEqual(q.popreference(), null, 'check popreference empty');
	});
}

export const del = tester(_del);
