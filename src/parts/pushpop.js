import { tester } from '../tester' ;

export function _pushpop ( _test, heapname, Heap, diffname, diff, n ) {

	const title = `Heap pushpop (${heapname}, ${diffname}, ${n})`;

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

		a.sort(diff);

		i = n;
		b = [];

		while ( i-- ) {
			b.push( q.pop() );
		}

		t.deepEqual( b, a, "check sorted" );

		t.deepEqual( q.pop(), undefined, "2nd empty pop" );

		t.deepEqual( q.length, 0, "queue empty" );

	});

}

export const pushpop = tester( _pushpop ) ;
