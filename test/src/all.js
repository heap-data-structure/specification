// eslint-disable-next-line ava/use-test
import ava from 'ava';

import {partial, create} from '@functional-abstraction/functools';

import * as spec from '#module';

spec.test(ava, [['DummyHeap', partial(create, [spec.DummyHeap])]], {
	references: true,
	length: true,
});

spec.test(
	ava,
	[
		[
			'DummyHeapWithoutReferences',
			partial(create, [spec.DummyHeapWithoutReferences]),
		],
	],
	{references: false, length: true},
);

spec.test(
	ava,
	[['DummyHeap (length: false)', partial(create, [spec.DummyHeap])]],
	{references: true, length: false},
);

spec.test(
	ava,
	[
		[
			'DummyHeapWithoutReferences (length: false)',
			partial(create, [spec.DummyHeapWithoutReferences]),
		],
	],
	{references: false, length: false},
);

spec.test(ava, [['DummyHeap [300]', partial(create, [spec.DummyHeap])]], {
	references: true,
	length: true,
	lengths: [[300]],
});

spec.test(
	ava,
	[
		[
			'DummyHeapWithoutReferences [300]',
			partial(create, [spec.DummyHeapWithoutReferences]),
		],
	],
	{references: false, length: true, lengths: [[300]]},
);

spec.test(
	ava,
	[['DummyHeap (length: false) [300]', partial(create, [spec.DummyHeap])]],
	{references: true, length: false, lengths: [[300]]},
);

spec.test(
	ava,
	[
		[
			'DummyHeapWithoutReferences (length: false) [300]',
			partial(create, [spec.DummyHeapWithoutReferences]),
		],
	],
	{references: false, length: false, lengths: [[300]]},
);
