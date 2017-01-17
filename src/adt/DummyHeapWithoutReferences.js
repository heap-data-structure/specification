

export function DummyHeapWithoutReferences ( compare ) {

	this.compare = compare ;
	this.array = [ ] ;
	this.length = 0 ;

}

DummyHeapWithoutReferences.prototype.head = function () {

	if ( this.length === 0 ) return undefined;

	return this.array[0];

};



DummyHeapWithoutReferences.prototype.pop = function () {

	if ( this.length === 0 ) return undefined;

	--this.length ;
	return this.array.shift( ) ;

};




DummyHeapWithoutReferences.prototype.push = function ( value ) {

	this.array.push( value ) ;

	this.array.sort( this.compare ) ;

	++this.length;

};


DummyHeapWithoutReferences.prototype.merge = function ( other ) {

	this.array = this.array.concat( other.array ).sort( this.compare ) ;

	this.length += other.length;

} ;
