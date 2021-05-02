const lcdDigitMap = {
  /*
 _     _  _     _  _  _  _  _
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|
 */
  0: [" _ ", "| |", "|_|"],
  1: ["   ", "  |", "  |"],
  2: [" _ ", " _|", "|_ "],
  3: [" _ ", " _|", " _|"],
  4: ["   ", "|_|", "  |"],
  5: [" _ ", "|_ ", " _|"],
  6: [" _ ", "|_ ", "|_|"],
  7: [" _ ", "  |", "  |"],
  8: [" _ ", "|_|", "|_|"],
  9: [" _ ", "|_|", " _|"],
};

function generateLCD(n: number): string {
  if (n >= 100) {
    const firstDigit = Math.floor(n / 100);
    const secondDigit = Math.floor((n % 100) / 10);
    const thirdDigit = n % 10;
    const firstLcd = lcdDigitMap[firstDigit];
    const secondLcd = lcdDigitMap[secondDigit];
    const thirdLcd = lcdDigitMap[thirdDigit];
    return [
      firstLcd[0] + secondLcd[0] + thirdLcd[0],
      firstLcd[1] + secondLcd[1] + thirdLcd[1],
      firstLcd[2] + secondLcd[2] + thirdLcd[2],
    ].join("\n");
  }
  if (n >= 10) {
    const firstDigit = Math.floor(n / 10);
    const secondDigit = n % 10;
    const firstLcd = lcdDigitMap[firstDigit];
    const secondLcd = lcdDigitMap[secondDigit];
    return [
      firstLcd[0] + secondLcd[0],
      firstLcd[1] + secondLcd[1],
      firstLcd[2] + secondLcd[2],
    ].join("\n");
  }
  const digit = n % 10;
  const lcd = lcdDigitMap[digit];
  return [lcd[0], lcd[1], lcd[2]].join("\n");
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
