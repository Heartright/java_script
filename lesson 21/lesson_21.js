Продвинутая работа с событиями в JavaScript

1. Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на картинку алертом выводился ее src.
<body>
		<img src="1.png">
		<img src="2.png">
		<img src="3.png">
<script> 
		var elems = document.getElementsByTagName('img');
			for (var i = 0; i < elems.length; i++) {
			elems[i].onclick = func;
			}

			function func() {
			alert(this.getAttribute('src'));
		}
	</script>		
	</body>

2. Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в атрибут title запишется ее текст.
<body>
		<a href="#" title="">Первая ссылка</a><br>
		<a href="#" title="">Вторая ссылка</a><br>
		<a href="#" title="">Третья ссылка</a>
<script> 
		var elems = document.getElementsByTagName('a');
			for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('mouseover', linkhref);
			}

			function linkhref() {
				this.title = this.innerHTML;
		}
	</script>		
	</body>

3. 
<body>
		<a href="http://google.com" title="">Первая ссылка</a><br>
		<a href="http://ya.ru" title="">Вторая ссылка</a><br>
		<a href="http://mail.ru" title="">Третья ссылка</a>
<script> 
		var elems = document.getElementsByTagName('a');
			for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('mouseover', linkhref);
			}

			function linkhref() {
				this.innerHTML = this.innerHTML + '(' + this.href + ')';
		}
4.
<body>
		<a href="http://google.com" title="">Первая ссылка</a><br>
		<a href="http://ya.ru" title="">Вторая ссылка</a><br>
		<a href="http://mail.ru" title="">Третья ссылка</a>
<script> 
		var elems = document.getElementsByTagName('a');
			for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('mouseover', linkhref);
			}

			function linkhref() {
				this.innerHTML = this.innerHTML + '(' + this.href + ')';
				this.removeEventListener('mouseover', linkhref);
		}

5. 
		<body>
		<input type="text" value="input1">
		<input type="text" value="input2">
		<input type="text" value="input3">
		<p id="test"></p>
<script> 
		var elems = document.getElementsByTagName('input');
		var elems2 = document.getElementById('test');
			for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('click', linkhref);
			}

			function linkhref() {
				elems2.innerHTML = this.value;
		}
	</script>	
			
6. 
		var elems = document.getElementsByTagName('input');
			for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('click', linkhref);
			}

			function linkhref() {
				alert(this.value);
				this.removeEventListener('click', linkhref )
		}
			
7.
<body>
		<p>2</p>
		<p>3</p>
		<p>4</p>
<script> 
		var elems = document.getElementsByTagName('p');
			for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('click', linkhref);
			}

			function linkhref() {
				this.innerHTML = this.innerHTML * this.innerHTML;
		}
	</script>		
	</body>
			
8. 
	<body>
		<input type="text" data-length="2">
		<input type="text" data-length="5">
		<input type="text" data-length="3">
<script> 
		var elems = document.getElementsByTagName('input');
			for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('blur', linkhref);
			}

			function linkhref() {
				var corLength = this.dataset.length;
				var inputLength = this.value.length;
				if (corLength == inputLength ){
					this.style.borderColor = 'green';
				} 
				else {
					this.style.borderColor = 'red';
				}	
		}
	</script>		
	</body>
9. 
<style>
			div {
			border: 2px solid black;
			width: 100px;
			height 100px;
			margin-top: 10px;
		}
		</style >
	
	</head>
	<body>
		<div>Text 1</div>
		<div>Text 2</div>
		<div>Text 3</div>
<script> 
			var elems = document.getElementsByTagName('div');
			for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('click', clickRed);
			}
			
			function clickGreen() {
				this.style.background = 'green';
				this.removeEventListener('click', clickGreen);
				this.addEventListener('click', clickRed);
			}
			function clickRed() {
				this.style.background = 'red';
				this.removeEventListener('click', clickRed);
				this.addEventListener('click', clickGreen);
			}
			
	</script>		
	</body>
			

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
	
