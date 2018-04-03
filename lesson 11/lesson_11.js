1 
document.write("<tr><td></td>"); 
		for (i = 1; i <= 9; i++) document.write("<td style = 'text-align: center;'>" + i + "</td>"); 
			document.write("</tr>"); 
		for (i = 1; i <= 9; i++) { 
			document.write("<tr><td>" + i + "</td>"); 
		for (j = 1; j <= 9; j++){ 
			document.write("<td bgcolor = 'red', style = 'text-align: center;'>" + (i*j) + "</td>");
				} 
			document.write("</tr>"); 
		} 

2
	var str = '';
		for(var i = 1; i < 10; i++ ){
			str += i;
		}
		 alert(str);

3
	var str = '';
		for(var i = 9; i > 0; i-- ){
			str += i;
		}
		 alert(str);
4
	var str = '';
		for(var i = 1; i < 10; i++ ){
			str += i + '-';
		}
		 alert(str);
5
	var str = '';
		for(var i = 1; i <= 20; i++){
			str += 'x';
			document.write(str + '<br>');
		}
		
6
	var str = '';
		for(var i = 1; i < 10 ; i++){
			for(var j = 1; j <= i; j++ ){
			document.write(i)
			}
		document.write(str + '<br>');
		}
		
	
7
	var str = '';
		for(var i = 1; i <= 5; i++){
			str += 'xx';
			document.write(str + '<br>');
		}
		