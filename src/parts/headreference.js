import { tester } from '../tester' ;

export function _headreference ( _test, length, heapname, Heap, diffname, diff, n ) {

	const title = `Heap headreference (${heapname}, ${diffname}, ${n})`;

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
			b.push( q.headreference().value );
			q.pop();
		}

		a.sort( diff );

		t.deepEqual( b, a, "check head reference sorted" );
		t.deepEqual( q.headreference(), null, "check head reference empty" );

	});

}

export const headreference = tester( _headreference ) ;
