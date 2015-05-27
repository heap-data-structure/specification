

var DummyHeap = function ( compare ) {

	this.compare = function ( a , b ) { return compare( a.value , b.value ) ; } ;
	this.array = [ ] ;
	this.length = 0 ;

} ;

DummyHeap.Reference = function ( value ) { this.value = value ; } ;

DummyHeap.prototype.head = function () {

	if ( this.length === 0 ) return undefined;

	return this.array[0].value;

};


DummyHeap.prototype.headreference = function () {

	if ( this.length === 0 ) return null;

	return this.array[0];

};


DummyHeap.prototype.pop = function () {

	if ( this.length === 0 ) return undefined;

	--this.length ;
	return this.array.shift( ).value ;

};


DummyHeap.prototype.popreference = function () {

	if ( this.length === 0 ) return null ;

	--this.length ;
	return this.array.shift( ) ;

};


DummyHeap.prototype.push = function ( value ) {

	var reference = new DummyHeap.Reference( value ) ;

	this.pushreference( reference ) ;

	return reference ;

};


DummyHeap.prototype.pushreference = function ( reference ) {

	this.array.push( reference ) ;

	this.array.sort( this.compare ) ;

	++this.length;

};


DummyHeap.prototype.merge = function ( other ) {

	this.array = this.array.concat( other.array ).sort( this.compare ) ;

	this.length += other.length;

} ;


DummyHeap.prototype.update = function ( reference, value ) {

	reference.value = value ;

	this.array.sort( this.compare ) ;

};

DummyHeap.prototype.decreasekey = DummyHeap.prototype.update ;

DummyHeap.prototype.increasekey = DummyHeap.prototype.update ;

DummyHeap.prototype.delete = function ( reference ) {

	this.array.splice( this.array.indexOf( reference ) , 1 ) ;
	--this.length ;

};

exports.DummyHeap = DummyHeap;
