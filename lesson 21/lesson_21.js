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

3. Привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее href в круглых скобках.
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
4. Дополните предыдущую задачу: после первого наведению на ссылку следует отвязать от нее событие, которое добавляет href в конец текста. 
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

5. Привяжите всем инпутам следующее событие - по потери фокуса каждый инпут выводит свое value в абзац с id="test".
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
			
6. Для всех инпутов сделайте так, чтобы они выводили свой value алертом при нажатии на любой из них, но только по первому нажатию. Повторное нажатие на инпут не должно вызывать реакции.
		var elems = document.getElementsByTagName('input');
			for (var i = 0; i < elems.length; i++) {
			elems[i].addEventListener('click', linkhref);
			}

			function linkhref() {
				alert(this.value);
				this.removeEventListener('click', linkhref )
		}
			
7. Даны абзацы с числами. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит.
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
			
8. Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то граница инпута становится зеленой, если неправильное - красной.
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
9. Даны дивы. По первому нажатию на каждый див он красится красным фоном, по второму красится обратно и так далее каждый клик происходит чередование фона. Сделайте так, чтобы было две функции: одна красит в красный цвет, другая в зеленый и они сменяли друг друга через removeEventListener.
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