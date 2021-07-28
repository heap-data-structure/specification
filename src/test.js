import {
	head,
	pushpop,
	merge,
	update,
	decreasekey,
	increasekey,
	del,
	headreference,
	popreference,
	pushreference,
} from './parts/index.js';

export function test(
	_test,
	heaps,
	{references, length, lengths, lengths1, lengths2} = {
		references: true,
		length: false,
	},
) {
	head(_test, length, heaps, lengths);
	pushpop(_test, length, heaps, lengths);
	merge(_test, length, heaps, lengths1 || lengths, lengths2);

	if (!references) return;

	update(_test, length, heaps, lengths);
	decreasekey(_test, length, heaps, lengths);
	increasekey(_test, length, heaps, lengths);
	del(_test, length, heaps, lengths);
	headreference(_test, length, heaps, lengths);
	popreference(_test, length, heaps, lengths);
	pushreference(_test, length, heaps, lengths);
}
