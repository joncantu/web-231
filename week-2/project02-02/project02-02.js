/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Jonathan Cantu
      Date: January 25, 2026

      Filename: project02-02.js
 */

function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (name == "" || email == "" || phone == "") {
    window.alert("Please complete all fields before submitting the form.");
  } else {
    window.alert("Thank you for completing the form.");
  }
}

document.getElementById("submit").addEventListener("click", verifyForm);
