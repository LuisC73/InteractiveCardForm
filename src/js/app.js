const $cardName = document.getElementById('card-name'),
    $cardNumber = document.getElementById('card-number'),
    $cardMonth = document.getElementById('card-month'),
    $cardYear = document.getElementById('card-year'),
    $cardCvc = document.getElementById('card-cvc'),
    $cardButton = document.getElementById('card-confirm'),
    $textsError = document.querySelectorAll('.form__error');

window.addEventListener('DOMContentLoaded',()=>{
    $cardName.addEventListener('input',handleName)
    $cardNumber.addEventListener('input',handleNumber)
    $cardMonth.addEventListener('input',handleDate)
    $cardYear.addEventListener('input',handleDate)
    $cardCvc.addEventListener('input',handleCvc)


    $cardButton.addEventListener('click',(e) =>{
        e.preventDefault()
        console.log($cardName.value)
        console.log( $textsError[2]);
    })
})

// Wrong formant,numbers only

function handleName(){
    ($cardName.value === "")
        ? $textsError[0].textContent = "Can´t be blank"
        : $textsError[0].textContent = ""
    
}

function handleNumber(){
    
    ($cardNumber.value === "")
       ? $textsError[1].textContent = "Can´t be blank"
       : $textsError[1].textContent = ""
    
}

function handleDate(){

    ($cardMonth.value === "" && $cardYear.value === "")  ? $textsError[2].textContent = "Can´t be blank" : $textsError[2].textContent = ""
}

function handleCvc(){
    
    ($cardCvc.value === "")
        ? $textsError[3].textContent = "Can´t be blank"
        : $textsError[3].textContent = ""
    
}