1. Выведите с помощью цикла столбец чисел от 1 до 100.
		for (var i = 1; i <= 100; i++) {
				document.write(i + '<br>');
			}

2. Выведите с помощью цикла столбец чисел от 100 до 1.
	for (var i = 100; i > 0; i--) {
				document.write(i + '<br>');
			}

3. Выведите с помощью цикла столбец четных чисел от 1 до 100.	
	for (var i = 2; i <= 100; i += 2) {
				document.write(i + '<br>');
			}
4. Заполните массив 10-ю иксами с помощью цикла. 
	var array = [];
			for (var i = 0; i < 10; i ++) {
				array[i] = 'x';
			}
			document.write(array);

5. Заполните массив числами от 1 до 10 с помощью цикла. 
var array = [];
			for (var i = 1; i <= 10; i ++) {
				array.push(i);
			}
			document.write(array);
			
6. Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.
		var array = [];
			for (var i = 0; i < 10; i ++) {
				array.push(Math.random().toFixed(2));
			}
			document.write(array);
			
7. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
var array = [];
			for (var i = 0; i < 10; i ++) {
				array.push(Math.round(Math.random() * 10) + 1);
			}
			document.write(array);
			
8. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
var array = [1, 0, 5, 3, 20, 4, 2, 3, 4, -2];
			for (var i = 0; i < array.length; i ++) {
				if (array[i] > 0 && array[i] < 10){
					document.write(array[i] + '<br>');
				}
			}	
9. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.
var array = [1, 0, 3, 3, 20, 5, 2, 3, 4, -2];
			for (var i = 0; i < array.length; i ++) {
				if (array[i] == 5){
					document.write('Есть');
					break;
				}
			}
10. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
var array = [1, 0, 3, 3, 20, 5, 2, 3, 4, -2];
			var summ = 0;
			for (var i = 0; i < array.length; i ++) {
				summ += array[i];
			}
			alert(summ);
11. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
var array = [1, 0, 3, 3, 20, 5, 2, 3, 2];
			var summ = 0;
			for (var i = 0; i < array.length; i ++) {
				summ += array[i] * array[i];
			}
			alert(summ);
12. Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
var array = [1, 0, 3, 3, 20, 5, 2, 3, 2];
			var summ = 0;
			for (var i = 0; i < array.length; i ++) {
				summ += array[i];
			}
			var res = sum / array.length;
			alert(summ);