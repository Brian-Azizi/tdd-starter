/*
   _  _     _  _  _  _  _  _
 | _| _||_||_ |_   ||_||_|| |
 ||_  _|  | _||_|  ||_| _||_|
 */

function generateLCD(n: number): string {
  if (n === 6) return " _ \n|_ \n|_|";
  if (n === 5) return " _ \n|_ \n _|";
  if (n === 4) return "   \n|_|\n  |";
  if (n === 3) return " _ \n _|\n _|";
  if (n === 2) return " _ \n _|\n|_ ";
  return " \n|\n|";
}

describe("digitToLcd", function () {
  it.each([
    [1, " \n|\n|"],
    [2, " _ \n _|\n|_ "],
    [3, " _ \n _|\n _|"],
    [4, "   \n|_|\n  |"],
    [5, " _ \n|_ \n _|"],
    [6, " _ \n|_ \n|_|"],
  ])("should print the LCD for %s", (input, expecteLcd) => {
    const lcd = generateLCD(input);
    console.log(lcd);
    expect(lcd).toBe(expecteLcd);
  });
});
