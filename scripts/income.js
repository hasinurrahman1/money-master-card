// This function for get value/element
function getAllFieldValueById(elementId) {
    const incomeField = document.getElementById(elementId);
    const incomeFieldValueString = incomeField.value;
    const incomeFieldValue = parseInt(incomeFieldValueString);
    return incomeFieldValue;
};

// This function for set innerText/value
function setTextElementValueById(elementId, value) {
    const totalExpense = document.getElementById(elementId);
    totalExpense.innerText = value;
};


document.getElementById('calculate-btn').addEventListener('click', function () {
    // ...................This is a simple way....................
    // income field
    // const incomeField  = document.getElementById(elementId);
    // const incomeFieldValueString = incomeField.value;
    // const incomeFieldValue  = parseInt(incomeFieldValueString);

    // food field
    // const foodField = document.getElementById('food-field');
    // const foodFieldValueString = foodField.value;
    // const foodFieldValue = parseInt(foodFieldValueString);

    // rent field
    // const rentField = document.getElementById('rent-field');
    // const rentFieldValueString = rentField.value;
    // const rentFieldValue = parseInt(rentFieldValueString)

    // clothes field
    // const clothesField = document.getElementById('clothes-field');
    // const clothesFieldValueString = clothesField.value;
    // const clothesFieldValue = parseInt(clothesFieldValueString);

    // .............................................................

    // get all field value/element by call getAllFieldValueById function
    const incomeFieldValue = getAllFieldValueById('income-field');
    const foodFieldValue = getAllFieldValueById('food-field');
    const rentFieldValue = getAllFieldValueById('rent-field');
    const clothesFieldValue = getAllFieldValueById('clothes-field');

    // calculation expense 
    const allExpense = foodFieldValue + rentFieldValue + clothesFieldValue;

    // validation
    if (incomeFieldValue < foodFieldValue || incomeFieldValue < rentFieldValue || incomeFieldValue < clothesFieldValue || incomeFieldValue < allExpense) {
        alert('Not Enough your Income Amount');
    }
    // set innerText/value in total expense by call setTextElementValueById function
    setTextElementValueById('total-expense', allExpense);
    // calculation balance and set innerText/value in balance by call setTextElementValueById function
    const totalB = incomeFieldValue - allExpense;
    setTextElementValueById('balance', totalB);
});

document.getElementById('saving-btn').addEventListener('click', function () {
    // calculation save %
    const saveField = document.getElementById('save-field');
    const saveFieldValueString = saveField.value;
    const saveFieldValue = parseInt(saveFieldValueString);
    // validation
    if (isNaN(saveFieldValue)) {
        alert('Please type number');
    }

    const saveAmount = saveFieldValue / 100;
    const incomeFieldValue = getAllFieldValueById('income-field');
    const totalSaveAmount = incomeFieldValue * saveAmount;
    // set innerText/value in saving amount by call setTextElementValueById function
    setTextElementValueById('saving-amount', totalSaveAmount);

    // calculation remaining part
    const balance = document.getElementById('balance');
    const balanceValueString = balance.innerText;
    const balanceValue = parseInt(balanceValueString);
    const savingAmount = document.getElementById('saving-amount');
    const savingAmountValueString = savingAmount.innerText;
    const savingAmountValue = parseInt(savingAmountValueString);
    const remainingBalance = balanceValue - savingAmountValue;
    // set innerText/value in remaining balance by call setTextElementValueById function
    setTextElementValueById('remaining-balance', remainingBalance);
});