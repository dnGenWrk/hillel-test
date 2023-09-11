"use strict";
class Order {
  constructor(productid, products, formdata) {
    this.product = products.find((e) => {
      return +e.productId === +productid;
    });
    const dateFull = new Date();
    const day = dateFull.getDate();
    const month = dateFull.getMonth() + 1;
    const year = dateFull.getFullYear();
    this.date = `${day}-${month}-${year}`;
    this.productId = this.product.productId;
    this.name = this.product.name;
    this.price = this.product.price;
    this.fname = formdata.get("fname");
    this.lname = formdata.get("lname");
    this.mname = formdata.get("mname");
    this.fullname = this.fname + " " + this.lname + " " + this.mname;
    this.city = formdata.get("city");
    this.adress = formdata.get("adress");
    this.paymentMethod = formdata.get("paymentMethod");
    this.count = formdata.get("count");
    this.totalPrice = this.price * this.count;
    this.comment = formdata.get("comment");
  }
}
