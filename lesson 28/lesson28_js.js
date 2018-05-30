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
	
5. Дан селект со списком стран. Сделайте так, чтобы при выборе страны рядом появлялся еще и селект со списком городов из этой страны.

<body>
		<select id="country" onchange="setCountry()">
			<option value="0">Select Country</option>
			<option value="1">Sweden</option>
			<option value="2">Australia</option>
			<option value="3">Germany</option>
		</select><br><br>
		<select id="setCity" disabled>
			<option>Set City</option>
		</select>
		
		<script>
		var cityList = {};	
			cityList[0] = ['Set City'];
			cityList[1] = ['Stockholm','Lund', 'Malmo','Helsingborg'];
			cityList[2] = ['Sydney',	'Melbourne', 'Brisbane', 'Perth'];
			cityList[3] = ['Berlin', 'Hamburg', 'Dortmund', 'Essen'];
			
			function setCountry(){
			setCity.disabled = false;
			var country = document.getElementById("country");
			var city = document.getElementById("setCity");
			var new_option = country.options[country.selectedIndex].value;
			var countrys = cityList[new_option];
			
			while (city.options.length) {
				city.remove(0);
			}
			
				if (countrys) {
					for (var i = 0; i < countrys.length; i++) {
					var country = new Option(countrys[i],i);
					city.options.add(country);
					}
				}
				
			}
		</script>
	</body>