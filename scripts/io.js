function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function exportTL(){
    stuff = "";
    for (i in allSprites){
        stuff+= JSON.stringify(allSprites[i].timeline);
        stuff+= "\n";
    }
    download("timeline.json", stuff);
    this.alpha = 1;
    
}
let fileText = "sad68sad";
function readFile() {
    let input = document.querySelector('input');

    input.addEventListener('change', () => {
        let files = input.files;
        console.log(files);
        if (files.length == 0) return;
        const file = files[0];
        let reader = new FileReader();
      
        reader.onload = (e) => {
            const file = e.target.result;
            const lines = file.split(/\r\n|\n/);
            fileText = lines.join('\n');
        };
        reader.onerror = (e) => alert(e.target.error.name);
      
        reader.readAsText(file);
        b = parse(fileText);
        console.log(b);
    });
}
readFile();

function parse(s) {
    const regex = /\d+/g;
    let tmp = s.match(regex);
    for (i in tmp){
        tmp[i] = parseFloat(tmp[i]);
    }
    return tmp;
}