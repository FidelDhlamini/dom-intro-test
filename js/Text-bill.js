/*// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeTexts");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");
var callsTotal = 0;
var smsTotal = 0;
//get a reference to the add button
function textBillTotal() {
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call") {
        callsTotal += 2.75
    } else if (billTypeEntered === "sms") {
        smsTotal += 0.75;
    }

    //update the totals that is displayed on the screen.
    var callTotalOne = document.querySelector(".callTotalOne");
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    if (totalCost >= 50) {
        // adding the danger class will make the text red
        totalCostElem.classList.add("danger");
    } else if (totalCost >= 30) {
        totalCostElem.classList.add("warning");
    }
}

addToBillBtn.addEventListener('click', textBillTotal);*/

function textBillTotal() {
    var callsTotal = 0;
    var smsTotal = 0;
    var totalCost = 0;

    function add(billTypeText) {
        var billTypeEntered = billTypeText.trim();
        // update the correct total
        if (billTypeEntered === "call") {
            callsTotal += 2.75
        } else if (billTypeEntered === "sms") {
            smsTotal += 0.75;
        }
        
        return smsTotal + callsTotal;
    }

    function printSmsTotal() {
        console.log(smsTotal)
        return smsTotal.toFixed(2);
    }

    function printCallsTotal() {
        return callsTotal.toFixed(2);
    }

    function billTotal() {
        return  totalCost = callsTotal + smsTotal;
    }
    function colour (){
    if (totalCost >= 50) {
        return "Red";
    } else if (totalCost >= 30) {
        return "Orange";
    }
}
    return {
        add: add,
        sms: printSmsTotal,
        call: printCallsTotal,
        all: billTotal,
        levels: colour 
    }
}