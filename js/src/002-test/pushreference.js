var _pushreference = function ( heapname, Heap, diffname, diff, n ) {

	var title = util.format( "Heap pushreference (%s, %s, %d)", heapname, diffname, n );

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

		deepEqual( b, a, "check sorted" );

		deepEqual( q.popreference(), null, "2nd empty pop" );


		deepEqual( q.length, 0, "queue empty" );

	});

};

exports._pushreference = _pushreference ;
exports.pushreference = tester( _pushreference ) ;

