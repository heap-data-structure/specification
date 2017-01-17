
import ava from 'ava' ;

import { partial , create } from 'aureooms-js-functools' ;

import * as spec from '../../src' ;

spec.test( ava , [ [ "DummyHeap" , partial( create , [ spec.DummyHeap ] ) ] ] , true ) ;
spec.test( ava , [ [ "DummyHeapWithoutReferences" , partial( create , [ spec.DummyHeapWithoutReferences ] ) ] ] , false ) ;
