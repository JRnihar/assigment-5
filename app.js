//----------------valina-javasecript---------------//


//calculate-btn-click
document.getElementById("caclulate-btn").addEventListener('click', function() {
    addIncomeInput("income-input")
})

//calculate-btn-function
function addIncomeInput(Input) {
    let incomeInput = document.getElementById(Input);
    let inputAmount = incomeInput.value;
    if (inputAmount < 0) {
        alert("Please Enter a valid Number")
    }



    //expenses-calculation
    let foodInput = document.getElementById("food-input").value
    if (foodInput < 0) {
        alert("Please Enter a valid Number")
    }
    document.getElementById("food-input").value = " ";

    let rantInput = document.getElementById("rant-input").value
    document.getElementById("rant-input").value = " ";

    let clothesInput = document.getElementById("clothes-input").value
    document.getElementById("clothes-input").value = " ";


    let total = parseFloat(foodInput) + parseFloat(rantInput) + parseFloat(clothesInput);

    let totalExpenses = document.getElementById("total-expenses");

    totalExpenses.innerText = total;

    //blance-totoal-calculation
    let blanceTotal = document.getElementById("blance-total")
    blanceTotal.innerText = inputAmount - total;
    
}

//save-btn-click

document.getElementById("save-btn").addEventListener('click', function() {
        addSaveAndremaining("save-input")
    })
    // save-btn-function
function addSaveAndremaining(Input) {
    let saveInput = document.getElementById(Input)
    let saveInputvalue = parseFloat(saveInput.value)

    if (saveInputvalue < 0) {
        alert("Please Enter a valid Number")
    }
    //saving-calculation

    let inconeInput = document.getElementById("blance-total")
    let blanceTotal = inconeInput.innerText

    let incomeInput = document.getElementById("income-input");
    let incomeAmount=parseFloat(incomeInput.value);
    


    let saving = (incomeAmount * saveInputvalue) / 100;

    let saveAmount = document.getElementById('save-amount');
    saveAmount.innerText = saving;
     incomeInput.value = "";

    document.getElementById("save-input").value = " ";

    //remaining-calculation
    let remainingBlance = document.getElementById('remaining-amount');
    remainingBlance.innerText = blanceTotal - saving;
}