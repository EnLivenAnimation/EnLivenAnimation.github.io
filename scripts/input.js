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

function readParents(atlas){
  const regex = /[a-zA-Z]+.[a-zA-Z]+\W+\d+,\d+,\d+,\d+\W+\n/g;
  const parent = /[a-zA-Z]+/g;
  var array1 = atlas.match(parent);
  const re = /[a-zA-Z]+./g;
  var array2 = atlas.match(regex);
  var distinct = 0;
  var map = new Object();
  var map2 = new Object();
  var arrayran = [0,1,2,3];
  
  for(i = 0 ; i < array1.length;i++){
    if(i%2==1){
      array1[i]=0;
    }
  }
  
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const parents = array1.filter(unique);
  var parentsTemp=[];
  for(i = 0 ; i < parents.length;i++){
    if(parentsTemp[i]=="0"){
      i--;
    }
    else
    parentsTemp[i]=parents[i];
  }
  var childNum = [];
  for(i = 0 ; i < parents.length;i++){
    var temp = parents[i];
    var tempnum =  0;
    for(j = 0 ; j < array2.length;j++){
      if(array2[j].includes(temp)) tempnum++;
    }
    childNum[i]=tempnum;
  }
  for(i = 0 ; i < array2.length;i++){
    var start = array2[i].indexOf(".");
    var middle = array2[i].indexOf("(");
    var last = array2[i].indexOf(")");
    map[array2[i].substring(0,middle)]=array2[i].substring(middle);
  }
  for(i = 0 ; i <parents.length;i++){
    var temp = parents[i];
    for(j = 0 ; j < array2.length;j++){
      var start = array2[j].indexOf(".");
      var middle = array2[j].indexOf("(");
      var childrens = "";
      if(array2[j].substring(0,start) == temp){
        childrens = childrens + array2[j].substring(start+1,middle);
      }
      map2["parents"+i] = temp;
      map2["children"+i] = childrens;
    }
  }
  //document.getElementById("p1").innerHTML = parents[0];
  for(i = 0 ; i < parents.length;i++){
    if(i!=1){
      var element = document.createElement("li");
      var elements = document.createElement("span");
      elements.setAttribute("class","caret");
      elements.innerHTML = parents[i];
      var childrens = document.createElement("ul");
      childrens.setAttribute("class","nested");
      for(j = 0 ; j < array2.length;j++){
        var children = document.createElement("li");
        var start = array2[j].indexOf(".");
        var middle = array2[j].indexOf("(");
        if(array2[j].substring(0,start)==parents[i]&&array2[j].substring(start+1,middle)!=parents[i]){
          children.innerHTML=array2[j].substring(start+1,middle);
        }
        childrens.appendChild(children);
      }
      elements.appendChild(childrens);
      var line = document.createElement("div");
      element.appendChild(elements);
      line.setAttribute("class", "timeline-dashed-horizontal");
      document.getElementById("relations-list").appendChild(element);
      document.getElementById("relations-list").appendChild(line);
    }
  }
  dropDown();
  // console.log(map);
  // console.log(map2);
  // console.log(parents);
  // console.log(childNum);
  // console.log(array1);
  // console.log(array2);
}
function myFunction() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.getElementById("relations").appendChild(btn);
}
function countDistinct(arr, n) {
  let res = 1;
  for (let i = 1; i < n; i++) {
      let j = 0;
      for (j = 0; j < i; j++)
          if (arr[i] === arr[j])
              break;
      if (i === j)
          res++;
  }
  return res;
}


function readCoordinates(atlas) {
  const regex = /\d+,\d+,\d+,\d+/g;
  return atlas.match(regex);
}