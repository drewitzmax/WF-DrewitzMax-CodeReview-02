function calculateInsurance(country, horsepower, age){
    let cost = 0;
    switch(country){
        case "AT": cost = horsepower * 100/age +50;
        case "HU": cost = horsepower * 120/age +100;
        case "AT": cost = horsepower * 150/(age+3) +50;
    }
    return Math.floor(cost);
}

function buttonClick(){
    let age= Number(document.getElementById("age").value);
    let horsepower= Number(document.getElementById("horsepower").value);
    let name= document.getElementById("name").value;
    let country=document.getElementById("country").value;
    let cost = calculateInsurance(country, horsepower, age);

    document.getElementById("calculationResult").innerHTML=`${name}, your insurance costs ${cost}&euro;`
}