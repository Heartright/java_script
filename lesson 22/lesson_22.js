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
	
22. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
<body>
		<div>
			<p>Первый элемент</p>
			<p id="elem">Второй элемент</p>
			<p>Третий элемент</p>
		</div>
		
		<script>
			var elem = document.getElementById('elem');
			var elemsub = elem.previousElementSibling;
			elemsub.innerHTML = elemsub.innerHTML + '!';
		</script>	
	</body>
	
23. Дан элемент #elem. Найдите его соседа снизу и добавьте ему в конец текст '!'
<body>
		<div>
			<p>Первый элемент</p>
			<p id="elem">Второй элемент</p>
			<p>Третий элемент</p>
		</div>
		
		<script>
			var elem = document.getElementById('elem');
			var elemsub = elem.nextElementSibling;
			elemsub.innerHTML = elemsub.innerHTML + '!';
		</script>	
	</body>
	
24. Дан элемент #elem. Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.

<body>
		<div>
			<p id="elem">Первый элемент</p>
			<p>Второй элемент</p>
			<p>Третий элемент</p>
		</div>
		
		<script>
			var elem = document.getElementById('elem');
			var elemsub = elem.nextElementSibling.nextElementSibling;
			elemsub.innerHTML = elemsub.innerHTML + '!';
		</script>	
	</body>
	
25. Дан элемент #elem. Найдите его родителя и покрасьте его в красный цвет.

<body>
		<div id="parent"> parent
			<p id="elem">Первый элемент</p>
			<p>Второй элемент</p>
			<p>Третий элемент</p>
		</div>
		
		<script>
				var elem = document.getElementById('elem');
				var parent = elem.parentElement;
				parent.style.color = 'red';
		</script>	
	</body>
	
26. Дан элемент #elem. Найдите родителя его родителя и покрасьте его в красный цвет.

<body>
		<div id="parent"> parent
			<p id="elem">Первый элемент</p>
			<p>Второй элемент</p>
			<p>Третий элемент</p>
		</div>
		
		<script>
				var elem = document.getElementById('elem');
				var parent = elem.parentElement.parentElement;
				parent.style.color = 'red';
		</script>	
	</body>
	
27. Дан элемент #parent, внутри него дан элемент #child. Дана кнопка. По нажатию на эту кнопку удалите элемент #child.

<body>
		<div id="parent"> parent
			<p id="child">Первый элемент</p>
			<p>Второй элемент</p>
			<p>Третий элемент</p>
		</div>
		<input type="submit" id="click">
		<script>
				var elem = document.getElementById('click');
				elem.addEventListener('click', clickRemove);
				
				function clickRemove(){
					var parent = document.getElementById('parent');
					var child = document.getElementById('child');
					parent.removeChild(child); 
				}
		</script>	
	</body>
	
28. Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.

<body>
		<ol id="parent">
			<li>Первый элемент</li>
			<li>Второй элемент</li>
			<li>Третий элемент</li>
		</ol>
		<input type="submit" id="click">
		<script>
				var elem = document.getElementById('click');
				elem.addEventListener('click', clickRemove);
				
				function clickRemove(){
					var parent = document.getElementById('parent');
					parent.removeChild(parent.lastElementChild); 
				}
		</script>	
	</body>

29.  Дан элемент. Сделайте так, чтобы по нажатию по нему этот элемент удалялся.

<body>
		<ol id="elem">Список
			<li>Первый элемент</li>
			<li>Второй элемент</li>
			<li>Третий элемент</li>
		</ol>
		<script>
				var elem = document.getElementById('elem');
				elem.addEventListener('click', clickRemove);
				
				function clickRemove(){
					this.parentElement.removeChild(this);
				}
		</script>	
	</body>
	
30. Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.

<body>
		<ol>Список
			<li>Первый элемент</li>
			<li>Второй элемент</li>
			<li>Третий элемент</li>
		</ol>
		<script>
				var elem = document.getElementsByTagName('li');
				for(var i = 0; i < elem.length; i++ ){
					elem[i].addEventListener('click', clickRemove);
				}
				function clickRemove(){
					this.parentElement.removeChild(this);
				}
		</script>	
	</body>
31. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

<body>
		<input type="submit" value="clone" id="buttonClone">
		<input type="text" id="input">
		<script>
				var buttom = document.getElementById('buttonClone');
				var input = document.getElementById('input');
				
				buttom.addEventListener('click', funcClone);
				
				function funcClone(){
					var clone = input.cloneNode(true);
					input.parentElement.appendChild(clone);
				}
		</script>	
	</body>
	
32. Дан массив. Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, затем вставьте эту ul в конец body.
<body>
	
	<script>
			 var mass = [1, 2, 3, 4, 5];
			 
			 var ul = document.createElement('ul');
			 for (var i = 0; i < mass.length; i++){
				var li = document.createElement('li');
				li.innerHTML = mass[i];
				ul.appendChild(li);
			 }
				document.body.appendChild(ul);
		</script>
	</body>
33. Дан инпут. Рядом с ним находится кнопочка "+". По нажатию на эту кнопку под нашим инпутом должен появится еще один пустой инпут.

	<body>
		<input type="submit" value="+" id="addInput">
		<input type="text">
	<script>
			 var elem = document.getElementById('addInput');
			 elem.addEventListener('click', addInput);
			 
			 function addInput(){
				var parent = elem.parentElement;
				var newInput = document.createElement('input');
				parent.appendChild(newInput);
			 }
		</script>
	</body>
	