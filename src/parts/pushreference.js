import { tester } from '../tester.js' ;
import { shuffle } from '@randomized/random' ;

export function _pushreference ( _test, length, heapname, Heap, diffname, diff, n ) {

	const title = `Heap pushreference (${heapname}, ${diffname}, ${n})`;

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
			if (length) t.deepEqual( q.length, a.length);
		}

		b = [];

		i = n;
		while ( i-- ) {
			b.push( q.popreference() );
			if (length) t.deepEqual( q.length, i);
		}

		shuffle( b, 0, n );

		i = n;
		while ( i-- ) {
			q.pushreference( b.pop() );
			if (length) t.deepEqual( q.length, n - b.length);
		}

		i = n;
		while ( i-- ) {
			b.push( q.popreference().value );
			if (length) t.deepEqual( q.length, i);
		}

		a.sort(diff);

		t.deepEqual( b, a, "check sorted" );

		t.deepEqual( q.popreference(), null, "2nd empty pop" );

		if (length) t.deepEqual( q.length, 0, "check length zero" );

	});

}

export const pushreference = tester( _pushreference ) ;
