Задачи на работу с метриками на JavaScript

1. Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его верхней границы.
	<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
	
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert(elem.clientTop);
			}
		</script>
		
	</body>

2. Дан элемент #elem с границами. По нажатию на кнопку выведите толщину его левой границы.
	<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert(elem.clientLeft);
			}
		</script>
	</body>

3. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину с учетом границы и padding.

	<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert(elem.offsetWidth);
			}
		</script>
	</body>
	
4. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту с учетом границы и padding.
	
	<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert(elem.offsetHeight);
			}
		</script>
	</body>

5. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную ширину без учета границы, но с padding.
	
	<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert(elem.clientWidth);
			}
		</script>
	</body>
			
6. Дан элемент #elem с границами. По нажатию на кнопку выведите его полную высоту без учета границы, но с padding.
	
	<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert(elem.clientHeight);
			}
		</script>
	</body>
			
7. Дан элемент #elem. Получите его ширину и высоту, без учета границы и padding.

<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert(getComputedStyle(elem).height + getComputedStyle(elem).width);
			}
		</script>
	</body>
			
8. Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен сверху.

<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert('scrollTop: ' + elem.scrollTop);
			}
		</script>
	</body>
	
9. Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите на сколько элемент прокручен слева.

<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert('scrollLeft: ' + elem.scrollLeft);
			}
		</script>
	</body>
	
10. Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px сверху.

<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				elem.scrollTop = 100;
			}
		</script>
	</body>
	
11. Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его на 100px вниз от текущего положения.

<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				elem.scrollTop += 100;
			}
		</script>
	</body>
	
12. Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку выведите реальную высоту элемента с учетом прокрутки.

<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert('scrollHeight: ' + elem.scrollHeight);
			}
		</script>
	</body>
	
13. Дан элемент #elem с горизонтальной полосой прокрутки. По нажатию на кнопку выведите реальную ширину элемента с учетом прокрутки. 

<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert('scrollWidth: ' + elem.scrollWidth);
			}
		</script>
	</body>
	
14. Дан элемент #elem с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите его до позиции 100px от нижнего края элемента.
	
	<style>
			#elem {
				width: 150px;
				height: 150px;
				padding: 30px;
				border: 10px solid #BCBCBC;
				overflow: auto;	
			}
			input {
				margin-top: 20px;
			}
		</style >
	</head>
	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				var height = elem.scrollHeight;
				var height_after_scroll = height - 100;
				elem.scrollTop = height_after_scroll;
			}
		</script>
	</body>

15. Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по вертикали.

	<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert(pageYOffset);
			}
		</script>
	</body>

16. Дана страница с горизонтальной полосой прокрутки. По нажатию на кнопку узнайте на сколько страница прокручена по горизонтали.

		<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<input type="submit" id="infoButton" value="нажми на меня">

		<script>
			var elem = document.getElementById('elem');
			var click = document.getElementById('infoButton');
			click.addEventListener('click', infoClick);
			
			function infoClick(){
				alert(pageXOffset);
			}
		</script>
	</body> 
	
17. Дана страница с горизонтальной и вертикальной полосами прокрутки. По нажатию на кнопку прокрутите ее в точку 300px слева, 500px сверху.

		<script>
			var click = document.getElementById('infoButton');
			click.addEventListener('click', moveClick);
			
			function moveClick(){
				window.scrollTo(300, 500);
			}
		</script>
	
18. Дана страница с вертикальной полосой прокрутки. По нажатию на кнопку прокрутите на 300px вниз от текущего положения.
	
	<script>
			var click = document.getElementById('infoButton');
			click.addEventListener('click', moveClick);
			
			function moveClick(){
				window.scrollBy(0, 300);
			}
		</script>

		
19. По нажатию на кнопку прокрутите страницу до самого низа.

	<script>
			var click = document.getElementById('infoButton');
			click.addEventListener('click', moveClick);
			
			function moveClick(){
				window.scrollTo(0, document.body.clientHeight);
			}
	</script>
		
20. По нажатию на кнопку прокрутите страницу на 400px от текущего положения.

	<script>
			var click = document.getElementById('infoButton');
			click.addEventListener('click', moveClick);
			
			function moveClick(){
				window.scrollBy(0, 400);
			}
	</script>

21. По нажатию на кнопку проверьте, прокручена ли страница до самого низа. Если это так - прокрутите ее в положение 100px от верхнего края.

<script>
			var click = document.getElementById('infoButton');
			click.addEventListener('click', moveClick);
			
			function moveClick(){
				var moveUp = document.documentElement;
				if(moveUp.scrollHeight - moveUp.scrollTop == moveUp.clientHeight){
					window.scroll(0, 100);
				}
			}
		</script>
	
22. Дан элемент #elem. По клику на него увеличьте его ширину и высоту в 2 раза.
<body>
		<div id="elem">
			Lorem ipsum dolorsit amet consectetur adipiscing elit. Sed viverra mollis lorem, fringilla dapibus nisi commodo interdum. Vivamus in turpis quis purus dapibus aliquam id nec velit. In at aliquet sem, a rutrum neque. Vestibulum posuere lobortis accumsan. Etiam non tincidunt erat, vel condimentum turpis.
		</div>
		<script>
			
			var elem = document.getElementById('elem');
			elem.addEventListener('click', ClickZise);
			
			function ClickZise(){
				var def_width = this.offsetWidth;
				var def_height = this.offsetHeight;
				this.style.width = def_width * 2 + 'px';
				this.style.height = def_height * 2 + 'px';
				}
		</script>
	</body>