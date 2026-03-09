"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Jonathan Cantu
      Date:   March 8, 2026

      Filename: project06-03.js
*/

var useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling() {

    if (!useShip.checked) return;

    var shipFirstName = document.getElementById("firstnameShip").value;
    var shipLastName = document.getElementById("lastnameShip").value;
    var shipAddress1 = document.getElementById("address1Ship").value;
    var shipAddress2 = document.getElementById("address2Ship").value;
    var shipCity = document.getElementById("cityShip").value;
    var shipZip = document.getElementById("codeShip").value;

    document.getElementById("firstnameBill").value = shipFirstName;
    document.getElementById("lastnameBill").value = shipLastName;
    document.getElementById("address1Bill").value = shipAddress1;
    document.getElementById("address2Bill").value = shipAddress2;
    document.getElementById("cityBill").value = shipCity;
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
    document.getElementById("codeBill").value = shipZip;
};

let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");

formElements.forEach(element => {
    if (element.value === "") {
        element.classList.add("error");
    }
    element.addEventListener("invalid", showValidationError);
});

function showValidationError(event) {
    event.preventDefault();
    errorBox.textContent = "Complete all highlighted fields.";
};
