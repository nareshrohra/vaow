export class DigitFormatter {
  static format(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}
