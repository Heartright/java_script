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
