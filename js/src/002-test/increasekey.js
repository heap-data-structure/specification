var _increasekey = function ( heapname, Heap, diffname, diff, n ) {

	var title = util.format( "Heap increasekey (%s, %s, %d)", heapname, diffname, n );

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

		for ( i = 0 ; i < n ; ++i ) {

			a[i] += Math.random();
			q.increasekey( references[i], a[i] );

		}

		i = n;

		while ( i-- ) {

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

exports._increasekey = _increasekey ;
exports.increasekey = tester( _increasekey ) ;