1 Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой
		function ucfirst(str){
			return str[0].toUpperCase() + str.substr(1);
		}
		
		var str = 'var text hello'
		var array = str.split(' ');
		for(var i = 0; i < array.length; i++){
			array[i] = ucfirst(array[i]);
		}
		
		str = array.join(' ');
		alert(str);

2 Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.
	function ucfirst(str){
			return str[0].toUpperCase() + str.substr(1);
		}
		
		var str = 'var_text_hello'
		var array = str.split('_');
		for(var i = 1; i < array.length; i++){
			array[i] = ucfirst(array[i]);
		}
		
		str = array.join('');
		alert(str);

3 Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
	
	function inArray(str, array){
			for(var i = 0; i < array.length; i++){
				if (array[i] == str){
					return true;
				}
				return false;
			}
		}
		var str = 'var'
		var array = ['var', 'text', 'hello'];
		alert(inArray(str, array));
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

		