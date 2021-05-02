/*
   _  _     _  _  _  _  _  _
 | _| _||_||_ |_   ||_||_|| |
 ||_  _|  | _||_|  ||_| _||_|
 */

function generateLCD(n: number): string {
  return " \n|\n|";
}

describe("digitToLcd", function () {
  it.each([[1, " \n|\n|"]])("should print the LCD for %s", (input, lcd) => {
    expect(generateLCD(input)).toBe(lcd);
  });
});
