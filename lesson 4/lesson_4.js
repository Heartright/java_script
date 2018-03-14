1
			var i = 1;
			while (i <= 100) {
				document.write(i + '<br>');
			i += 1;
			}
Для for 
			for ( var i = 1; i <= 100; i++ ) {
				document.write(i + '<br>');
			}

2
var i = 11;
			while (i <= 33) {
				document.write(i + '<br>');
			i += 1;
			}
Для for 		
for (var i = 11; i <= 33; i++) {
				document.write(i + '<br>');
			}
3
var i = 0; 
			while ( i <= 100) {
				document.write(i + '<br>');
				i += 2;
			}
Для for

for (var i = 0; i <= 100; i+=2) {
				document.write(i + '<br>');
			}	

4
var i = 1; 
var sum = 0;
while ( i <= 100) {
				sum += i;
				i++;
				
				
			}
			alert(sum);
Для for 
var sum = 0;
			for ( var i = 1; i <= 100; i++) {
				sum += i;
			}
			alert(sum);


5
	var array = [1, 2, 3, 4, 5];
	for (i var = i < array.length; i++) {
		alert(array[i]);
	}
		
	
6
var array = [1, 2, 3, 4, 5];
var result = 0;
for (var i = 0; i < arr.length; i++) {
	result += array[i];
}
alert(result);
7
var obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
			for(var key in obj){
				alert(key);
				alert(obj[key]);
			}

8
var obj = {Коля: '200', Вася: '300', Петя : '400'};
			for(var key in obj) {
				document.write(key + ' - зарплата' + obj[key] + ' долларов.<br>');
			}
			
9
var array = [2, 5, 9, 15, 0, 4];
			for(var i = 0; i < array.length; i++){
				if (array [i] > 3 && array[i] < 10) {
				alert(array[i]);
				}
			}
10
var test = false;
			if (test != true) {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}

11
var array = [1, 2, 5, 9, 4, 13, 4, 10];
			for(var i = 0; i < array.length; i++){
				if (array [i] == 4) {
				alert('Есть!');
				break;
				}
			}
			
12
var array = ['10', '20', '30', '50', '235', '3000'];
			for (var i = 0; i < array.length; i++){
				if (array[i][0] == '1'  || array[i][0] == '2'|| array[i][0] == '5') {
					alert(array[i]);
				}
			}
13 
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		var str = '';
			for (var i = 0; i < array.length; i++){
				str += '-' + array[i];
			}
		document.write(str + '-'); 
14
var array = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
			for (var i = 0; i < array.length; i++){
				if ( i == 5 || i == 6 ){
					document.write('<b>' + array[i] + '</b><br>');
				}
				else{
					document.write(array[i]+ '<br>');
				}
			}
		document.write(str + '-'); 	
15
var array = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
		var day = 2;
			for (var i = 0; i < array.length; i++){
				if ( i == day ){
					document.write('<i>' + array[i] + '</i><br>');
				}
				else{
					document.write(array[i]+ '<br>');
				}
			}
	
16
for (var n = 1000, iter = 0; n > 50; n /= 2, iter++);
			alert(n);
			alert(iter);