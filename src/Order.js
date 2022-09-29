export default class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((prev, current) => { return prev += current.price }, 0);
  }

  getTaxes() {
    const taxes = this.items.reduce((prev, current) => {
      const currentTax = current.calculateTax?.(current.getTax());
      return prev += (currentTax ? currentTax : 0);
    }, 0);
    return taxes;
  }

}