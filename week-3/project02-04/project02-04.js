/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Jonathan Cantu
      Date: January 26, 2026

      Filename: project02-04.js
 */

  const CHICKEN_PRICE = 10.95;
  const HALIBUT_PRICE = 13.95;
  const BURGER_PRICE = 9.95;
  const SALMON_PRICE = 18.95;
  const SALAD_PRICE = 7.95;
  const SALES_TAX = 0.07;

  document.getElementById("chicken").addEventListener("click", calcTotal)
  document.getElementById("halibut").addEventListener("click", calcTotal)
  document.getElementById("burger").addEventListener("click", calcTotal)
  document.getElementById("salmon").addEventListener("click", calcTotal)
  document.getElementById("salad").addEventListener("click", calcTotal)

  function calcTotal() {
    let cost = 0;
    let buyChicken = false;
    let buyHalibut = false;
    let buyBurger = false;
    let buySalmon = false;
    let buySalad = false;

    if (document.getElementById("chicken").checked) {
      buyChicken = true;
    }
    if (document.getElementById("halibut").checked) {
      buyHalibut = true;
    }
    if (document.getElementById("burger").checked) {
      buyBurger = true;
    }
    if (document.getElementById("salmon").checked) {
      buySalmon = true;
    }
    if (document.getElementById("salad").checked) {
      buySalad = true;
    }

    if (buyChicken) {
      cost += CHICKEN_PRICE;
    }
    if (buyHalibut) {
      cost += HALIBUT_PRICE;
    }
    if (buyBurger) {
      cost += BURGER_PRICE;
    }
    if (buySalmon) {
      cost += SALMON_PRICE;
    }
    if (buySalad) {
      cost += SALAD_PRICE;
    }

    document.getElementById("foodTotal").innerText = formatCurrency(cost);

    let tax = cost * SALES_TAX;
    let totalCost = cost + tax;

    document.getElementById("foodTax").innerText = formatCurrency(tax);
    document.getElementById("totalBill").innerText = formatCurrency(totalCost);
  }

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
