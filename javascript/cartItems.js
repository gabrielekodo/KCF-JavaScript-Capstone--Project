// SHOW ITEMS PURCHASED
const table = document.querySelector("table");

const itemList = JSON.parse(localStorage.getItem("cart"));

itemList.forEach((element) => {
  //create an empty <tr> element
  let row = table.insertRow(-1);
  //insert new cells
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  // add content to new cells
  cell1.innerHTML = `<div class="cart-info"><img width='70px' src='${element.img}'> ${element.name}</div>`;
  cell2.innerHTML = `<input type="number" disabled value="${element.quantity}">`;
  cell3.innerHTML = `UGX ${element.bill}`;
});

// calculate total number of items and total bill

let { totalItems, totalBill } = itemList.reduce(
  (total, item) => {
    const { quantity, price } = item;
    //count items
    total.totalItems += quantity;
    //sum bill
    total.totalBill += quantity * price;
    return total;
  },
  {
    totalItems: 0,
    totalBill: 0,
  }
);

// total Bill
document.querySelector(".total").innerHTML = `
<p class="bill">Number of Items: ${totalItems}
<p class="bill">Final Bill: UGX ${totalBill}`;
