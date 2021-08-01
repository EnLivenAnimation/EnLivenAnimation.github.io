var file1 = "50.xsl";
var file2 = "30.doc";

console.log(getFileExtension(file1)); 
console.log(getFileExtension(file2));

function getFileExtension(filename) {
    return filename.split('.').pop();
}