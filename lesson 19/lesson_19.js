Работа с new Date

1. Выведите на экран текущий день.
			var date = new Date();
			document.write(date.getDate());

2.
			var date = new Date();
			document.write(date.getMonth());

3. 
			var date = new Date();
			document.write(date.getFullYear());
	
4.

	<script> 
			var date = new Date();
			function setZero(num) {
				if (num > 0 && num < 10){
					return '0' + num;
				}
				else {
					return num;
				}
			}
			document.write(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' '+ setZero(date.getDate()) + '.' + setZero(date.getMonth() + 1) + '.' + date.getFullYear());
			
		</script>
	<body>

5. 
			var date = new Date();
			document.write(date.getDay());
			
6. 
	var date = new Date();
			var day = date.getDay();
			
			function weekDay(day) {
				var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
				return days[day];
			}
			document.write(weekDay(day));
			
7.
var date = new Date(2015, 0, 7);
			var day = date.getDay();
			
			function weekDay(day) {
				var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
				return days[day];
			}
			document.write(weekDay(day));
			
8. 
<script> 
			function buttonClick(elem){
				alert(elem.value)
			}
</script>
	<body>
		<input type="text" value="Нажмите на меня!" onfocus="buttonClick(this)">
		
	</body>
9. 
var time = Date.parse('1988-03-01T00:00:00');
			
			var date = new Date();
			var now = date.getTime();
			
			var result = now - time;
			result = result / (1000 * 60 * 60);
			document.write(result);
			

10. 
		var date = new Date();
		var now = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0); 		
		var result = Math.floor((date.getTime() - now.getTime()) / 1000);
		document.write(result);
11.
		var date = new Date();
		var end = new Date(date.getFullYear(), date.getMonth(), date.getDay(), 23,59,59);		
		document.write(Math.round((date - end) / 1000));
	
	
12. 
<script> 
			function textClick(){
				var elem = document.getElementsByTagName('a');
				for(var i = 0; i < elem.length; i++){
					elem[i].innerHTML = elem[i].innerHTML + '('+elem[i].getAttribute('href') + ')';
				}
			}
		</script>
	<body>
		<a href="http://google.com">Ссылка 1</a><br><br>
		<a href="http://tut.by">Ссылка 2</a><br><br>
		<a href="http://yandex.ru">Ссылка 3</a><br><br>
		<input type="submit" value="Нажми на меня!" onclick="textClick()">
	</body>
	
13
<script> 
			function textClick(elem1){
				elem1.disabled = true;
				elem1.value = 'О на меня больше нельзя нажать!';
				var elem2 = document.getElementById('text');
				elem2.innerHTML = 'Привет мир!';
				elem2.style.color = 'red';
			}
		</script>
	<body>
		<p id="text">При нажатии на кнопку текст в абзаце поменяется.</p>
		<input style="width: 400px;" type="submit" value="Нажми на меня!" onclick="textClick(this)">
	</body>
	
14
<script> 
			function textClick(){
			var elem = document.getElementsByClassName('text');
				for(var i = 0; i < elem.length; i++ ){
					elem[i].innerHTML = i; 
				}
			}
		</script>
	<body>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<input style="width: 200px;" type="submit" value="Нажмите на меня!" onclick="textClick(this)">
	</body>
	
15 
	<script> 
			function textClick(){
			var elem = document.getElementsByClassName('text');
				for(var i = 0; i < elem.length; i++ ){
					elem[i].innerHTML = i + '. ' + elem[i].innerHTML; 
				}
			}
		</script>
	<body>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<p class="text">Абзац с текстом.</p>
		<input style="width: 200px;" type="submit" value="Нажмите на меня!" onclick="textClick(this)">
	</body>
	
