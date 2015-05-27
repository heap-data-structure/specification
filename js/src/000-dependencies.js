var util = require( "util" );
var compare = require( "aureooms-js-compare" );
var random = require( "aureooms-js-random" );
var itertools = require( "aureooms-js-itertools" );
var functools = require( "aureooms-js-functools" );

var shuffle = random.shuffle ;

var tester = function ( method ) {

	return function( heaps ) {

		itertools.exhaust( itertools.map(
			functools.chain( [ itertools.chain , itertools.list , functools.partial( functools.star , [ method ] ) ] ) ,
			itertools.product( [

				heaps ,

				[
					["increasing", compare.increasing],
					["decreasing", compare.decreasing]
				],

				[[1], [16], [17], [31], [32], [33], [63], [64], [65]]

			], 1 )
		) ) ;

	} ;
} ;

var tester2 = function ( method ) {

	return function( heaps ) {

		itertools.exhaust( itertools.map(
			functools.chain( [ itertools.chain , itertools.list , functools.partial( functools.star , [ method ] ) ] ) ,
			itertools.product( [

				heaps ,

				[
					["increasing", compare.increasing],
					["decreasing", compare.decreasing]
				],

				[[1], [16], [17], [31], [32], [33], [63], [64], [65]],
				[[1], [16], [17], [31], [32], [33], [63], [64], [65]]

			], 1 )
		) ) ;

	} ;
} ;
