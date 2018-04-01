1
		 var array = [1, 2, 3, 4, 5, 6];
		 var flag = false;
		 for (var i = 0; i < array.length; i++) {
			if(array[i] == 7){
				flag = true;
				break;
			}
		 }
		 if (flag == true) {
			alert ('да');
		 }
		 else {
			alert('нет');
		 }

2
		 var a = 31;
		 var flag = false;
			for(var i = 2; i < a; i++ ){
				if (a % i == 0){
				flag = true;
				break;
				}
			}
			if (flag == true){
				alert('true');
			}
			else{
				alert('false');
			}
3
		 var array = [1, 2, 4, 5, 5, 3, 6] ;
		 var flag = false;
			for(var i = 0; i < array.length; i++ ){
				if (array[i] == array[i - 1]){
				flag = true;
				break;
				}
			}
			if (flag == true){
				alert('да');
			}
			else{
				alert('нет');
			}
4
	function get(num){
				var arr = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
				return arr [num - 1];
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