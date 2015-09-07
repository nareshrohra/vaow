export class Validator {
  static isDefinedAndNotNull(value) {
    return typeof value !== "undefined" && value !== null;
  }

  static isPositiveNumber(value) {
    return Validator.isDefinedAndNotNull(value) &&
      !isNaN(value) && value >= 0;
  }

  static isNumber(value) {
    return Validator.isDefinedAndNotNull(value) &&
      !isNaN(value);
  }
}
