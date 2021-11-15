console.log('hi');

function getTemperature() {
    return fetch("temperature.json")
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        var length = data.length -1;
        document.getElementById("info").innerHTML = "";
        var node = document.createElement("p");
        var text = document.createTextNode("Temperatura: "+ data[length].data[0]);
        node.appendChild(text);;

        document.getElementById("info").appendChild(node);
    });
}


window.onload = () => {
    var btn = document.createElement("button");
    var btnText = document.createTextNode("Atualizar");
    btn.appendChild(btnText);
    btn.addEventListener("click", function() {
        getTemperature();
    });
        
    document.getElementById("body").appendChild(btn);
}


