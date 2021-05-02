/*
   _  _     _  _  _  _  _  _
 | _| _||_||_ |_   ||_||_|| |
 ||_  _|  | _||_|  ||_| _||_|
 */

enum LCD {
  ONE = " \n|\n|",
  TWO = " _ \n _|\n|_ ",
  THREE = " _ \n _|\n _|",
  FOUR = "   \n|_|\n  |",
  FIVE = " _ \n|_ \n _|",
  SIX = " _ \n|_ \n|_|",
}

function generateLCD(n: number): string {
  if (n === 6) return LCD.SIX;
  if (n === 5) return LCD.FIVE;
  if (n === 4) return LCD.FOUR;
  if (n === 3) return LCD.THREE;
  if (n === 2) return LCD.TWO;
  return LCD.ONE;
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
