enum LCD {
  /*
 _     _  _     _  _  _  _  _
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|
 */
  ZERO = " _ \n| |\n|_|\n",
  ONE = "   \n  |\n  |\n",
  TWO = " _ \n _|\n|_ \n",
  THREE = " _ \n _|\n _|\n",
  FOUR = "   \n|_|\n  |\n",
  FIVE = " _ \n|_ \n _|\n",
  SIX = " _ \n|_ \n|_|\n",
  SEVEN = " _ \n  |\n  |\n",
  EIGHT = " _ \n|_|\n|_|\n",
  NINE = " _ \n|_|\n _|\n",
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
  if (n > 9) {
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
    [0, " _ \n| |\n|_|\n"],
    [1, "   \n  |\n  |\n"],
    [2, " _ \n _|\n|_ \n"],
    [3, " _ \n _|\n _|\n"],
    [4, "   \n|_|\n  |\n"],
    [5, " _ \n|_ \n _|\n"],
    [6, " _ \n|_ \n|_|\n"],
    [7, " _ \n  |\n  |\n"],
    [8, " _ \n|_|\n|_|\n"],
    [9, " _ \n|_|\n _|\n"],
    [10, "    _ \n  || |\n  ||_|"],
  ])("should print the LCD for %s", (input, expecteLcd) => {
    const lcd = generateLCD(input);
    console.log(lcd);
    expect(lcd).toBe(expecteLcd);
  });
});
