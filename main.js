

function increasePhoneCount(){
    const phoneCount = document.getElementById("phone-count").value;
    const phoneCountNumber = parseInt(phoneCount);
    document.getElementById("phone-count").value = phoneCountNumber + 1;
    updatePhonePrice();
};
function decreasePhoneCount(){
    const phoneCount = document.getElementById("phone-count").value;
    const phoneCountNumber = parseInt(phoneCount);
    document.getElementById("phone-count").value = phoneCountNumber - 1;
    updatePhonePrice();
};
function increaseCaseCount(){
    const caseCount = document.getElementById("case-count").value;
    const caseCountNumber = parseInt(caseCount);
    document.getElementById("case-count").value = caseCountNumber + 1;
    updateCasePrice();
};
function decreaseCaseCount(){
    const caseCount = document.getElementById("case-count").value;
    const caseCountNumber = parseInt(caseCount);
    document.getElementById("case-count").value = caseCountNumber - 1;
    updateCasePrice();
};

function updatePhonePrice(){
    const phoneCount = document.getElementById("phone-count").value;
    const phoneCountNumber = parseInt(phoneCount);
    const updatedPrice = phoneCount * 1219;
    document.getElementById("phone-price").innerText = updatedPrice;
    totalPrice();
};    
function updateCasePrice(){
    const caseCount = document.getElementById("case-count").value;
    const caseCountNumber = parseInt(caseCount);
    const updatedPrice = caseCountNumber * 59;
    document.getElementById("case-price").innerText = updatedPrice;
    totalPrice();
};    
function totalPrice(){
    const phonePrice = document.getElementById("phone-price").innerText;
    const phonePriceNumber = parseInt(phonePrice);
    const casePrice = document.getElementById("case-price").innerText;
    const casePriceNumber = parseInt(casePrice);
    const subTotal = phonePriceNumber + casePriceNumber;
    document.getElementById("subtotal").innerText = subTotal;
    taxAmount();
};
function taxAmount(){
    const totalAmount = document.getElementById("subtotal").innerText;
    const totalAmountNumber = parseInt(totalAmount);
    const taxPercent = 15;
    const taxCount = totalAmountNumber / 100;
    const finalTax = taxCount * taxPercent;
    document.getElementById("tax").innerText = finalTax;
    grandTotal();
};
function grandTotal(){
    const total = document.getElementById("subtotal").innerText;
    const totalNumber = parseInt(total);
    const totalTax = document.getElementById("tax").innerText;
    const totalTaxNumber = parseInt(totalTax);
    const grandTotal = totalNumber - totalTaxNumber;
    document.getElementById("total").innerText = grandTotal; 
};