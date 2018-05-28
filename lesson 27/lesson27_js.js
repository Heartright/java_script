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
			table {
				border: 1px solid blue;
				border-collapse: collapse;
				width: 20%;
			}
			
			.newUser {
				display: flex;
				flex-direction: column;
				width: 20%;
			}
			
			input {
				margin: 10px 0;
			}
			
			td {
				height: 20px;
				text-align: center;
			}
			
		</style >
		
	</head>
	<body>
		<table id="infoForm" border="1">
			<tr>
				<th>Имя</th>
				<th>Фамилия</th>
			</tr>
			<tr>
				<td>Pert</td>
				<td>Petrov</td>
			</tr>
			
		</table>
		
		<div class="newUser">
			<input type="text" placeholder="Введите имя" id="setFirstname">
			<input type="text" placeholder="Введите Фамилию" id="setLastname">
			<input type="submit" value="Добавить пользователя" id="addNewUser">
		</div>
		
		<script>
			var table = document.getElementById('infoForm');
			var firstname = document.getElementById('setFirstname');
			var lastname = document.getElementById('setLastname');
			var tr = document.createElement('tr');
			var newUser = document.getElementById('addNewUser');
			
			table.addEventListener('click', changeInfo);	
			newUser.addEventListener('click', addUser);
			
			function changeInfo() {
				var info = event.target.closest('td');
				var change = prompt('Можете внести изменения', info.innerHTML);
				info.innerHTML = change;
			}
			
			function addUser() {	
				tr.innerHTML = '<td>' + firstname.value + '</td>' + '<td>' + lastname.value + '</td>';
				table.appendChild(tr);	
				firstname.value = '';
				lastname.value = '';
			}
			
		</script>
	</body>

