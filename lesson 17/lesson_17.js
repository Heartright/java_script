1. 
<button onclick="alert('Привет!')">Нажми на меня</button>

2.
<button onmouseover="alert('Привет!')">Наведи на меня</button>

3. 
<button ondblclick="alert('Привет!')">Двойной счелчок по мне</button>
			}
4.
 <div style="height: 300px; width: 300px; border: solid red 1px;" onmouseout="alert('Привет!')">Наведи на меня мышь - а потом убери!</div>

5. 
<script> 
			function buttonClick(){
				var input = document.getElementById('input');
				alert(input.value);
			}
			
</script>
	<body>
		<input type="text" id="input" value="Ку-ку">
		<button style="margin-left: 4px" onclick="buttonClick()">Нажми на меня!</button>
		
	</body>
			
6. 
	<script>
	function buttonClick(){
				var input = document.getElementById('input');
				input.value = 'Ой, я поменял свой текст!' ;
			}
			
		</script>
	<body>
		<input style="margin-right: 4px; width: 300px;"  type="text" id="input" value="Ку-ку">
		<button onclick="buttonClick()">Нажми на меня!</button>
	</body>
			
7.
	<script> 
			function buttonClick(){
				elem = document.getElementById('image');
				elem.src = '2.jpg';
			}
			
		</script>
	</head>
	<body>
		<img src="1.jpg" width="150" id="image"><br>
		<button onclick="buttonClick()">Нажми на меня!</button>
		
	</body>
			
8. 
<script> 
			function buttonClick(elem){
				alert(elem.value)
			}
</script>
	<body>
		<input type="text" value="Нажмите на меня!" onfocus="buttonClick(this)">
		
	</body>
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