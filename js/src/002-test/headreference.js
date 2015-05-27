var _headreference = function ( heapname, Heap, diffname, diff, n ) {

	var title = util.format( "Heap headreference (%s, %s, %d)", heapname, diffname, n );

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
			b.push( q.headreference().value );
			q.pop();
		}

		a.sort( diff );

		deepEqual( b, a, "check head reference sorted" );
		deepEqual( q.headreference(), null, "check head reference empty" );

	});

};




exports._headreference = _headreference ;
exports.headreference = tester( _headreference ) ;
