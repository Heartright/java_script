Задачи на продвинутую работу с DOM на JavaScript

1. Дан элемент #elem. Добавьте ему класс www.
	<body>
			<p id="elem">Text 1</p>
		<script> 
			var elem = document.getElementById('elem');
			elem.classList.add('www');
		</script>	
	</body>

2. Дан элемент #elem. Удалите у него класс www.
	<body>
			<p id="elem" class="www">Text 1</p>
		<script> 
			var elem = document.getElementById('elem');
			elem.classList.remove('www');
		</script>	
	</body>

3. Дан элемент #elem. Проверьте наличие у него класса www.

	<body>
			<p id="elem" class="www">Text 1</p>
		<script> 
			var elem = document.getElementById('elem');
			var alertElem = elem.classList.contains('www');
			alert(alertElem);  
		</script>
	</body>
	
4. Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.
	<body>
		<p id="elem" class="www">Text 1</p>
		
		<script> 
			var elem = document.getElementById('elem');
			elem.classList.toggle('www');
			
		</script>	
	</body>

5. Дан элемент #elem. Узнайте количество его классов.
	<body>
		<p id="elem" class="www yyy">Text 1</p>
		
		<script> 
			var elem = document.getElementById('elem');
			var length = elem.classList.length;
			document.write(length);
			
		</script>	
	</body>
			
6. Дан элемент #elem. Выведите последовательно алертом его классы.
	<body>
			<p id="elem" class="www yyy zzz">Классы:</p>
		
		<script> 
			var elem = document.getElementById('elem');
			var className = elem.classList;
			
			for(var i = 0; i < className.length; i++){
				document.write(className[i] + '<br>');
			}		
		</script>	
	</body>
			
7. Дан элемент #elem. Сделайте его красного цвета, размером 30px, добавьте ему границу. Решите задачу с помощью свойства cssText.
<body>
		<p id="elem" class="www yyy zzz">Text 1</p>
		
		<script> 
			var elem = document.getElementById('elem');
			elem.style.cssText = 'color: red; font-size: 30px; border: 1px solid red;'
		</script>	
	</body>
			
8. Дан элемент #elem. По клику на него выведите название его тега.

<body>
		<div id="elem" onclick="clickElem()">Text 1</div>
		
		<script> 
			function clickElem(){
				var elem = document.getElementById('elem');
				alert(elem.tagName);
			}
		</script>	
	</body>
	
9. Дан элемент #elem. По клику на него выведите название его тега в нижнем регистре.

<body>
		<div id="elem" onclick="clickElem()">Text 1</div>
		
		<script> 
			function clickElem(){
				var elem = document.getElementById('elem');
				alert(elem.tagName.toLowerCase());
			}
		</script>	
	</body>
10. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
<body>
		<div id="elem" onclick="clickElem()">Text 1</div>
		
		<script> 
			function clickElem(){
				var elem = document.getElementById('elem');
				alert(elem.tagName.toLowerCase());
			}
		</script>	
	</body>
	
11. Дан ol. Вставьте ему в конец li с текстом 'пункт'.

<body>
		<ol id="parent"> </ol>
		
		
		<script>
			var parent = document.getElementById('parent');
			var li = document.createElement('li');
			li.innerHTML = 'пункт';
			parent.appendChild(li);
			
		</script>	
	</body>
	
12. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.

<body>
		<ul id="parent"></ul>
		
		
		<script>
			var parent = document.getElementById('parent');
			var array = [1, 2, 3, 4, 5];
				for (var i = 0; i < array.length; i++) {
			var li = document.createElement('li');
				li.innerHTML = array[i];
				parent.appendChild(li);
			}
		
		</script>	
	</body>
13. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы к вставляемым li было привязано следующее событие: по нажатию на li она должна вывести на экран свой текст.

<body>
		<ul id="parent"></ul>
		
		<script>
			var ul = document.getElementById('parent');
			var array = [1, 2, 3, 4, 5];
			for (var i = 0; i < array.length; i++) {
			var li = document.createElement('li');
			li.innerHTML = array[i];
			li.addEventListener('click', clickF )
			ul.appendChild(li);
			}
			
			function clickF(){
				alert(this.innerHTML);
			}
			
		</script>	
	</body>
	
14. Дан элемент ul, а в нем li #elem. Вставьте перед элементом #elem новую li с текстом '!!!'. 

<body>
		<ul id="parent">
			<li>Элемент списка</li>
			<li id="elem"></li>
			<li>Элемент списка</li>
		</ul>
		
		<script>
			var parent = document.getElementById('parent');
			var elemli = document.getElementById('elem');
			
			var li = document.createElement('li');
			li.innerHTML = '!!!';
			
			parent.insertBefore(li, elemli);
		
		</script>	
	</body>
	
15. Дан элемент #elem. Вставьте перед ним span с текстом '!!!'.
	
	<body>
		<p id="elem">Text</p>
		
		<script>
			var elem = document.getElementById('elem');
			elem.insertAdjacentHTML('beforeBegin', '<span>!!!</span>');
		</script>	
	</body>

16. Дан элемент #elem. Вставьте после него span с текстом '!!!'.

	<body>
		<p id="elem">Text</p>
		
		<script>
			var elem = document.getElementById('elem');
			elem.insertAdjacentHTML('afterEnd', '<span>!!!</span>');
		</script>	
	</body>

17. Дан элемент #elem. Вставьте ему в начало span с текстом '!!!'.

	<body>
		<p id="elem">Text</p>
		
		<script>
			var elem = document.getElementById('elem');
			elem.insertAdjacentHTML('afterBegin', '<span>!!!</span>');
		</script>	
	</body>
18. Дан элемент #elem. Вставьте ему в конец span с текстом '!!!'.

<body>
		<p id="elem">Text</p>
		
		<script>
			var elem = document.getElementById('elem');
			elem.insertAdjacentHTML('beforeEnd', '<span>!!!</span>');
		</script>	
	</body>
	
19. Дан элемент #elem. Найдите первого потомка этого элемента и сделайте его текст красного цвета.

	<body>
		<div id="elem">
			<p>Первый элемент</p>
			<p>Второй элемент</p>
			<p>Третий элемент</p>
		</div>
		
		<script>
			var elem = document.getElementById('elem');
			elem.firstElementChild.style.color = 'red';
		</script>	
	</body>

20. Дан элемент #elem. Найдите последнего потомка этого элемента и сделайте его текст красного цвета.

	<body>
		<div id="elem">
			<p>Первый элемент</p>
			<p>Второй элемент</p>
			<p>Третий элемент</p>
		</div>
		
		<script>
			var elem = document.getElementById('elem');
			elem.lastElementChild.style.color = 'red';
		</script>	
	</body>

21. Дан элемент #elem. Найдите всех потомков этого элемента и добавьте им в конец текст '!'.

<body>
		<div id="elem">
			<p>Первый элемент</p>
			<p>Второй элемент</p>
			<p>Третий элемент</p>
		</div>
		
		<script>
			var elem = document.getElementById('elem');
			for(i = 0; i < elem.children.length; i++){
				elem.children[i].innerHTML += '!';
			}
		</script>	
	</body>