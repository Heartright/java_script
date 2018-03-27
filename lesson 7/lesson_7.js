1
		var array1 = [1, 2, 3];
		var array2 = [4, 5, 6];
		alert(array1.concat(array2));

2
		var array1 = [1, 2, 3];
		alert(array1.reverse());
3
		var array1 = [1, 2, 3];
		array1.push(4, 5 ,6); 
		alert(array1);
4
		var array1 = [1, 2, 3];
		array1.push(4, 5 ,6); 
		alert(array1);
		
5
		var array1 = ['js', 'css', 'jq'];
		alert(array1.shift());
		
	
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