Задачи на работу с таймерами в JavaScript

1. 	
<style>
			.wrapper {
				text-align: center;
				
			}
			input {
				width: 200px;
			}
			p {
				font-size: 24px;
			}
			
		</style >
	<script> 
	
			function timerClick(){
				var elem = document.getElementById('timer');
				elem.innerHTML = parseInt(elem.innerHTML) + 1;
				
				window.setTimeout(timerClick, 1000);
			}	
			
		</script>
	<body>
	<div class="wrapper">
		<p id="timer"> 0 </p>
		<input type="submit" value="Нажмите на меня!" onclick="timerClick()">	
			</div>
	</body>

2.
<style>
			.wrapper {
				text-align: center;
				
			}
			input {
				width: 200px;
			}
			p {
				font-size: 24px;
			}
			
		</style >
	<script> 
			function stopTimer(){
				document.getElementById('startTimer').disabled = false;
				document.getElementById('stopTimer').disabled = true;
				window.clearInterval(window.timerId);
			}
	
			function timerStart(){
				var elem = document.getElementById('timer');
				document.getElementById('startTimer').disabled = true;
				document.getElementById('stopTimer').disabled = false;
				window.timerId = window.setTimeout(timerStart, 500);
				elem.innerHTML = parseInt(elem.innerHTML) + 1;
			}	
		</script>
	<body>
	<div class="wrapper">
		<p id="timer"> 0 </p>
		<input type="submit" value="Запустить таймер!" onclick="timerStart()" id="startTimer">	
		<input type="submit" value="Остановить таймер!" onclick="stopTimer()" id="stopTimer" disabled>
			</div>
	</body>

3. 
<style>
			.wrapper {
				text-align: center;
				
			}
			p {
				font-size: 40px;
				margin: 0;
			}
		</style >
	<script> 
			function timeNow(){
				var time = document.getElementById('time');
				var date = new Date();
				time.innerHTML = numZero(date.getHours()) + ':' + numZero(date.getMinutes()) + ':' + numZero(date.getSeconds()); 
				window.timerId = window.setInterval(timeNow, 500);
			}
			function numZero(num){
				if (num <= 9) {
					return '0' + num;
				}
				else {
					return num;
				}
			
			}
		</script>
	<body>
	<div class="wrapper">
		<p id="time"> 00:00:00 </p>
			</div>
	</body>
4.

	<style>
			.wrapper {
				text-align: center;

			}
			
			#timestart{
				font-size: 24px;
			}
			
			input {
				width: 200px;
			}
		</style >
	<script> 

			function timeStart(){
				window.timerId = window.setInterval(counter, 300);
				document.getElementById('start').disabled = true;
			}
			function timeOff(){
				window.clearInterval(window.timerId);
			}
			
			function counter(){
				var timestart = document.getElementById('timestart')
				var count = parseInt(timestart.innerHTML) - 1;
				timestart.innerHTML = count;
				if (count == 0) {
					timeOff();
				var timeoff = document.getElementById('timeoff');
				timeoff.innerHTML = 'Обратный отсчет завершен.';
				}
			
			}
			
		</script>
	<body onload="timeNow()">
	<div class="wrapper">
		<p id="timestart"> 10 </p>
		<p id="timeoff"></p>
		<input type="submit" value="Запустите таймер!" onclick="timeStart()" id="start">
			</div>
	</body>

5. 
	<style>
			.wrapper {
				text-align: center;
			}
		</style >
	<script> 
			function slider(){
				window.timerId = window.setInterval(sliderStart, 1000)
			}
			
			function sliderStart(){
				if(window.number == undefined || window.number == 3){
					window.number = 1;
				}
				else 
					window.number = window.number + 1;
					var img = document.getElementById('img');
					img.src = window.number + '.png'
			}
			
		</script>
	<body onload="slider()">
	<div class="wrapper">
			<img src="1.png" id="img">
			</div>
	</body>
			
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
			function birthDay(elem){
				var inputDay = elem.value ;
				var date = new Date();
				var formOut = Date.parse(inputDay)
				var dateNow = Date.parse(String(date.getFullYear()) + '-' + (date.getMonth() + 1) + '-' + date.getDate());
				var res = (formOut - dateNow) / 86400000 ;
				document.getElementById('output').innerHTML = Math.floor(res);
				
			}
		</script>
		</head>
	<body>
		<input type="text" style="width: 500px;" placeholder="Введите дату своего рождения в формате 2014-12-31"  onblur="birthDay(this)">
		<p id="output"> </p>
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
	
