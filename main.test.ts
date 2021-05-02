enum LCD {
  /*
 _     _  _     _  _  _  _  _
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|
 */
  ZERO = " _ \n| |\n|_|",
  ONE = "   \n  |\n  |",
  TWO = " _ \n _|\n|_ ",
  THREE = " _ \n _|\n _|",
  FOUR = "   \n|_|\n  |",
  FIVE = " _ \n|_ \n _|",
  SIX = " _ \n|_ \n|_|",
  SEVEN = " _ \n  |\n  |",
  EIGHT = " _ \n|_|\n|_|",
  NINE = " _ \n|_|\n _|",
}

const lcdMap = {
  0: LCD.ZERO,
  1: LCD.ONE,
  2: LCD.TWO,
  3: LCD.THREE,
  4: LCD.FOUR,
  5: LCD.FIVE,
  6: LCD.SIX,
  7: LCD.SEVEN,
  8: LCD.EIGHT,
  9: LCD.NINE,
};

function generateLCD(n: number): string {
  if (n >= 100) {
    const firstDigit = Math.floor(n / 100);
    const secondDigit = Math.floor((n % 100) / 10);
    const thirdDigit = n % 10;
    const first = lcdMap[firstDigit].split("\n");
    const second = lcdMap[secondDigit].split("\n");
    const third = lcdMap[thirdDigit].split("\n");
    return [
      first[0] + second[0] + third[0],
      first[1] + second[1] + third[1],
      first[2] + second[2] + third[2],
    ].join("\n");
  }
  if (n >= 10) {
    const firstDigit = Math.floor(n / 10);
    const secondDigit = n % 10;
    const first = lcdMap[firstDigit].split("\n");
    const second = lcdMap[secondDigit].split("\n");
    return [
      first[0] + second[0],
      first[1] + second[1],
      first[2] + second[2],
    ].join("\n");
  }
  return lcdMap[n];
}

describe("digitToLcd", function () {
  it.each([
    [0, " _ \n| |\n|_|"],
    [1, "   \n  |\n  |"],
    [2, " _ \n _|\n|_ "],
    [3, " _ \n _|\n _|"],
    [4, "   \n|_|\n  |"],
    [5, " _ \n|_ \n _|"],
    [6, " _ \n|_ \n|_|"],
    [7, " _ \n  |\n  |"],
    [8, " _ \n|_|\n|_|"],
    [9, " _ \n|_|\n _|"],
    [10, "    _ \n  || |\n  ||_|"],
    [88, " _  _ \n|_||_|\n|_||_|"],
    [234, " _  _    \n _| _||_|\n|_  _|  |"],
  ])("should print the LCD for %s", (input, expecteLcd) => {
    const lcd = generateLCD(input);
    console.log(lcd);
    expect(lcd).toBe(expecteLcd);
  });
});
