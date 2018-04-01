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
		
	
