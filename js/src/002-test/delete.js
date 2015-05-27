var _del = function ( heapname, Heap, diffname, diff, n ) {

	var title = util.format( "Heap delete (%s, %s, %d)", heapname, diffname, n );

	console.log( title );

	test( title, function () {

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

		deepEqual( b, a, "check identical" );

		deepEqual( q.length, 0, "check length empty" );

		deepEqual( q.head(), undefined, "check head empty" );
		deepEqual( q.headreference(), null, "check headreference empty" );
		deepEqual( q.pop(), undefined, "check pop empty" );
		deepEqual( q.popreference(), null, "check popreference empty" );

	});

};


exports._del = _del ;
exports.del = tester( _del ) ;
