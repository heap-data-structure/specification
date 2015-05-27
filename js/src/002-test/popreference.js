var _popreference = function ( heapname, Heap, diffname, diff, n ) {

	var title = util.format( "Heap popreference (%s, %s, %d)", heapname, diffname, n );

	console.log( title );

	test( title, function () {

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
			b.push( q.popreference().value );
		}

		a.sort(diff);

		deepEqual( b, a, "check sorted" );

		deepEqual( q.popreference(), null, "2nd empty pop" );

		deepEqual( q.length, 0, "queue empty" );

	});

};


exports._popreference = _popreference ;
exports.popreference = tester( _popreference ) ;
