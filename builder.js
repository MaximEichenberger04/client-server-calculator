let expression = "";

function press(char) {
    if(char === "allclear") {
        expression = "";
        document.getElementById("display").value = expression;
        return;
    }
    else if(char === "delete") {
        expression = expression.slice(0, -1);
        document.getElementById("display").value = expression;
        return;
    }
    else if(char === "=") {
        calculate();
        return;
    }
    else {
        if(char === "PERCENT"){
            expression += "*0.01";
            document.getElementById("display").value = "%";
            return;
        }
        expression += char;
        document.getElementById("display").value = expression;
        return;
    }
}

function calculate() {
    fetch("calculator.php", {
        method: "POST",
        headers: {"Content-type": "application/x-www-form-urlencoded"},
        body: "expr=" + encodeURIComponent(expression)
    })
    .then(response => response.text())
    .then(result => {
        expression = result; 
        document.getElementById("display").value = expression;
    })
}