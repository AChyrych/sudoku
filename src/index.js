module.exports = function solveSudoku(matrix) {
  let solveSudoku = matrix;
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	  for (var i = 0; i < solveSudoku.length; i++){
	  	for (var j = 0; j < solveSudoku[i].length; j++){
	  		if (solveSudoku[i][j] == 0){
	  			let indexI = solveSudoku.indexOf(solveSudoku[i]);
	  			let indexJ = solveSudoku.indexOf(solveSudoku[j]);
	  			foundElement( indexI, indexJ );
	  		}
		}
	}
  	function foundElement( indexI, indexJ ) {
  		let uniqueI = [];
  		let arrI = solveSudoku[indexI];
  		for ( var x = 0; x < arr.length; x++ ){
  			if (!arrI.includes(arr[x])){	
  				uniqueI.push(arr[x]);
			} 	
  		}	
 		if (uniqueI.length > 1){
 			foundElementJ(uniqueI, indexI, indexJ);
 		} else {
 			solveSudoku[indexI][indexJ] = uniqueI[0];
 			}
  		}

	function foundElementJ(uniqueI, indexI, indexJ){
		let arrJ = [];
		let uniqueJ = [];
		for ( var k = 0; k < solveSudoku.length; k++){
			arrJ.push(solveSudoku[k][indexJ]);
		}
		var ind = solveSudoku.indexOf(solveSudoku[indexJ]);	
		for ( x = 0; x < uniqueI.length; x++ ){
  			if (!arrJ.includes(uniqueI[x])){
  				solveSudoku[indexI][indexJ] = uniqueI[x];
  				continue;
  				} 	
  			}	
		}
		return solveSudoku;
}
