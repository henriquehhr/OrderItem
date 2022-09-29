import Item from "./Item";

export default class TaxItem extends Item {
  constructor(description, price) {
    super(description, price);
  }

  calculateTax(tax) {
    return this.price * tax;
  }

  getTax() {
    return 0;
  }
}