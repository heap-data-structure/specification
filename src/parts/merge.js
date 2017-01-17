import { tester2 } from '../tester' ;

export function _merge ( _test, heapname, Heap, diffname, diff, m, n ) {

	const title = `Heap merge (${heapname}, ${diffname}, ${m}, ${n})`;

	_test( title, t => {

		var q, q1, q2, a, x, i, b;

		a = [];
		q = Heap( diff );
		q1 = Heap( diff );
		q2 = Heap( diff );

		t.deepEqual( q.pop(), undefined, "1st empty pop" );

		i = m;
		while ( i-- ) {
			x = Math.random();
			q1.push(x);
			a.push(x);
		}

		i = n;
		while ( i-- ) {
			x = Math.random();
			q2.push(x);
			a.push(x);
		}

		a.sort( diff );

		q.merge( q1 );
		q.merge( q2 );

		i = m + n;
		b = [];

		while ( i-- ) {
			b.push( q.pop() );
		}

		t.deepEqual( b, a, "check sorted" );

		t.deepEqual( q.pop(), undefined, "2nd empty pop" );

		t.deepEqual( q.length, 0, "queue empty" );

	});

}

export const merge = tester2( _merge ) ;
