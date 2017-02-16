import { tester } from '../tester' ;
import { shuffle } from '@aureooms/js-random' ;

export function _decreasekey ( _test, length, heapname, Heap, diffname, diff, n ) {

	const title = `Heap decreasekey (${heapname}, ${diffname}, ${n})`;

	_test( title, t => {

		var q, a, reference, references, i, x, b;

		q = Heap( diff );
		a = [];
		b = [];
		references = [];

		if (length) t.deepEqual( q.length, 0, "check length zero" );

		i = n;
		while ( i-- ) {
			x = Math.random();
			reference = q.push( x );
			references.push( reference );
			a.push( x );
			if (length) t.deepEqual( q.length, a.length );
		}

		shuffle( references, 0, n );

		for ( i = 0 ; i < n ; ++i ) {

			a[i] -= Math.random();
			q.decreasekey( references[i], a[i] );
			if (length) t.deepEqual( q.length, n );

		}

		i = n;

		while ( i-- ) {

			b.push( q.pop() );
			if (length) t.deepEqual( q.length, i );

		}

		a.sort( diff );
		b.sort( diff );

		t.deepEqual( b, a, "check identical" );

		if (length) t.deepEqual( q.length, 0, "check length zero" );

		t.deepEqual( q.head(), undefined, "check head empty" );
		t.deepEqual( q.headreference(), null, "check headreference empty" );
		t.deepEqual( q.pop(), undefined, "check pop empty" );
		t.deepEqual( q.popreference(), null, "check popreference empty" );

	});

}

export const decreasekey = tester( _decreasekey ) ;
