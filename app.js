// let count = 1
document.getElementById('phone-plus-btn').addEventListener('click', function(){
    orderItemQuantity('phone', 1219, true)
})
document.getElementById('phone-minus-btn').addEventListener('click', function(){
   orderItemQuantity('phone', 1219, false)
})
document.getElementById('casing-plus-btn').addEventListener('click', function(){
    orderItemQuantity('casing', 59, true)
})
document.getElementById('casing-minus-btn').addEventListener('click', function(){
   orderItemQuantity('casing', 59, false)
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