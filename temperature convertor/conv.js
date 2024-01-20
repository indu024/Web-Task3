document.getElementById("btn").addEventListener("click", function () {
   
    var degree = parseFloat(document.getElementById("degree").value);
    var tempType = document.getElementById("temp-type").value;

    
    if (isNaN(degree)) {
        alert("Please enter a valid number for the degree.");
        return;
    }

    
    var result;
    if (tempType === "celsius") {
        result = celsiusToFahrenheit(degree);
    } else {
        result = fahrenheitToCelsius(degree);
    }

    
    document.getElementById("value").textContent = result;
});

function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(3)+ "°F";
}

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return celsius.toFixed(3) + "°C";
}

