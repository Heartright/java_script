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
var a = 3;
			var b = 5;
			if (a <= 1 && b >= 3) {
				alert(a + b);
			}
			else{
				alert(a - b);
			}
14
var a = 3;
			var b = 5;
			if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
				alert('Верно');
			}
			else{
				alert('Неверно');
			}		
15
	var num = 3;
		switch (num){
			case 1:
		result = 'зима';
		break;
			case 2:
		result = 'Весна';
		break;
			case 3:
		result = 'Лето';
		break;
			case 4:
		result = 'Осень';
		break;
		}
		alert(result);
	
16
var day = 21;
		if 
			(day <= 10) {
		alert('Первая декада');
		}
		if 
			(day >= 11 && day <= 20) {
		alert('Вторая декада');
		}
		
		if 
			(day >= 21 && day <= 31){
		alert('Третья декада');
		}
17
var month  = 21;
		if 
			(month == 12 || month <= 2) {
		alert('Зима');
		}
		if 
			(month >= 3 && month <= 5) {
		alert('Весна');
		}
		
		if 
			(day >= 6 && day <= 8){
		alert('Лето');
		}
		
		if 
			(day >= 9 && day <= 11){
		alert('Осень');
		}
18
var str  = 'abcde';
		if (str[0] == 'a'){
			alert('да');
		}
		else{
			alert('Нет');
		}
19
var str = '12345';
			if (str [0] == '1' || str[1] == '2' || str[2] == '3'){
				alert('да');
			}
			else {
				alert('нет');
			}
20
var str = '123';
	var sum = Number(str[0]) +  Number(str[1]) +  Number(str[2]);
		alert(sum);		
21 

var str = '456456';
			var sum1 = Number(str[0]) +  Number(str[1]) +  Number(str[2]);
			var sum2 = Number(str[3]) +  Number(str[4]) +  Number(str[5]);
				if (sum1 == sum2){
					alert('Да');
				}
				else {
					alert('Нет');
				}
			
		alert(sum);
