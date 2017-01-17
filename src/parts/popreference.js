import { tester } from '../tester' ;

export function _popreference ( _test, heapname, Heap, diffname, diff, n ) {

	const title = `Heap popreference (${heapname}, ${diffname}, ${n})`;

	_test( title, t => {

		var q, a, i, x, b;

		q = Heap( diff );
		a = [];

		i = n;
		while ( i-- ) {
			x = Math.random();
			q.push(x);
			a.push(x);
		}

		i = n;
		b = [];

		while ( i-- ) {
			b.push( q.popreference().value );
		}

		a.sort(diff);

		t.deepEqual( b, a, "check sorted" );

		t.deepEqual( q.popreference(), null, "2nd empty pop" );

		t.deepEqual( q.length, 0, "queue empty" );

	});

}

export const popreference = tester( _popreference ) ;
