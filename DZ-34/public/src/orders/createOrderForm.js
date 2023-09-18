"use strict";
function createOrderForm(productid) {
  const formWrapper = tag("div", "", { id: "order-form", className: "order-form" });
  const tagForm = tag("form", "", { id: "orderform", name: "orderform" }, { "data-formproduct": productid });
  const formContent = tag("div");
  formContent.innerHTML = `
  <div class="order-form__input-wrapper">
    <label for="fname" class="order-form__label">First Name *</label>
    <input type="text" class="order-form__input" id="fname" name="fname" tabindex="1" value="" required />
  </div>
  <div class="order-form__input-wrapper">
    <label for="lname" class="order-form__label">Last Name *</label>
    <input type="text" class="order-form__input" id="lname" name="lname" tabindex="2" value="" required />
  </div>
  <div class="order-form__input-wrapper">
    <label for="mname" class="order-form__label">Middle Name</label>
    <input type="text" class="order-form__input" id="mname" name="mname" tabindex="3" />
  </div>
  <div class="order-form__input-wrapper">
    <label for="city" class="order-form__label">City: *</label>
    <select name="city" id="city" class="order-form__input" tabindex="4" value="" required>
      <option value="">--Please choose an option--</option>
      <option value="kyiv">Kyiv</option>
      <option value="lviv">Lviv</option>
      <option value="odesa">Odesa</option>
    </select>
  </div>

  <div class="order-form__input-wrapper">
    <label for="storage" class="order-form__label">Nova Poshta warehouse for delivery *</label>
    <input type="text" class="order-form__input" id="storage" name="adress" tabindex="5" value="" required />
  </div>

  <div class="order-form__input-wrapper">
    <label for="paymentMethod" class="order-form__label">Method of payment *</label>
    <select name="paymentMethod" id="paymentMethod" class="order-form__input" tabindex="6" value="" required>
      <option value="">--Please choose an option--</option>
      <option value="cashDelivery">Cash on delivery</option>
      <option value="creditCard">Credit card</option>
    </select>
  </div>

  <div class="order-form__input-wrapper">
    <label for="count" class="order-form__label">Item Counts *</label>
    <input type="number" class="order-form__input" id="count" name="count" tabindex="7" min="1" value="" required />
  </div>

  <div class="order-form__input-wrapper">
    <label for="comment" class="order-form__label">Comment to the order</label>
    <textarea id="comment" name="comment" class="order-form__input" rows="5" cols="33" tabindex="8"></textarea>
  </div>
  <button class="order-form__button" id="order-button">Byu now</button>
  `;
  tagForm.append(formContent);
  formWrapper.append(tagForm);

  tagForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (tagForm.checkValidity()) {
      const productID = e.target.dataset.formproduct;

      createOrder(productID, products, new FormData(tagForm));
      formWrapper.remove();
    }
  });
  return formWrapper;
}
