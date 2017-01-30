
/*
● Create an array and pass in a function as rest parameter, then 
● Find out length of array using getArrLength() 
● Multiply by 2 to all element and display new array using multiplyByTwo() 
● Sort rest arguments using sortRestArgs() 
*/

var materials = [ 8,9,2,4,5];

function restParameter(a,b,c,d,e){
	console.log('Length of Array ');
	getArrLength( a,b,c,d,e );
	console.log('');
	console.log('Array multiply by two');
	multiplyByTwo(2, a,b,c,d,e );
	console.log('');
	console.log('Array in sorted order');
	sortRestArgs( a,b,c,d,e );
}


function getArrLength(...theArgs) {
  console.log(theArgs.length);
}

// getArrLength();  // 0
// getArrLength(5); // 1
// getArrLength(5, 6, 7); // 3



function multiplyByTwo(multiplier, ...theArgs) {
  console.log( theArgs.map(function (element) {
    return multiplier * element;
  }));
}

// var arr = multiplyByTwo(2, 1, 2, 3); 
// console.log(arr); // [2, 4, 6]



function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  console.log(sortedArgs);
}

// console.log(sortRestArgs(5,3,7,1));

restParameter( ...materials );


