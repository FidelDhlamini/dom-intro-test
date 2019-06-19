// function calculateBtnClicked(){
//     // get the string entered in the textArea
//     var billString = billStringField.value;
//     console.log(billString)

//     //split the string
//     var billItems = billString.split(",");
//     // a variable for the total phone bill.
//     var billTotal = 0;
//     //loop over all the bill items
//     for (var i=0;i<billItems.length;i++){
//         var billItem = billItems[i].trim();
//         if (billItem === "call"){
//             billTotal += 2.75;
//         }
//         else if (billItem === "sms"){
//             billTotal += 0.75;
//         }
//     }
    
//     //round to two decimals
//     var roundedBillTotal = billTotal.toFixed(2);
//     billTotalElement.innerHTML = roundedBillTotal;
// }
//calculateBtn.addEventListener('click', calculateBtnClicked);


function calculateBtnClicked(){
    var billTotal = 0;

    function check(bill){
    var string = bill.split(",");

        for(var i = 0; i < string.length;i++){

            var billItems = string[i].trim();

            if(billItems === "sms"){
                billTotal += 0.75;
            }
            else if(billItems === "call"){
                billTotal += 2.75;
            }
        }
    }
    function displayTotal(){
        return billTotal.toFixed(2);
    }

    return{
        bill: check,
        total: displayTotal,
    }
}