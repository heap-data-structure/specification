import { tester } from '../tester' ;

export function _popreference ( _test, length, heapname, Heap, diffname, diff, n ) {

	const title = `Heap popreference (${heapname}, ${diffname}, ${n})`;

	_test( title, t => {

		var q, a, i, x, b;

		q = Heap( diff );
		a = [];

		if (length) t.deepEqual( q.length, 0, "check length zero");

		i = n;
		while ( i-- ) {
			x = Math.random();
			q.push(x);
			a.push(x);
			if (length) t.deepEqual( q.length, a.length );
		}

		i = n;
		b = [];

		while ( i-- ) {
			b.push( q.popreference().value );
			if (length) t.deepEqual( q.length, i );
		}

		a.sort(diff);

		t.deepEqual( b, a, "check sorted" );

		t.deepEqual( q.popreference(), null, "2nd empty pop" );

		if (length) t.deepEqual( q.length, 0, "check length zero" );

	});

}

export const popreference = tester( _popreference ) ;
