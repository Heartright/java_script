1
	var arr = ['a', 'b', 'c', 'd']
	alert(arr);



2
	var arr = ['a', 'b', 'c', 'd']
	alert(arr[0]);
	alert(arr[1]);
	alert(arr[2]);

3
	var arr = ['a', 'b', 'c', 'd'];
	alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]);		

4
	var arr = [2, 5, 3, 9]
	var result = arr[0] * arr[1] + arr[2] * arr[3]; 
	alert(result);

5
	var obj = {a: 1, b: 2, c: 3};
	alert(obj['c']);
	alert(obj.c);


	
6

	var obj = {Коля: '100', Вася: '500', Петя: '200'};
			alert(obj['Петя']);
			alert(obj['Коля']);
			
7

var obj = {1:'Понедельник', 2:'Вторник', 3:'Среда', 4:'Четверг', 5:'Пятница', 6:'Суббота', 7:'Воскресенье'};
alert(obj[1]);

8
var obj = {1:'Понедельник', 2:'Вторник', 3:'Среда', 4:'Четверг', 5:'Пятница', 6:'Суббота', 7:'Воскресенье'};
			var day = 1;
			alert(obj[day]);
9
var obj = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
			alert(obj[1][0]);
	
	
10
var obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
alert(obj.js[0]);

11
var array = {
				ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
				en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
			};
			alert(array.ru[0]);
			alert(array.en[2]);
			
12
var array = {
				ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
				en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
			};
			var lang = 'ru';
			var day = 3;
			alert(array[lang][day]);
