Задачи на работу с метриками для window на JavaScript

1. Дана кнопка. По нажатию на эту кнопку выведите высоту окна браузера.
	
	<body>
		<input type="submit" id="elem" value="Нажми на меня">
		<script>
			
			var elem = document.getElementById('elem');
			elem.addEventListener('click', clickInfo);
			
			function clickInfo(){
					alert(window.innerHeight);
				}
		</script>
	</body>

2. Дана кнопка. По нажатию на эту кнопку прокрутите окно браузера до самого низа.
	
	<script>
			
			var elem = document.getElementById('elem');
			elem.addEventListener('click', clickInfo);
			
			function clickInfo(){
					var h_window = window.innerHeight;
					window.scrollBy(0, h_window);
				}
		</script>

3. Дана кнопка. По нажатию на эту кнопку узнайте, есть ли у окна браузера вертикальная прокрутка.

	<body>
		
		<input type="submit" id="elem" value="Нажми на меня"><p>
		<script>
			
			var elem = document.getElementById('elem');
			elem.addEventListener('click', clickInfo);
			
			function clickInfo(){
					alert('Текущая прокрутка сверху: ' + window.pageYOffset);
				}
		</script>
	</body>
	
