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

function summaClick(){
				var num1 = +document.getElementById('num1').value;
				var num2 = +document.getElementById('num2').value;
				var summ = document.getElementById('summ');
				summ.innerHTML = num1 + num2;
			}
		</script>
	<body>
		<input type="text" value="" id="num1">
		+
		<input type="text" value="" id="num2">
		=
		<span id="summ">?</span><br><br>
		<button style="width: 200px;" onclick="summaClick()">Нажмите чтобы сложить</button>
	</body>

5. 
<script> 
			function textClick(){
				var elem = document.getElementsByTagName('p');
				for(var i = 0; i < elem.length; i++){
					elem[i].innerHTML = 'Ку-Ку!';
				}
			}
		</script>
	<body>
		<p>При нажатии на кнопку текст в каждом абзаце поменяется.</p>
		<p>При нажатии на кнопку текст в каждом абзаце поменяется.</p>
		<p>При нажатии на кнопку текст в каждом абзаце поменяется.</p>
		<p>При нажатии на кнопку текст в каждом абзаце поменяется.</p>
		<h2>А я h2 и не поменяюсь!</h2>
		<input type="submit" style="width: 200px;" onclick="textClick()" value="Нажмите на меня!">
	</body>
			
6. 
	<script> 
			function textClick(){
				var elem = document.getElementsByClassName('www');
				for(var i = 0; i < elem.length; i++){
					elem[i].innerHTML = i + 1;
				}
			}
		</script>
	<body>
		<h2 class="www">Заголовок с классом www.</h2>
		<p class="www">Абзац с классом www.</p>
		<p class="www">Абзац с классом www.</p>
		<p>Просто абзац, не поменяется.</p>
		<input type="submit" style="width: 200px;" onclick="textClick()" value="Нажмите на меня!">
	</body>
			
7.
	<script> 
			function textClick(){
				var elem = document.getElementById('elem');
				alert(elem.getAttribute('class'));
				}
		</script>
	<body>
		<p id="elem" class="my-class">Абзац с class="my-class".</p>
		<input type="submit" style="width: 300px;" onclick="textClick()" value="Нажми - и я выведу класс абзаца.">
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
9. 
<style>
			.my-class {
				color: red;
			}
			input {
				width: 400px;
			}
</style >

<script> 
			function textClick(){
				var elem = document.getElementById('elem');
				alert(elem.getAttribute('class'));
				}
			function delClick(){
				var elem = document.getElementById('elem');
				elem.removeAttribute('class');
				alert('Класс удален! Нажмите на первую кнопку чтобы проверить это!')
				}
		</script>
	<body>
		<p id="elem" class="my-class">Абзац с class="my-class". Класс задает красный цвет.</p>
		<input type="submit" onclick="textClick()" value="Нажми - и я выведу класс абзаца."><br><br>
		<input type="submit" onclick="delClick()" value="Нажми - и я удалю атрибут class для абзаца.">
	</body>

10. 
		<style>
			.my-class {
				color: red;
			}
			input {
				width: 400px;
			}
		</style >
		
	<script> 
			function textClick(){
				var elem = document.getElementById('elem');
				alert(elem.getAttribute('class'));
				}
			function delClick(){
				var elem = document.getElementById('elem');
				elem.setAttribute('class', 'new-class');
				alert('Класс изменен! Нажмите на первую кнопку чтобы проверить это!')
				}
		</script>
	<body>
		<p id="elem" class="my-class">Абзац с class="my-class class". Класс "my-class" задает красный цвет.</p>
		<input type="submit" onclick="textClick()" value="Нажми - и я выведу класс абзаца."><br><br>
		<input type="submit" onclick="delClick()" value="Нажми - и я изменю атрибут class для абзаца на 'new-class'.">
	</body>
11.
	<script> 
			function textClick(elem){
				var text = document.getElementById('text');
				text.innerHTML = elem.value;
			}
		</script>
	<body>
		<input type="text" value="" placeholder="Введите в меня текст!" onkeyup="textClick(this)">
		<span id="text"></span>
	</body>
	
	
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
	
