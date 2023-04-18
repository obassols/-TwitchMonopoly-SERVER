export class PayConditionalCard extends Card {
  amountHouse;
  amountHotel;

  constructor(data) {
    super(data);
    this.amountHouse = data.amountHouse;
    this.amountHotel = data.amountHotel;
  }
}