console.log('hi');

async function getTemperature() {
    const response = await fetch("temperature.json");
    const data = await response.json();
    console.log(data);
    var length = data.length - 1;
    document.getElementById("info").innerHTML = "";
    var node = document.createElement("p");
    var text = document.createTextNode("Temperatura: " + data[length].data[0]);
    node.appendChild(text);
    
    document.getElementById("info").appendChild(node);
}


window.onload = () => {
    getTemperature();
    var btn = document.createElement("button");
    var btnText = document.createTextNode("Atualizar");
    btn.appendChild(btnText);
    btn.addEventListener("click", function() {
        getTemperature();
    });
        
    document.getElementById("body").appendChild(btn);
}

function btnAgradavel() {
    console.log('agradavel');
}

function btnQuente() {
    console.log('quente');
}

function btnFrio() {
    console.log('frio');
}