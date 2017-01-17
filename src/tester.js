import { increasing , decreasing } from 'aureooms-js-compare' ;
import { map , chain , list , product , exhaust } from 'aureooms-js-itertools' ;
import functools from 'aureooms-js-functools' ;

export function tester ( method ) {

	return function( _test , length , heaps ) {

		exhaust( map(
			functools.chain( [ chain , list , functools.partial( functools.star , [ method ] ) ] ) ,
			product( [

				[[_test, length]] ,

				heaps ,

				[
					["increasing", increasing],
					["decreasing", decreasing]
				],

				[[1], [16], [17], [31], [32], [33], [63], [64], [65]]

			], 1 )
		) ) ;

	} ;
}

export function tester2 ( method ) {

	return function( _test , length , heaps ) {

		exhaust( map(
			functools.chain( [ chain , list , functools.partial( functools.star , [ method ] ) ] ) ,
			product( [

				[[_test, length]] ,

				heaps ,

				[
					["increasing", increasing],
					["decreasing", decreasing]
				],

				[[1], [16], [17], [31], [32], [33], [63], [64], [65]],
				[[1], [16], [17], [31], [32], [33], [63], [64], [65]]

			], 1 )
		) ) ;

	} ;
}
