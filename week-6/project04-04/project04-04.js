"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-04

      Application to determine change from a cash amount
      Author: Jonathan Cantu
      Date:   February 22, 2026

      Filename: project04-04.js
*/

// Global variables
let cashBox = document.getElementById("cash");
let billBox = document.getElementById("bill");
let changeBox = document.getElementById("change");

// Event handlers to be run when the cash or bill value changes
cashBox.addEventListener("input", runTheRegister);
billBox.addEventListener("input", runTheRegister);

// Function to reset the values in the web page
function zeroTheRegister() {
  changeBox.value = 0;
  document.getElementById("bill20").textContent = 0;
  document.getElementById("bill10").textContent = 0;
  document.getElementById("bill5").textContent = 0;
  document.getElementById("bill1").textContent = 0;
  document.getElementById("coin25").textContent = 0;
  document.getElementById("coin10").textContent = 0;
  document.getElementById("coin5").textContent = 0;
  document.getElementById("coin1").textContent = 0;
  document.getElementById("warning").textContent = "";
}

// Function to run the cash register
function runTheRegister() {
  zeroTheRegister();

  // Convert input strings to numbers safely
  const cashValue = parseFloat(cashBox.value) || 0;
  const billValue = parseFloat(billBox.value) || 0;

  let changeValue = cashValue - billValue; // calculate the change

  try {
    // a) If changeValue is NOT >= 0, throw an exception
    if (!(changeValue >= 0)) {
      throw "Cash amount doesn't cover the bill";
    }

    // b) Run required commands
    changeBox.value = formatCurrency(changeValue);
    calcChange(changeValue);

  } catch (err) {
    // c) Display the thrown exception in the warning element
    document.getElementById("warning").textContent = err;
  }
}

// Function to calculate the change by each unit of currency
function calcChange(changeValue) {
  // Determine the number of $20 bills
  let bill20Amt = determineCoin(changeValue, 20);
  document.getElementById("bill20").textContent = bill20Amt;
  changeValue -= bill20Amt * 20;

  // Determine the number of $10 bills
  let bill10Amt = determineCoin(changeValue, 10);
  document.getElementById("bill10").textContent = bill10Amt;
  changeValue -= bill10Amt * 10;

  // Determine the number of $5 bills
  let bill5Amt = determineCoin(changeValue, 5);
  document.getElementById("bill5").textContent = bill5Amt;
  changeValue -= bill5Amt * 5;

  // Determine the number of $1 bills
  let bill1Amt = determineCoin(changeValue, 1);
  document.getElementById("bill1").textContent = bill1Amt;
  changeValue -= bill1Amt * 1;

  // Determine the number of quarters
  let coin25Amt = determineCoin(changeValue * 100, 25);
  document.getElementById("coin25").textContent = coin25Amt;
  changeValue -= coin25Amt * 0.25;

  // Determine the number of dimes
  let coin10Amt = determineCoin(changeValue * 100, 10);
  document.getElementById("coin10").textContent = coin10Amt;
  changeValue -= coin10Amt * 0.10;

  // Determine the number of nickels
  let coin5Amt = determineCoin(changeValue * 100, 5);
  document.getElementById("coin5").textContent = coin5Amt;
  changeValue -= coin5Amt * 0.05;

  // Determine the number of pennies
  // The Math.round() method rounds the value to the nearest integer
  let coin1Amt = Math.round(changeValue * 100);
  document.getElementById("coin1").textContent = coin1Amt;
}

/* ================================================================= */

// Function to determine the largest whole number of currency units that
// can fit within the cash value
function determineCoin(cashValue, currencyUnit) {
  // The parseInt() function returns the integer value of the ratio
  return parseInt(cashValue / currencyUnit);
}

// Function to display a numeric value as a text string in the format ##.##
function formatCurrency(value) {
  if (typeof value !== "number" || !isFinite(value)) {
    return "0.00";
  }
  return value.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
  // Now attach event handlers
  cashBox.addEventListener("change", runTheRegister);
  billBox.addEventListener("change", runTheRegister);
  // Optionally initialize
  zeroTheRegister();
});

function toNumber(v) {
  const n = parseFloat(v);
  return isNaN(n) ? 0 : n;
}
