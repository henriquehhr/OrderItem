import TaxItem from "./TaxItem";

export default class Eletronics extends TaxItem {
  constructor(description, price) {
    super(description, price);
  }

  getTax() {
    return 0.3;
  }
}