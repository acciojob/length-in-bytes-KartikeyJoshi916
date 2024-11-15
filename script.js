const byteSize = (str) => {
	let s = new Blob(str);
	return s.size;
};

Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
