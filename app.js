//calculate-btn-click
document.getElementById("caclulate-btn").addEventListener('click', function() {
    addInputAndBlancetotal("income-input")
})

//calculate-btn-function
function addInputAndBlancetotal(Input) {
    let incomeInput = document.getElementById(Input);
    let inputvalue = incomeInput.value;
    if (inputvalue < 0) {
        alert("Please Enter a valid Number")
    }




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

    // if (totalExpenses > incomeInput) {
    //     alert("Your budget is To Low")
    // } else {
    //     return totalExpenses
    // }


    let blanceTotal = document.getElementById("blance-total")
    blanceTotal.innerText = inputvalue - total;
    incomeInput.value = "";
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

    let inconeInput = document.getElementById("blance-total")
    let blanceTotal = inconeInput.innerText
    let saving = (blanceTotal * saveInputvalue) / 100;

    let saveAmount = document.getElementById('save-amount');
    saveAmount.innerText = saving;

    document.getElementById("save-input").value = " ";


    let remainingBlance = document.getElementById('remaining-amount');
    remainingBlance.innerText = blanceTotal - saving;
}