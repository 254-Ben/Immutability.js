var z = Object.freeze([1,2,3,4,5,6,7]);

z[0] = 10; // not allowed
z[3][0] = 10; // alllowed

var state = Immutable.List.of(1,2,3,4);
var newState = state.set(42,"meaning of life")

state === newState;

state.get( 2 );
newState.get( 2 );

state.get( 42 );
newState.get( 42 );