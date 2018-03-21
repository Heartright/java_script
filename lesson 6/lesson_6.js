1
		var str = 'js'
		alert(str.toUpperCase());	

2
		var str = 'js'
		alert(str.toLowerCase());
3
		var str = 'я учу javascript!'
		alert(str.length);
4
	var str = 'я учу javascript!'
		alert(str.substr(1, 4));
		
	var str = 'я учу javascript!'
		alert(str.substring(2, 6));

	var str = 'я учу javascript!'
		alert(str.slice(2, 5));
	/*Вырезаем javascript*/	
	var str = 'я учу javascript!'
		alert(str.substr(5, 11));
	var str = 'я учу javascript!'
		alert(str.substring(5, 16));
	var str = 'я учу javascript!'
		alert(str.slice(6, 16));
		
5
	var str = 'я учу javascript!'
		alert(str.indexOf('учу'));
		
	
6
		var str = 'Hello world';
		var n = 5;
		if (str.length > n ) {
			var result = str.substr(0, n) + '...';
		}
		else {
			var result  = str;
		}
		alert(result);

7
var str = 'Я-учу-javascript!';
		alert(str.replace(/-/g, '!'))

8
		var str = 'я учу javascript!';
		var arr = str.split(' ');
		alert(arr);
		
9
	var str = 'я учу javascript!';
		var arr = str.split('');
		alert(arr);
	
10
		var data = '2025-12-31';
		var array = data.split('-')
		alert(array[2] + '.' + array[1] + '.' + array[0]);

11
var a = 22; 
		var b = 344;
		alert(Math.abs(a-b));
			
12
var a = 3; 
		var b = 5;
		var c = Math.abs(b-a);
		alert(c);
13 
var arr = [12, 15, 20, 25, 59, 79];
		var summ = 0; 
			for (var i = 0; i < arr.length; i++){
				summ += arr[i];
				var middle = summ / arr.length;
			}
			alert(middle);
14
var fact = 1;
		var n = 4;
		for (var i = 1; i <= n; i++){
			fact = fact * i ;
		}
		alert(fact);