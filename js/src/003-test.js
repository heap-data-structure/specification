
exports.test = function ( heaps , references ) {

	exports.head( heaps ) ;
	exports.pushpop( heaps ) ;
	exports.merge( heaps ) ;

	if ( !references ) return ;

	exports.update( heaps ) ;
	exports.decreasekey( heaps ) ;
	exports.increasekey( heaps ) ;
	exports.del( heaps ) ;
	exports.headreference( heaps ) ;
	exports.popreference( heaps ) ;
	exports.pushreference( heaps ) ;

} ;
