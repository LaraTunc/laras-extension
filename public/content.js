/*global chrome*/

const invoiceNo = document.getElementById('invoice_number').innerText;
const orderDate = document.getElementById('invoice_date').innerText;
const cartId = document.getElementById('invoice_id').innerText;
const addressFields = document.getElementsByClassName('address-fields');

console.log(invoiceNo);

chrome.runtime.sendMessage(
  {
    greeting: 'hello',
    invoiceNo: invoiceNo,
    orderDate: orderDate,
    cartId: cartId,
    addressFields: addressFields,
  },
  function (response) {
    console.log(response.farewell);
  }
);
