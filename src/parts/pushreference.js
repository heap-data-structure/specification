import { tester } from '../tester' ;
import { shuffle } from 'aureooms-js-random' ;

export function _pushreference ( _test, heapname, Heap, diffname, diff, n ) {

	const title = `Heap pushreference (${heapname}, ${diffname}, ${n})`;

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

		b = [];

		i = n;
		while ( i-- ) {
			b.push( q.popreference() );
		}

		shuffle( b, 0, n );

		i = n;
		while ( i-- ) {
			q.pushreference( b.pop() );
		}

		i = n;
		while ( i-- ) {
			b.push( q.popreference().value );
		}

		a.sort(diff);

		t.deepEqual( b, a, "check sorted" );

		t.deepEqual( q.popreference(), null, "2nd empty pop" );


		t.deepEqual( q.length, 0, "queue empty" );

	});

}

export const pushreference = tester( _pushreference ) ;
