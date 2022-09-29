import TaxItem from "./TaxItem";

export default class Beer extends TaxItem {
  constructor(description, price) {
    super(description, price);
  }

  getTax() {
    return 0.2;
  }
}