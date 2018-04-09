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
	var str = '';
		for(var i = 1; i <= 20; i++){
			str += 'x';
			document.write(str + '<br>');
		}
		
6
	var str = '';
		for(var i = 1; i < 10 ; i++){
			for(var j = 1; j <= i; j++ ){
			document.write(i)
			}
		document.write(str + '<br>');
		}
		
	
7
	var str = '';
		for(var i = 1; i <= 5; i++){
			str += 'xx';
			document.write(str + '<br>');
		}
		