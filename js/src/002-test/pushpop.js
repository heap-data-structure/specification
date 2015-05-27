var _pushpop = function ( heapname, Heap, diffname, diff, n ) {

	var title = util.format( "Heap pushpop (%s, %s, %d)", heapname, diffname, n );

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

		a.sort(diff);

		i = n;
		b = [];

		while ( i-- ) {
			b.push( q.pop() );
		}

		deepEqual( b, a, "check sorted" );

		deepEqual( q.pop(), undefined, "2nd empty pop" );

		deepEqual( q.length, 0, "queue empty" );

	});

};

exports._pushpop = _pushpop ;
exports.pushpop = tester( _pushpop ) ;

