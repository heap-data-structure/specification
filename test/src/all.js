
import ava from 'ava' ;

import { partial , create } from 'aureooms-js-functools' ;

import * as spec from '../../src' ;

spec.test(
	ava ,
	[ [ "DummyHeap" , partial( create , [ spec.DummyHeap ] ) ] ] ,
	{ references : true , length : true }
) ;

spec.test(
	ava ,
	[ [ "DummyHeapWithoutReferences" , partial( create , [ spec.DummyHeapWithoutReferences ] ) ] ] ,
	{ references : false , length : true }
) ;

spec.test(
	ava ,
	[ [ "DummyHeap" , partial( create , [ spec.DummyHeap ] ) ] ] ,
	{ references : true , length : false }
) ;

spec.test(
	ava ,
	[ [ "DummyHeapWithoutReferences" , partial( create , [ spec.DummyHeapWithoutReferences ] ) ] ] ,
	{ references : false , length : false }
) ;
