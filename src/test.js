
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

export function test ( _test , heaps , { references , length } = {
	references : true ,
	length : false ,
} ) {

	head( _test , length , heaps ) ;
	pushpop( _test , length , heaps ) ;
	merge( _test , length , heaps ) ;

	if ( !references ) return ;

	update( _test , length , heaps ) ;
	decreasekey( _test , length , heaps ) ;
	increasekey( _test , length , heaps ) ;
	del( _test , length , heaps ) ;
	headreference( _test , length , heaps ) ;
	popreference( _test , length , heaps ) ;
	pushreference( _test , length , heaps ) ;

}
