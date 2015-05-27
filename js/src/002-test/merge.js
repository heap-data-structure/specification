var _merge = function ( heapname, Heap, diffname, diff, m, n ) {

	var title = util.format( "Heap merge (%s, %s, %d, %d)", heapname, diffname, m, n );

	console.log( title );

	test( title, function () {

		var q, q1, q2, a, x, i, b;

		a = [];
		q = Heap( diff );
		q1 = Heap( diff );
		q2 = Heap( diff );

		deepEqual( q.pop(), undefined, "1st empty pop" );

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

		deepEqual( b, a, "check sorted" );

		deepEqual( q.pop(), undefined, "2nd empty pop" );

		deepEqual( q.length, 0, "queue empty" );

	});

};

exports._merge = _merge ;
exports.merge = tester2( _merge ) ;
