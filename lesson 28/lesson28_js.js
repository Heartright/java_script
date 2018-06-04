Практика JavaScript для новичков

1. Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут.
	
<body>
		<form id="counts">
			<input placeholder="Введите число" value=""><br><br>
			<input placeholder="Введите число" value=""><br><br>
			<input placeholder="Введите число" value=""><br><br>
		</form>
		<input placeholder="Сумма" id="summa">
		<button id="clickSum" onclick="clickSumma()">Посчитать сумму</button>
		
		<script>
			function clickSumma() {
				var count = document.forms.counts;
				sum = 0;
				for(var i = 0; i < count.length; i++){
					sum += Number(count[i].value);
				}
				
					document.getElementById('summa').value = sum;
			}			
		</script>
	</body>

2. Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result".
	<body>
			<input placeholder="Введите число" value="" class="num"><br><br>
			<input placeholder="Введите число" value="" class="num"><br><br>
			<input placeholder="Введите число" value="" class="num"><br><br>
				<p id="result"></p>
		<button id="clickSum" onclick="clickSumma()">Посчитать сумму</button>
		
		<script>
			function clickSumma() {
				var num = document.getElementsByClassName('num');
				sum = 0;
				for(var i = 0; i < num.length; i++){
					sum += Number(num[i].value);
				}
				var result = document.getElementById('result');
				result.innerHTML = sum;
			}			
		</script>
	</body>

3. Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

<body>
			<input placeholder="Введите число" value="" id="num" onblur="clickSumma()">
				<p id="result"> </p>
		<script>
		
			function clickSumma() {
				var num = document.getElementById('num');
				var sum = 0;
				var str = num.value;
				var array = str.split('');
				
				for(var i = 0; i < array.length; i++){
					sum += Number(array[i]);
				}
				var result = document.getElementById('result');
				result.innerHTML = sum;
			}			
		</script>
	</body>
	
4. Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

	<body>
			<input placeholder="Введите число" value="" id="num" onblur="clickSumma()">
				<p id="result"> </p>
		<script>
		
			function clickSumma() {
				var num = document.getElementById('num');
				var sum = 0;
				var str = num.value;
				var array = str.split(',');
				
				for(var i = 0; i < array.length; i++){
					sum += Number(array[i]);
				}
				var result = document.getElementById('result');
				result.innerHTML = sum / array.length;
			}			
		</script>
	</body>
	
5. Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты.

<body> 

		<input id="input" type="text" placeholder="Ввидите ФИО" onblur="input_fio()"><br><br>
		
			<input id="second_name" type="text">
			<input id="first_name" type="text">
			<input id="last_name" type="text">
	
			<script>
				var input = document.getElementById('input');
				var second_name = document.getElementById('second_name');
				var first_name = document.getElementById('first_name');
				var last_name = document.getElementById('last_name');

				function input_fio() {
						var array = input.value.split(' ');
						second_name.value = array[0];
						first_name.value = array[1];
						last_name.value = array[2];
					}
			</script>
	</body>
6. Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).

<body> 

		<input id="input" type="text" placeholder="Ввидите ФИО" onblur="upWords()"><br><br>
		
		<script>
		
			function upWords() {
					var full = document.getElementById('input');
					var array = full.value.split(' ');
						for (var i = 0; i < array.length; i++) {
						array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
					}
						full.value = array.join(' ');
					}
				
				
		</script>
	</body>
7. Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

<body> 

		<input id="input" type="text" placeholder="Ввидите ФИО" onblur="upWords()"><br><br>
		
		<script>
		
			function upWords() {
					var full = document.getElementById('input');
					var array = full.value.split(' ');
						for (var i = 0; i < array.length; i++) {
						array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
					}
						full.value = array.join(' ');
					}
				
				
		</script>
	</body>

8. Дан инпут. В него вводится текст. По потери фокуса узнайте количество символов в самом длинном слове в этом тексте.

<body> 

		<input id="input" type="text" placeholder="Ввидите ФИО" onblur="upWords()">
		
		<p id="result"></p>
		<script>
		
			function upWords() {
					var input = document.getElementById('input');
					var result = document.getElementById('result');
					var maxsym = 0;
					var array = []; 
					var str = input.value;
					var arraystr = str.split(' ')
					
					
				for (var i = 0; i < arraystr.length; i++ ){
						var num = 0;
						array = arraystr[i].split('');
						
					for(var j = 0; j < array.length; j++){
						 num += 1;
					}
					if( num > maxsym ){
						maxsym = num;
					}
				}
					result.innerHTML = maxsym;
				}
		</script>
	</body>
9 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

<body> 

		<input id="input" type="text" placeholder="" onblur="dataform()">
		
		<script>
			
			function dataform() {
			var input = document.getElementById('input');
				var str = input.value;
				var array = str.split('.');
				var arrayNewData = [];				
				var arrayNewData = array.reverse();
				var strNewData = arrayNewData.join('-');
				input.value = strNewData;
			}
			
		</script>
	</body>