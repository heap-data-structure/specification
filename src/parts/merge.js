import { tester2 } from '../tester.js' ;

export function _merge ( _test, length, heapname, Heap, diffname, diff, m, n ) {

	const title = `Heap merge (${heapname}, ${diffname}, ${m}, ${n})`;

	_test( title, t => {

		var q, q1, q2, a, x, i, b;

		a = [];
		q = Heap( diff );
		q1 = Heap( diff );
		q2 = Heap( diff );

		if (length) t.deepEqual( q1.length, 0, "check length zero q1" );
		if (length) t.deepEqual( q2.length, 0, "check length zero q2" );

		t.deepEqual( q.pop(), undefined, "1st empty pop" );

		i = m;
		while ( i-- ) {
			x = Math.random();
			q1.push(x);
			a.push(x);
			if (length) t.deepEqual( q1.length, a.length );
		}

		i = n;
		while ( i-- ) {
			x = Math.random();
			q2.push(x);
			a.push(x);
			if (length) t.deepEqual( q2.length, a.length - m );
		}

		a.sort( diff );

		q.merge( q1 );
		q.merge( q2 );

		i = m + n;
		b = [];

		if (length) t.deepEqual( q.length, i );

		while ( i-- ) {
			b.push( q.pop() );
			if (length) t.deepEqual( q.length, i );
		}

		t.deepEqual( b, a, "check sorted" );

		t.deepEqual( q.pop(), undefined, "2nd empty pop" );

		if (length) t.deepEqual( q.length, 0, "check length zero q" );

	});

}

export const merge = tester2( _merge ) ;
