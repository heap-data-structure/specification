
var functools = require( "aureooms-js-functools" ) ;

heapspec.test( [ [ "DummyHeap" , functools.partial( functools.create , [ heapspec.DummyHeap ] ) ] ] , true ) ;
heapspec.test( [ [ "DummyHeapWithoutReferences" , functools.partial( functools.create , [ heapspec.DummyHeapWithoutReferences ] ) ] ] , false ) ;
