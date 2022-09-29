import TaxItem from "./TaxItem";

export default class Cigar extends TaxItem {
  constructor(description, price) {
    super(description, price);
  }

  getTax() {
    return 0.25;
  }
}