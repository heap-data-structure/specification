import { tester } from '../tester' ;

export function _pushpop ( _test, length, heapname, Heap, diffname, diff, n ) {

	const title = `Heap pushpop (${heapname}, ${diffname}, ${n})`;

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

		a.sort(diff);

		i = n;
		b = [];

		while ( i-- ) {
			b.push( q.pop() );
			if (length) t.deepEqual( q.length, i );
		}

		t.deepEqual( b, a, "check sorted" );

		t.deepEqual( q.pop(), undefined, "2nd empty pop" );

		if (length) t.deepEqual( q.length, 0, "check length zero" );

	});

}

export const pushpop = tester( _pushpop ) ;
