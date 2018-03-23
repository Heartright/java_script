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
		alert(array1.splice(0, 3));

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
var array = ['я', 'учу', 'javascript', '!'];
		alert(array.join('+'));
			
12
var str = 'я учу javascript';
		var str1 = str.slice(0, 1).toUpperCase() + str.slice(1);
		alert(str1);
13 
var arr = [12, 15, 20, 25, 59, 79];
		var summ = 0; 
			for (var i = 0; i < arr.length; i++){
				summ += arr[i];
				var middle = summ / arr.length;
			}
			alert(middle);
14
var str = 'var_test_text';
		var array = str.split('_');
		for (var i = 1; i < array.length; i++ ){ 
			array[i] = array[i].slice(0, 1).toUpperCase() + array[i].slice(1);
		}
		var strrez = array.join('');
		alert(strrez);