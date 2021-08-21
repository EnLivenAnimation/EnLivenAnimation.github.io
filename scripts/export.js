function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}


function exportS(){
  stuff ="";
  for (i in allSprites){
    stuff+= JSON.stringify(allSprites[i].texture.textureCacheIds);
    stuff+= "\n";
  }
  console.log(stuff);
}

function exportTL(){
  stuff = "";
  for (i in allSprites){
    stuff+= JSON.stringify(allSprites[i].timeline);
    stuff+= "\n";
  }
  console.log(stuff);
  this.alpha = 1;
}

function exportE(){
  texture =""
  let a;
  let b;
  const ev = [];
  for (i in allSprites){
    ev[i]=[];
    for(let j = 0; j<2;j++){
      if(j==0){
        texture = JSON.stringify(allSprites[i].texture.textureCacheIds);
        a = texture.lastIndexOf("/");
        b = texture.lastIndexOf('"');
        console.log(texture.substring(a+1,b));
        ev[i][j]= "[" + texture.substring(a+1,b);
      }
      else{
        ev[i][j]= JSON.stringify(allSprites[i].timeline);
      }
    }
  }
    
  download("filename.json",ev);
  this.alpha = 1;
}

let fileText = "sad6.8sad35sad";

function readFile() {
  let input = document.getElementById("file-import");

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
          b = parse(fileText);
          implementTL(b);
      };

      reader.onerror = (e) => alert(e.target.error.name);
      reader.readAsText(file);

  });
}

function implementTL(arr){
  var index = 0;
  let keyframes = arr.length / 5 / allSprites.length;
  console.log(keyframes);
  for (i in allSprites){
      sprite = allSprites[i];
      sprite.timeline = [];
      for (j = 0; j < keyframes; j++){
          sprite.timeline.push([arr[index], arr[index+1], arr[index+2], arr[index+3], arr[index+4]]);
          index+= 5;
      }
      console.log(sprite.timeline);
  }

  loadButtons();

}

function parse(s) {
  const regex = /-?((\d+)((\.\d*)?))/g;
  let tmp = s.match(regex);
  for (i in tmp){
      tmp[i] = parseFloat(tmp[i]);
  }
  return tmp;
} 

readFile();