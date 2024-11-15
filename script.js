const byteSize = (str) => {
	let s = new ([str],{type : "text/plain"});  
	return s.size;
};

Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
