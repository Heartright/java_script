Задачи на основы работы с объектом Event на JavaScript

1. 	
	<body>
		<div id="elem"> </div>
		<script>
			
			window.addEventListener('mousemove', Infomove)
			
			function Infomove(event){
				document.getElementById('elem').innerHTML = 'X:'+event.clientX+' Y:'+event.clientY;
				}
		</script>
	</body>

2. 
	
	<style>
			#elem {
				width: 100px;
				height: 100px;
				border: 1px solid red;
				position: absolute;
				top: 30px;
				left: 0;
			}
			body {
				margin: 0;
			}
			
		</style >
	</head>
	
	<body>
		Нажмите в любое место.
		<div id="elem"> </div>
		<script>
			
			window.addEventListener('click', Infomove)
			
			function Infomove(event){
				var elem = document.getElementById('elem');
				elem.style.left = event.clientX + 'px';
				elem.style.top = event.clientY + 'px';
				}
		</script>
	</body>

3. 

<style>
			#elem {
				width: 100px;
				height: 100px;
				border: 1px solid red;
				position: absolute;
				top: 30px;
				left: 0;
			}
			body {
				margin: 0;
			}
			
		</style >
	</head>
	
	<body>
		Нажмите в любое место.
		<div id="elem"> </div>
		<script>
			
			window.addEventListener('click', Infomove)
			
			function Infomove(event){
				var elem = document.getElementById('elem');
				elem.style.left = (event.clientX - parseInt(window.getComputedStyle(elem, "").width) / 2) + 'px';
				elem.style.top = (event.clientY - parseInt(window.getComputedStyle(elem, "").height) /2) + 'px';
				}
		</script>
	</body>
4. 

<body>
		<input id="input" placeholder="Введите текст" onkeypress="infoKey(event);"><br><br>
		<div>Код нажатой клавиши: <span id="res">?</span></div>
		
		<script>
			var res = document.getElementById('res');

			function infoKey(event) {
			var code = event.keyCode;
			res.innerHTML = code;
			}
		</script>
	</body>
5. 

<body>
		<input id="input" placeholder="Введите текст" onkeypress="infoKey(event);"><br><br>
		<div>Нажатая клавиша: <span id="res">?</span></div>
		
		<script>
			var res = document.getElementById('res');

			function infoKey(event) {
			var key = String.fromCharCode(event.keyCode);
			res.innerHTML = key;
			}
		</script>
	</body>


6. 

<body>
		<input id="button" type="button" value="Нажмите на кнопку">
		
		<script>
		
			var button = document.getElementById('button');
			button.addEventListener('click', keyColor)
			
			function keyColor(event) {
				if(event.ctrlKey) {
					button.style.backgroundColor = "red";
				}
			}
		</script>
	</body>

	
7. 

<body>
		<div id="text">Текст</div>
		
		<script>
		
			var text = document.getElementById('text');
			text.addEventListener('click', keyColor)
			
			function keyColor(event) {
				if(event.ctrlKey) {
					text.innerHTML = "1";
				}
				else if(event.altKey) {
					text.innerHTML = "2";
				}
				else if(event.shiftKey) {
					text.innerHTML = "3";
				}
			}
		</script>
	</body>

8.

<body>
		<input id="input" placeholder="Введите текст" onkeypress="keyPress(event);">
		<p id="text"></p>
		
		<script>
		
			var text = document.getElementById('text');
			var input = document.getElementById('input');
			
			function keyPress(event) {
				var code = event.keyCode;
				if (code == 13){
					text.innerHTML = input.value;
					input.value = "";
				}
			}
		</script>
	</body>