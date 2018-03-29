1
		var string = 'hello world';
		string = string[0].toUpperCase() + string.substring(1);
		alert(string);
		
		
		var string = 'hello world';
		string = string.split('')
		string[0] = string[0].toUpperCase();
		alert(string.join(''));

2
		var string = '123456';
		res = string.split('').reverse().join('');
		alert(res);
3
		var string = '3751';
		array = string.split('');
		array.sort();
		alert(array.join(''));
4
	var string = 'http://test.com';
		if (string.substr(0, 7) == 'http://') {
			alert('true')
		}
		else {
			alert('false')
		}
		
5
	var string = 'index.html';
		if (string.substr(-5) == '.html') {
			alert('true')
		}
		else {
			alert('false')
		}
		
	
6
		var array1 = ['js', 'css', 'jq'];
		alert(array1.pop());

7
var array1 = [1, 2, 3, 4, 5];
		alert(array1.slice(0, 3));

8
		var array1 = [1, 2, 3, 4, 5];
		alert(array1.spice(-2));
		
9
	var array1 = [1, 2, 3, 4, 5];
		array1.splice(1, 2);
		alert(array1);
10
		var array1 = [1, 2, 3, 4, 5];
		var res = array1.splice(1, 3);
		alert(res);

11
var array1 = [1, 2, 3, 4, 5];
		array1.splice(3, 0,  'a', 'b', 'c');
		alert(array1);
			
12
var array1 = [1, 2, 3, 4, 5];
		array1.splice(1, 0, 'a', 'b');
		array1.splice(6, 0, 'c');
		array1.splice(8, 0, 'e');
		alert(array1);
13 
var array1 = [3, 4, 1, 2, 7];
		alert(array1.sort());
14
var obj = {js:'test', jq: 'hello', css: 'world'};
		alert(Object.keys(obj));