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
			
6. <style>
			.wrapper{
				text-align: center;
			}
			p {
				font-size: 24px;
			}
			input {
				width: 200px;
			}
			
		</style >
	<script> 
			function slider(){
				window.timerId = window.setInterval(sliderStart, 1000);
				document.getElementById('slider').disabled = true;
			}
			function sliderStart(){
				var img1 = document.getElementById('img1');
				var img2 = document.getElementById('img2');
				var img3 = document.getElementById('img3');
				var tmp = img1.src;
				img1.src = img2.src;
				img2.src = img3.src;
				img3.src = tmp;
			}
		</script>
	<body>
	<div class="wrapper">
			<img src="1.png" id="img1">
			<img src="2.png" id="img2">
			<img src="3.png" id="img3"><br><br>
			<input type="submit" value="Запустить карусель!" onclick="slider()" id="slider">
			</div>
	</body>
			
7.
	<style>
			.wrapper{
				text-align: center;
			}
			p {
				font-size: 24px;
			}
			input {
				width: 200px;
			}
			
		</style >
	<script> 
			function sliderOn(){
				window.timerId = window.setInterval(sliderStart, 1000);
				document.getElementById('sliderOn').disabled = true;
				document.getElementById('sliderOff').disabled = false;
			}
			function sliderOff() {
				window.clearInterval(window.timerId);
				document.getElementById('sliderOn').disabled = false;
				document.getElementById('sliderOff').disabled = true;
			}
			function sliderStart(){
				var img1 = document.getElementById('img1');
				var img2 = document.getElementById('img2');
				var img3 = document.getElementById('img3');
				var img4 = document.getElementById('img4');
				var img5 = document.getElementById('img5');
				var img6 = document.getElementById('img6');
				var tmp = img1.src;
				img1.src = img2.src;
				img2.src = img3.src;
				img3.src = img4.src;
				img4.src = img5.src;
				img5.src = img6.src;
				img6.src = tmp;	
			}
		</script>
	<body>
	<div class="wrapper">
			<img src="1.png" id="img1">
			<img src="2.png" id="img2">
			<img src="3.png" id="img3">
			<img src="4.png" id="img4">
			<img src="5.png" id="img5">
			<img src="6.png" id="img6"><br><br>
			<input type="submit" value="Запустить карусель!" onclick="sliderOn()" id="sliderOn">
			<input type="submit" value="Остановить карусель!" onclick="sliderOff()" id="sliderOff" disabled>
			</div>
	</body>
			
8. 
	<style>
			.wrapper{
				text-align: center;
			}
			table  {
				margin: 0 auto;
			}
			td, th {
				height: 30px;
				width: 100px;
			}
			input {
				width: 200px;
			}
			
		</style >
	<script> 
			function timeOn(){
				window.timerId = window.setInterval(timeOn, 500);
				var hours = document.getElementById('hours');
				var minutes = document.getElementById('minutes');
				var second = document.getElementById('seconds');
				var timeNow = new Date();
				var mdnt = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate() + 1, 0, 0, 0);
				var diff = Math.floor((mdnt - timeNow) / 1000);
				var resthourse = Math.floor(diff/(60 * 60));
				var restminutes = Math.floor((diff - resthourse * 60 * 60) / 60);
				var restseconds = Math.floor(diff % 60);
				hours.innerHTML = resthourse;
				minutes.innerHTML = addZero(restminutes);
				seconds.innerHTML = addZero(restseconds);
			}
			function addZero(num){
				if (num <= 9 ){
				return '0' + num;
				}
				else {
					return num;
				}
			}
		</script>
	<body onload="timeOn()">
		<div class="wrapper">
		<p>До полуночи осталось: </p>
		<table border="1" cellpadding="0" cellspacing="0">
			<tr> 
				<th>Часы</th>
				<th>Минуты</th>
				<th>Секунды</th>
			</tr>
			
			<tr> 
				<td id="hours"></td>
				<td id="minutes"></td>
				<td id="seconds"></td>
			</tr>
		</table>
		</div>
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
	
