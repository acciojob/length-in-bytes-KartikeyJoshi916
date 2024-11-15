const byteSize = (str) => {
  const blob = new Blob([str]);
  return blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.") || ""; // Handle null or undefined input
alert(byteSize(str));
