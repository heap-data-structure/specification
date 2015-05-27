var _head = function ( heapname, Heap, diffname, diff, n ) {

	var title = util.format( "Heap head (%s, %s, %d)", heapname, diffname, n );

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
			b.push( q.head() );
			q.pop();
		}

		a.sort( diff );

		deepEqual( b, a, "check head sorted" );
		deepEqual( q.head(), undefined, "check head empty" );

	});

};


exports._head = _head ;
exports.head = tester( _head ) ;
