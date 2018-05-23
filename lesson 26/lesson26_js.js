Задачи на продвинутую работу с объектом Event на JavaScript

1. Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).
	
	<body>
		<ul id="ul">
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
		<input type="submit" value="Добавить новый пункт" id="button">
		
		<script>
			var ul = document.getElementById('ul');
			var button = document.getElementById('button');
			var li = document.createElement('li');
			
			ul.addEventListener('click', clickAdd);
			button.addEventListener('click', add_li);
			
			function add_li(){
				li.innerHTML = 'пункт'
				ul.appendChild(li);
			}
				
			function clickAdd(){
				event.target.innerHTML = event.target.innerHTML + '!';
			}
			
		</script>
	</body>

2. Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу. Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. Задачу решите с помощью делегирования (то есть событие должно быть навешано на table).
	
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

