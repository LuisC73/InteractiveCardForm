const $cardName = document.getElementById("card-name"),
  $cardNumber = document.getElementById("card-number"),
  $cardMonth = document.getElementById("card-month"),
  $cardYear = document.getElementById("card-year"),
  $cardCvc = document.getElementById("card-cvc"),
  $cardButton = document.getElementById("card-confirm"),
  $textsError = document.querySelectorAll(".form__error"),
  $form = document.querySelector(".form"),
  $complete = document.querySelector(".complete"),
  $completeButton = document.querySelector(".complete__button"),
  $number = document.querySelector(".card__number"),
  $name = document.querySelector(".card__name"),
  $date = document.querySelector(".card__date"),
  $cvc = document.querySelector(".card__number--back");

window.addEventListener("DOMContentLoaded", () => {
  $cardName.addEventListener("input", handleName);
  $cardNumber.addEventListener("input", handleNumber);
  $cardMonth.addEventListener("input", handleDate);
  $cardYear.addEventListener("input", handleDate);
  $cardCvc.addEventListener("input", handleCvc);

  $cardButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      $cardName.value.length >= 1 &&
      $cardNumber.value.length >= 1 &&
      $cardMonth.value.length >= 1 &&
      $cardYear.value.length >= 1 &&
      $cardCvc.value.length >= 1
    ) {
      $form.style.display = "none";
      $complete.classList.add("complete__active");

      $number.textContent = $cardNumber.value
      $name.textContent = $cardName.value;
      $date.textContent = `${$cardMonth.value}/${$cardYear.value}`;
      $cvc.textContent = $cardCvc.value;
    } else {
      $textsError.forEach((error) => {
        error.textContent = "All fields must be complete";
      });
    }
  });

  $completeButton.addEventListener("click", () => {
    $form.style.display = "block";
    $complete.classList.remove("complete__active");

    $cardNumber.value = ""
    $cardName.value = ""
    $cardMonth.value = ""
    $cardYear.value = ""
    $cardCvc.value = ""
  });
});

function handleName() {
  $cardName.value === ""
    ? ($textsError[0].textContent = "Can´t be blank")
    : ($textsError[0].textContent = "");

    if ($cardName.value.length > 18) {
      $cardName.value = $cardName.value.slice(0, 18);
    }
}

function handleNumber() {
  // (typeof $cardNumber.value === "number")
  //     ? $textsError[1].textContent = "Wrong formant,numbers only"
  //     : $textsError[1].textContent = ""

  $cardNumber.value === ""
    ? ($textsError[1].textContent = "Can´t be blank")
    : ($textsError[1].textContent = "");

  if ($cardNumber.value.length > 16) {
    $cardNumber.value = $cardNumber.value.slice(0, 16);
  }

  if($cardNumber.value.length < 16){
    $textsError[1].textContent = "The card number must be 16 digits"
  }
}

function handleDate() {
  $cardMonth.value === "" && $cardYear.value === ""
    ? ($textsError[2].textContent = "Can´t be blank")
    : ($textsError[2].textContent = "");

  if ($cardMonth.value.length > 2) {
    $cardMonth.value = $cardMonth.value.slice(0, 2);
  }
  if ($cardYear.value.length > 2) {
    $cardYear.value = $cardYear.value.slice(0, 2);
  }
}

function handleCvc() {
  $cardCvc.value === ""
    ? ($textsError[3].textContent = "Can´t be blank")
    : ($textsError[3].textContent = "");

  if ($cardCvc.value.length > 3) {
    $cardCvc.value = $cardCvc.value.slice(0, 3);
  }
}
