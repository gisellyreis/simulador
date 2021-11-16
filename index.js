console.log('hi');

d3.json("temperature.json").then(function(data) {
    var canvas = d3.select("body").append("svg")
                   .attr("width", 500)
                   .attr("height", 500)
    
    canvas.selectAll("rect")
          .data(data)
          .enter()
                .append("rect")
                .attr("width", function(d) { 
                    console.log(d.data);
                    return d.data[0] * 10; 
                })
                .attr("height", 48)
                .attr("y", function(d,i) {return i*50;})
                .attr("fill", "blue")

    canvas.selectAll("text")
          .data(data)
          .enter()
                .append("text")
                .attr("fill", "white")
                .attr("y", function(d,i) {return i*50 + 24;})
                .text(function(d) {return d.data[0];})
})

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