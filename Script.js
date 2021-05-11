let Criptomaza = 10;
let Sharo = 0.5;
let Bitcat = 100000;
let eTorium = 2;
let Tiger = 50;
let sum = 0;
let budget = 100;





let greetings = confirm("Добре дошли в крипто борса Джунгла, искате ли да си купите малко кинти ?")

if (greetings) {
    let clientCurrency = prompt("На вашето внимание актуални валути:Criptomaza,Sharo,Bitcat,eTorium,Tiger. Моля изберете Вашата валута.")
    let clientQuantity = Number(prompt("Моля изберете количеството валута."))
    switch (clientCurrency) {
        case "Criptomaza":
            sum = Criptomaza * clientQuantity;
            break;
        case "Sharo":
            sum = Sharo * clientQuantity;
            break;
        case "Bitcat":
            sum = Bitcat * clientQuantity;
            break;
        case "eTorium":
            sum = eTorium * clientQuantity;
            break;
        case "Tiger":
            sum = Tiger * clientQuantity;
            break;
        

    } 

    if (sum>-1) {
        
    
if (sum <=budget) {
    alert("Вие станахте горд собственик на " + clientQuantity + " единици от валутата " + clientCurrency + " покупката ви струваше " + sum + " рестото ви е " + (budget - sum))
   let checkBalance = confirm("Ти си вече по-богат искаш ли да ти покажа колко много парички имаш")
   if (checkBalance) {
       alert("Ти имаш точно." +  clientQuantity + " единици от валутата " + clientCurrency + " на стойност " + sum)
       alert("За мен беше удоволствие че избрахте нашия магазин до нови срещи.")
   }
   else {
       alert("Ти губиш, хайде да си ходиш")
    
   }
}else{
alert("Много си алчен, няма място за теб в моя магазин. Сбогом")
}

}else {
    alert("Благодаря че НЕпазарувахте при нас, хайде чупката.")
}
}
