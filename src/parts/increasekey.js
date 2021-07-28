import {shuffle} from '@randomized/random';
import {tester} from '../tester.js';

export function _increasekey(
	_test,
	length,
	heapname,
	makeHeap,
	diffname,
	diff,
	n,
) {
	const title = `Heap increasekey (${heapname}, ${diffname}, ${n})`;

	_test(title, (t) => {
		const q = makeHeap(diff);
		const pairs = [];
		const b = [];

		if (length) t.deepEqual(q.length, 0, 'check length zero');

		let i = n;
		while (i--) {
			const x = Math.random();
			const reference = q.push(x);
			pairs.push({ref: reference, value: x});
			if (length) t.deepEqual(q.length, pairs.length);
		}

		shuffle(pairs, 0, n);

		const order = diffname === 'increasing' ? 1 : -1;

		for (i = 0; i < n; ++i) {
			pairs[i].value += Math.random() * order;
			q.increasekey(pairs[i].ref, pairs[i].value);
			if (length) t.deepEqual(q.length, n);
		}

		i = n;

		while (i--) {
			b.push(q.pop());
			if (length) t.deepEqual(q.length, i);
		}

		const a = pairs.map((x) => x.value);
		a.sort(diff);

		t.deepEqual(b, a, 'check identical');

		if (length) t.deepEqual(q.length, 0, 'check length zero');

		t.deepEqual(q.head(), undefined, 'check head empty');
		t.deepEqual(q.headreference(), null, 'check headreference empty');
		t.deepEqual(q.pop(), undefined, 'check pop empty');
		t.deepEqual(q.popreference(), null, 'check popreference empty');
	});
}

export const increasekey = tester(_increasekey);
