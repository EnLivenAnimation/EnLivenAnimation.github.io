function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
}
  
function readElements(atlas) {
    const regex = /[a-zA-Z]+/g;
    return atlas.match(regex);
}

function readCoordinates(atlas) {
    const regex = /\d+,\d+,\d+,\d+/g;
    return atlas.match(regex);
}