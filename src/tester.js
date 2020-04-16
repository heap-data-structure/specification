import { increasing , decreasing } from '@aureooms/js-compare' ;
import { map , chain , list , product , exhaust } from '@aureooms/js-itertools' ;
import functools from '@aureooms/js-functools' ;

const DEFAULT_LENGTHS = [[1], [16], [17], [31], [32], [33], [63], [64], [65]] ;

export function tester ( method ) {

	return function( _test , length , heaps , lengths ) {

		if ( lengths === undefined ) lengths = DEFAULT_LENGTHS ;

		exhaust( map(
			functools.chain( [ chain , list , functools.partial( functools.star , [ method ] ) ] ) ,
			product( [

				[[_test, length]] ,

				heaps ,

				[
					["increasing", increasing],
					["decreasing", decreasing]
				],

				lengths

			], 1 )
		) ) ;

	} ;
}

export function tester2 ( method ) {

	return function( _test , length , heaps , lengths1 , lengths2 ) {

		if ( lengths1 === undefined ) lengths1 = DEFAULT_LENGTHS ;
		if ( lengths2 === undefined ) lengths2 = lengths1 ;

		exhaust( map(
			functools.chain( [ chain , list , functools.partial( functools.star , [ method ] ) ] ) ,
			product( [

				[[_test, length]] ,

				heaps ,

				[
					["increasing", increasing],
					["decreasing", decreasing]
				],

				lengths1,
				lengths2

			], 1 )
		) ) ;

	} ;
}
