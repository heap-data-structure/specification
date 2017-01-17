
import {
	head ,
	pushpop ,
	merge ,
	update ,
	decreasekey ,
	increasekey ,
	del ,
	headreference ,
	popreference ,
	pushreference ,
} from './parts' ;

export function test ( _test , heaps , references ) {

	head( _test , heaps ) ;
	pushpop( _test , heaps ) ;
	merge( _test , heaps ) ;

	if ( !references ) return ;

	update( _test , heaps ) ;
	decreasekey( _test , heaps ) ;
	increasekey( _test , heaps ) ;
	del( _test , heaps ) ;
	headreference( _test , heaps ) ;
	popreference( _test , heaps ) ;
	pushreference( _test , heaps ) ;

}
