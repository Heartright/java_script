1. 
<button onclick="alert('Привет!')">Нажми на меня</button>

2.
<button onmouseover="alert('Привет!')">Наведи на меня</button>

3. 
<button ondblclick="alert('Привет!')">Двойной счелчок по мне</button>
			}
4.
 <div style="height: 300px; width: 300px; border: solid red 1px;" onmouseout="alert('Привет!')">Наведи на меня мышь - а потом убери!</div>

5. 
<script> 
			function buttonClick(){
				var input = document.getElementById('input');
				alert(input.value);
			}
			
</script>
	<body>
		<input type="text" id="input" value="Ку-ку">
		<button style="margin-left: 4px" onclick="buttonClick()">Нажми на меня!</button>
		
	</body>
			
6. 
	<script>
	function buttonClick(){
				var input = document.getElementById('input');
				input.value = 'Ой, я поменял свой текст!' ;
			}
			
		</script>
	<body>
		<input style="margin-right: 4px; width: 300px;"  type="text" id="input" value="Ку-ку">
		<button onclick="buttonClick()">Нажми на меня!</button>
	</body>
			
7.
	<script> 
			function buttonClick(){
				elem = document.getElementById('image');
				elem.src = '2.jpg';
			}
			
		</script>
	</head>
	<body>
		<img src="1.jpg" width="150" id="image"><br>
		<button onclick="buttonClick()">Нажми на меня!</button>
		
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
<script> 
			function buttonClick(elem){
				elem.value='Ой, я поменял текст!'; 
			}
		</script>
<body>
		<input type="text" value="Нажмите на меня!" onfocus="buttonClick(this)">
		
</body>

10. 
	<script> 
			function inputClick(elem){
				elem.value='Ой, я поменял текст!'; 
			}
			function inputClick_2(elem){
				elem.value='Ой, а теперь еще раз поменял!'; 
			}
	</script>
	<body>
		<input style="width: 400px;" type="text" value="Нажмите на меня!" onfocus="inputClick(this)" onblur="inputClick_2(this)">
		
	</body>
11.
		<script> 
			function inputClick(elem){
				elem.value= 'Ку-Ку'; 
			}
		</script>
	<body>
		<p>	Это inpit type="submit".</p>
		
		<input style="width: 300px" type="submit" value="Нажмите на меня!" onfocus="inputClick(this)">
		
	</body>
	
	
12. <script>  
			function inputClick(elem){
				elem.value= 'О, теперь на меня больше не нажать!'
				elem.disabled= true; 
			}
		</script>
	<body>
		<p>	Это inpit type="submit".</p>
		
		<input style="width: 300px" type="submit" value="Нажмите на меня!" onfocus="inputClick(this)">
		
	</body>
	
13
<script> 
			function mouseOver(elem){
				elem.src= '2.jpg';
			}
			function mouseOut(elem){
				elem.src= '1.jpg';
			}
		</script>
	<body>
		
		<img src="1.jpg" width="150" id="test" onmouseover="mouseOver(this)" onmouseout="mouseOut(this)">
		
	</body>
	
14
<script> 
			function buttonClick(){
				elem = document.getElementById('input');
				elem.style.color = 'red';
				elem.style.width = '300px';
			}
		</script>
	<body>
		<input style="margin-right: 4px;" type="text" id="input" value="Ку-ку">
		<button onclick="buttonClick()">Нажми на меня!</button>
		
	</body>
	
15 
		<script> 
			function bottonHide(){
				elem = document.getElementById('input');
				elem.style.display = 'none';
			}
			function buttonShow(){
				elem = document.getElementById('input');
				elem.style.display = 'inline-block';
			}
		</script>
	<body>
		<input style="margin-right: 4px;" type="text" id="input" value="Ку-ку">
		<button style="margin-right: 4px;" onclick="bottonHide()">Нажми на меня!</button>
		<button onclick="buttonShow()">Нажми потом на меня!</button>
	</body>
	
16
function bottonClick(){
				elem = document.getElementById('input');
				elem.value = 'Ой, я поменял свой текст и css!';
				elem.style.height = '50px';
				elem.style.width = '300px';
				elem.style.color = 'red';
				elem.style.borderRadius = '10px';
				
			}
		</script>
	<body>
		<input style="margin-right: 4px;" type="text" id="input" value="Ку-ку"><br><br>
		<button onclick="bottonClick()">Нажми на меня!</button>
		
	</body>
	
17

<script> 
			function submitClick(){
				var elem1 = document.getElementById('block')
				var elem2 = document.getElementById('unblock')
				elem1.value = 'О, теперь на меня больше не нажать!';
				elem1.disabled = true;
				elem2.style.display = 'block';
				
			}
			function submitTwoClick(){
				var elem1 = document.getElementById('block')
				var elem2 = document.getElementById('unblock')
				elem1.value = 'О, на меня снова можно нажать!';
				elem1.disabled = false;
				elem2.style.display = 'none';
				
			}
		</script>
	<body>
		<p>
			Это input type="submit".
		</p>
		<input style="width: 300px;margin-bottom: 10px;" type="submit" id="block" onclick="submitClick(this)" value="Нажми на меня!"><br>
		<input style="display: none; width: 300px;" type="submit" id="unblock"  onclick="submitTwoClick('button')" value="Нажми чтобы отблокировать элемент">
		
	</body>
	
18
<script> 
			function counterClick(elem){
				elem.value = parseInt(elem.value) + 1;
			}
		</script>
	<body>
		<p>
			Кнопка считает кол-во нажатий по ней.
		</p>
		<input style="width: 300px;" type="submit" onclick="counterClick(this)" value="0">
	</body>
19
<script> 
			function moveClick(){
				elem = document.getElementById('input');
				elem.value = 'Теперь я плаваю справа!';
				elem.style.cssFloat = 'right'
			}
		</script>
	<body>
		<input style="margin-right: 4px; width: 300px;" type='text' value="Ку-ку" id="input">
		<button onclick="moveClick()">Нажми на меня!</button>
	</body>
20
<script> 
			function moveClick(){
				elem = document.getElementById('input');
				elem.value = 'Мои css классы: ' + elem.className;
			}
		</script>
	<body>
		<input style="margin-right: 4px; width: 300px;" type='text' value="Ку-ку" id="input" class="eee www ddd">
		<button onclick="moveClick()">Нажми на меня!</button>
	</body>
21
<script> 
			function moveClick(){
				elem1 = document.getElementById('input1');
				elem2 = document.getElementById('input2');
				var tmp = elem1.value;
				elem1.value = elem2.value;
				elem2.value = tmp;
			}
		</script>
	<body>
		<input style="margin-right: 4px;" type='text' value="Привет!" id="input1">
		<input style="margin-right: 4px;" type='text' value="Пока!" id="input2">
		<button onclick="moveClick()">Нажми на меня!</button>
	</body>
	
22
<script> 
			function sqrClick(){
				var elem1 = document.getElementById('input1');
				var value = elem1.value;
				var sgr = document.getElementById('sqr');
				sqr.value = value*value
			}
		</script>
	<body>
	<p>	По нажатию на кнопку в нижнем инпуте появится квадрат числа из верхнего инпута.
	</p>
		<input style="margin-right: 4px; width: 200px" type='text' placeholder="Введите число!" id="input1">
		<input style="margin-right: 4px; width: 200px" type='text' value="Здесь появится результат" id="sqr" disabled>
		<button onclick="sqrClick()">Нажми на меня!</button>
	</body>
	
23
<script> 
			function sqrClick(){
				var elem1 = document.getElementById('input1');
				var value = elem1.value;
				if(!isNaN(value)){
				var sgr = document.getElementById('sqr');
				sqr.value = value*value;
				}
				else {
					alert('Введено не число!')
				}
			}
		</script>
	<body>
	<p>	По нажатию на кнопку в нижнем инпуте появится квадрат числа из верхнего инпута. Если введено не число - должна показаться ошибка.
	</p>
		<input style="width: 200px" type='text' value="" placeholder="Введите число!" id="input1"><br><br>
		<input style="width: 200px" type='text' value="Здесь появится результат" id="sqr" disabled><br><br>
		<button onclick="sqrClick()">Нажми на меня!</button>
	</body>
	
24
<script> 
			function lockClick(elem){
				elem.disabled = true;
				elem.style.cursor = 'not-allowed';
			}
		</script>
	<body>
	<p>	Обратите внимание на курсор в различных состояниях
	</p>
		<input type='submit' onclick="lockClick(this)" value="Нажми на меня!" id="input1">
	</body>