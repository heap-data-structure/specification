import { tester } from '../tester' ;
import { shuffle } from 'aureooms-js-random' ;

export function _del ( _test, heapname, Heap, diffname, diff, n ) {

	const title = `Heap delete (${heapname}, ${diffname}, ${n})`;

	_test( title, t => {

		var q, a, reference, references, i, x, b;

		q = Heap( diff );
		a = [];
		b = [];
		references = [];

		i = n;
		while ( i-- ) {
			x = Math.random();
			reference = q.push( x );
			references.push( reference );
			a.push( x );
		}

		shuffle( references, 0, n );

		for ( i = 0 ; i < n / 2 ; ++i ) {

			b.push( references[i].value );
			q.delete( references[i] );

		}

		for ( ; i < n ; ++i ) {

			b.push( q.pop() );

		}

		a.sort( diff );
		b.sort( diff );

		t.deepEqual( b, a, "check identical" );

		t.deepEqual( q.length, 0, "check length empty" );

		t.deepEqual( q.head(), undefined, "check head empty" );
		t.deepEqual( q.headreference(), null, "check headreference empty" );
		t.deepEqual( q.pop(), undefined, "check pop empty" );
		t.deepEqual( q.popreference(), null, "check popreference empty" );

	});

}

export const del = tester( _del ) ;
