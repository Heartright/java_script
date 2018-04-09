1 
		function isNumberInRange(num){
				if(num > 0 && num < 10){
					return true; 
					}
				else {
					return false;
				}
			}

2
	function isNumberInRange(num){
				if(num > 0 && num < 10){
					return true; 
					}
				else {
					return false;
				}
			}
			var array = [1, 2, 3, 11, 5, 13, 12];
			var res = [];
			for (var i = 0; i < array.length; i++){
				if (isNumberInRange(array[i])){
					res.push(array[i]);
				}
			}
			alert(res)

3
	function getDigitsSum(digit){
			var digit = String(digit);
			var summ = 0;
			for (var i = 0; i < digit.length; i++){
				summ += Number(digit[i]) 
			}
				return summ;
			}
			alert(getDigitsSum(123456));
4
	function getDigitsSum(digit){
			var digit = String(digit);
			var summ = 0;
			for (var i = 0; i < digit.length; i++){
				summ += Number(digit[i]) 
			}
				return summ;
			}
			for (var i = 0; i <= 2017; i++){
				if (getDigitsSum(i) == 13){
				document.write(i + '<br>')
				}
			}
5
	function isEven(even){
			if (even % 2 == 0 ){
				return true;
			}
			else{
				return false;
			}
		
6
	function isEven(even){
			if (even % 2 == 0 ){
				return true;
			}
				else{
					return false;
				}
		}
			var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			var res = [];
			for(var i = 0; i < array.length; i++){
				if(isEven(array[i])){
					res.push(array[i]);
				}
			}
			alert(res);
		
	
7
	function getDivisors(num){
			var array = [];
			for (var i = 1; i <= num; i++ ){
				if (num % i == 0){
					array.push(i);
				}
			}
				return array;
			}
			alert(getDivisors(22));
		