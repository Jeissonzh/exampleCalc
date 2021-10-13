/*let botones = document.querySelectorAll("button")
console.log(botones)

for (let index = 0; index < botones.length; index++) {
    const button = botones[index];
    button.addEventListener("click", function (e) {
        e.preventDefault()

        calculate(button.innerHTML)
    })    
}

function calculate(op) {
    console.log(op)
}*/

document.getElementById("addButton").addEventListener("click", function (e) {
    e.preventDefault()
    
    var numA = parseFloat(document.getElementById("numA").value)
    var numB = parseFloat(document.getElementById("numB").value)

    if (isNaN(numA)||isNaN(numB)) {
        alert("Debe llenar todos los campos!!")
    } else{
        var operation = numA + numB
        var pElement = document.getElementById("result")
        pElement.innerHTML = "RESULTADO: " + operation
    }
})

document.getElementById("subtractButton").addEventListener("click", function (e) {
    e.preventDefault()
    
    var numA = parseFloat(document.getElementById("numA").value)
    var numB = parseFloat(document.getElementById("numB").value)

    if (isNaN(numA)||isNaN(numB)) {
        alert("Debe llenar todos los campos!!")
    } else{
        var operation = numA - numB
        var pElement = document.getElementById("result")
        pElement.innerHTML = "RESULTADO: " + operation
    }
})

document.getElementById("multiplyButton").addEventListener("click", function (e) {
    e.preventDefault()
    
    var numA = parseFloat(document.getElementById("numA").value)
    var numB = parseFloat(document.getElementById("numB").value)

    if (isNaN(numA)||isNaN(numB)) {
        alert("Debe llenar todos los campos!!")
    } else{
        var operation = numA * numB
        var pElement = document.getElementById("result")
        pElement.innerHTML = "RESULTADO: " + operation
    }
})

document.getElementById("divideButton").addEventListener("click", function (e) {
    e.preventDefault()
    
    var numA = parseFloat(document.getElementById("numA").value)
    var numB = parseFloat(document.getElementById("numB").value)

    if (isNaN(numA)||isNaN(numB)) {
        alert("Debe llenar todos los campos!!")
    } else{
        var operation = numA / numB
        var pElement = document.getElementById("result")
        pElement.innerHTML = "RESULTADO: " + operation
    }
})