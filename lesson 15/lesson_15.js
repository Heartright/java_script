1. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
		var array = [1, 2, 3, 4, 5];	
		recArray(array)
			
		function recArray(array){
			document.write(array[0] + '<br>');
			array.splice(0, 1);
			if(array.length > 0) {
				recArray(array);
			}
		}

2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).
		function getSumm(num) {
		num = String(num);
		var array = num.split('');
		var summ = 0;
		for(var i = 0; i < array.length; i++){
			summ += Number(array[i]);
		}
			if (summ > 9) {
			getSumm(summ);		
			}
			else {
			document.write(summ + '<br>');
			}

	}
	var num = 54639934;
	getSumm(num);

