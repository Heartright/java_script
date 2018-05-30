Задачи на разные полезные темы JavaScript

1.  Дана форма с id="form". В ней даны инпуты, в них числа. Дана кнопка. По нажатию на эту кнопку получите форму по ее id, затем циклом переберите все инпуты в ней и найдите сумму чисел из этих инпутов.
	
<body>
		<form id="form">
			<input value="2"><br><br>
			<input value="5"><br><br>
			<input value="3"><br><br>
		</form>
		
		<button id="button" onclick="sumInput()">Посчитать сумму</button><br><br>
		<input id="test" placeholder="Сумма">
		<script>
			function sumInput() {
				var sum_Input = document.forms.form;	
				var sum = 0;
				for (var i = 0; i < sum_Input.length; i++ ) {
					sum += Number(sum_Input[i].value);
				}
				document.getElementById('test').value = sum;
			}
		</script>
	</body>

2. На странице расположено несколько форм. В них есть инпуты, в инпутах числа. Дана кнопка. По нажатию на эту кнопку циклом переберите все формы на странице, затем циклом переберите все инпуты в каждой форме и найдите сумму чисел из всех этих инпутов.
	<body>
		<form>
			Форма № 1<br>
			<input value="2"><br><br>
			<input value="5"><br><br>
			<input value="3"><br><br>
		</form>
		<form>
			Форма № 2<br>
			<input value="2"><br><br>
			<input value="5"><br><br>
			<input value="3"><br><br>
		</form>
		
		<button id="button" onclick="sumInput()">Посчитать сумму</button><br><br>
		<input id="test" placeholder="Сумма">
		<script>
			function sumInput() {
				var sum = 0;
				for (var i = 0; i < document.forms.length; i++ ) {
						var sum_Input = document.forms[i].elements;
					for (var j = 0 ; j < sum_Input.length; j++){
						sum += Number(sum_Input[j].value);
					}
				}
				document.getElementById('test').value = sum;
			}
		</script>
	</body>

3. Дан селект. Дан инпут. По изменению селекта выведите текст выбранного пункта в инпут.

<body>
		<select id="text" onchange="change()">
			<option>Текст 1</option>
			<option>Текст 2</option>
			<option>Текст 3</option>
		</select>
		<input type="text" id="input">
	
		<script>
			function change() {
				var elem = document.getElementById('text');
				k = elem.selectedIndex;
				document.getElementById('input').value = elem.options[k].text;
			}
		</script>
	</body>
4. Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести число, нажать на кнопку и в селекте становился выбранным пункт с этим номером.

	<body>
		<select id="text" >
			<option>text 1</option>
			<option>text 2</option>
			<option>text 3</option>
		</select><br><br>
		<input type="text" id="input" placeholder="Set option"><br><br>
		<button id="change" onclick="changeOption()" >Change option</button>
		<script>
			function changeOption() {
				var elem = document.getElementById('text');
				input = document.getElementById('input');
				elem.selectedIndex = input.value-1;
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