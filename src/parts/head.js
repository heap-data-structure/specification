import { tester } from '../tester' ;

export function _head ( _test, heapname, Heap, diffname, diff, n ) {

	const title = `Heap head (${heapname}, ${diffname}, ${n})`;

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
			b.push( q.head() );
			q.pop();
		}

		a.sort( diff );

		t.deepEqual( b, a, "check head sorted" );
		t.deepEqual( q.head(), undefined, "check head empty" );

	});

}

export const head = tester( _head ) ;
