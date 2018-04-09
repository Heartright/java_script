1 
		var array = [];
		var str = 'x';
		for(var i = 0; i <= 10; i++  ){
			array.push(str);
			str += 'x';
		}
		alert(array);

2
	var array = [];
			for (var i = 1; i < 10; i++) {
				var str = '';
			for(var j = 0; j < i; j++) {
				str += i;
				}
				array.push(str);
			}
			alert(array);

3
	function arrayFill(val, length){
			var array = [];
				for(var i = 0; i < length; i++){
				array.push(val);
			}
			return array;
		}
		alert(arrayFill('x', 5));
4
	function arr(array){
			var summ = 0;
			for(var i = 0; i < array.length; i++){
				summ += array[i];
				while (summ > 10) {
					return i + 1;
					}
				}
			}	
		alert(arr([1, 2, 3, 3, 1, 5, 4, 6 ]));
5
	var array = [1, 2, 3, 4 , 5, 6, 7, 8];
			var newarray = [];
			for(var i = array.length - 1; i >= 0; i--){
				newarray.push(array[i]);
				}	
		alert(newarray);
		
6
	var array = [[1, 2, 3], [4, 5], [6]];
			var summ = 0;
			for(var i = 0; i < array.length; i++){
				for(var j = 0; j < array[i].length; j++)
					summ += array[i][j];
				}	
		alert(summ);
		
	
7
	var array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
			var summ = 0;
			for(var i = 0; i < array.length; i++){
				for(var j = 0; j < array[i].length; j++){
					for(var k = 0; k < array[i][j].length; k++){
						summ += array[i][j][k];
						}
					}
				}	
		alert(summ);
		