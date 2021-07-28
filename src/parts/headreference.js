import {tester} from '../tester.js';

export function _headreference(
	_test,
	length,
	heapname,
	makeHeap,
	diffname,
	diff,
	n,
) {
	const title = `Heap headreference (${heapname}, ${diffname}, ${n})`;

	_test(title, (t) => {
		const q = makeHeap(diff);
		const a = [];

		let i = n;
		while (i--) {
			const x = Math.random();
			q.push(x);
			a.push(x);
		}

		i = n;
		const b = [];

		while (i--) {
			b.push(q.headreference().value);
			q.pop();
		}

		a.sort(diff);

		t.deepEqual(b, a, 'check head reference sorted');
		t.deepEqual(q.headreference(), null, 'check head reference empty');
	});
}

export const headreference = tester(_headreference);
