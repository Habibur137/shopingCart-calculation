// let count = 1
document.getElementById('phone-plus-btn').addEventListener('click', function(){
    orderItemQuantity('phone', 1219, true)
    calculation('phone', 1219)
})
document.getElementById('phone-minus-btn').addEventListener('click', function(){
   orderItemQuantity('phone', 1219, false)
   calculation('phone', 1219)
})
document.getElementById('casing-plus-btn').addEventListener('click', function(){
    orderItemQuantity('casing', 59, true)
    calculation('casing', 59)
})
document.getElementById('casing-minus-btn').addEventListener('click', function(){
   orderItemQuantity('casing', 59, false)
   calculation('casing', 59)
})

function orderItemQuantity(products, price, isIncrese){
    const phoneInputText = document.getElementById(products + '-input');
    
    let phoneInputValue = phoneInputText.value;
    // phoneInputText.value = count++;
    if(isIncrese){
        phoneInputValue = parseInt(phoneInputValue) + 1;
    }
    else if(phoneInputValue > 0){
        phoneInputValue = parseInt(phoneInputValue) - 1;
    }
    // update value 
    phoneInputText.value = phoneInputValue
    const phonePrice = document.getElementById(products + '-price')
    phonePrice.innerText = phoneInputValue * price;
    
}

function getInput(product){
    const phoneQuantity = document.getElementById(product + '-input')
    const phoneQuantityValue = parseInt(phoneQuantity.value)
    return phoneQuantityValue
}

function calculation(product){
    
    const totalPriceOfPhone = getInput('phone') * 1219;
    const totalPriceOfCasing = getInput('casing') * 59;
    const subTotal = totalPriceOfCasing + totalPriceOfPhone
    const tax = subTotal / 10
    const grandTotal = subTotal + tax
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = grandTotal;
}