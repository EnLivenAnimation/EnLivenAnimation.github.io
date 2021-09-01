function addToTree(string){
    // document.getElementById("relations-list").appendChild(string);

    var li = document.createElement('li');

    document.getElementById('relations-list').appendChild(li);

    li.innerHTML += string;
    // items.forEach(function (item) {
    //     let li = document.createElement('li');
    //     ul.appendChild(li);

    //     li.innerHTML += item;
    // });
}