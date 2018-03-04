1
			var a = -3;
			if (a == 0) {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}

2
	var a = -3;
			if (a > 0) {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}

3
var a = 0;
			if (a < 0) {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}		

4
	var a = 1;
			if (a >= 0) {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}
5
	var a = 1;
			if (a <= 0) {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}
	
6
	var a = 0;
			if (a != 0) {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}	
7

var a = 'test';
			if (a == 'test') {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}

8
var a = '1';
			if (a == '1') {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}
9
var obj = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
			alert(obj[1][0]);
	
	
10
var test = false;
			if (test != true) {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}

11
var a = 2;
			if (a > 0 && a < 5) {
				alert('Верно');
			}
			else{
				alert('Неверно')
			}
			
12
var a = 2;
			if (a == 0 || a == 2) {
				a += 7;
			}
			else{
				a /= 10;
			}
			alert(a);
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
