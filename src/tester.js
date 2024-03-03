import {
	chain as fchain,
	partial,
	star,
} from '@functional-abstraction/functools';
import {_chain as chain} from '@iterable-iterator/chain';
import {exhaust} from '@iterable-iterator/consume';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {product} from '@set-theory/cartesian-product';
import {increasing, decreasing} from '@total-order/primitive';

const DEFAULT_LENGTHS = [
	[0],
	[1],
	[16],
	[17],
	[31],
	[32],
	[33],
	[63],
	[64],
	[65],
];

export function tester(method) {
	return function (_test, length, heaps, lengths) {
		if (lengths === undefined) lengths = DEFAULT_LENGTHS;

		exhaust(
			map(
				fchain([chain, list, partial(star, [method])]),
				product(
					[
						[[_test, length]],

						heaps,

						[
							['increasing', increasing],
							['decreasing', decreasing],
						],

						lengths,
					],
					1,
				),
			),
		);
	};
}

export function tester2(method) {
	return function (_test, length, heaps, lengths1, lengths2) {
		if (lengths1 === undefined) lengths1 = DEFAULT_LENGTHS;
		if (lengths2 === undefined) lengths2 = lengths1;

		exhaust(
			map(
				fchain([chain, list, partial(star, [method])]),
				product(
					[
						[[_test, length]],

						heaps,

						[
							['increasing', increasing],
							['decreasing', decreasing],
						],

						lengths1,
						lengths2,
					],
					1,
				),
			),
		);
	};
}
