1
			var a = 10;
			var b = 3;
			alert(a % b);

2
	var a = 10;
			var b = 3;
			var rez = a % b;
			if (rez != 0) {
				alert('Делится ' + rez);
			}
			else {
				alert('Делится с остатком ' + rez);
			}
3
var st = Math.pow(2, 10);
		alert(st);

4
alert(Math.sqrt(245));


5
var array = [4, 2, 5, 19, 13, 0, 10];
		var summ = 0;
		for (var i = 0; i < array.length; i++) {
			summ += Math.pow(array[i], 3);
		}
			alert(Math.sqrt(summ));
		
	
6
alert(Math.sqrt(379).toFixed(0));
		alert(Math.sqrt(379).toFixed(1));
		alert(Math.sqrt(379).toFixed(2));

7
var sqr = Math.sqrt(587);
			var obj = {'floor': Math.floor(sqr), 'ceil': Math.ceil(sqr)};

8
alert(Math.min (4, -2, 5, 19, -130, 0, 10));
		alert(Math.max (4, -2, 5, 19, -130, 0, 10));
		
9
	alert(Math.floor(Math.random() * 100) + 1 );
	
10
		var array = [];
		for(var i = 0; i < 10; i++){
			array[i] = Math.floor(Math.random() * 100) + 1;
		}
		alert(array);

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