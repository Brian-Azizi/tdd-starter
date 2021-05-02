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

const splitIntoDigits = (n: number): number[] => {
  const digits = [];
  if (n === 0) digits.push(0);
  while (n >= 1) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }
  return digits.reverse();
};

function generateLCD(n: number): string {
  const digits = splitIntoDigits(n);
  return digits
    .map((digit) => lcdDigitMap[digit])
    .reduce(
      (acc, digit) => {
        return [acc[0] + digit[0], acc[1] + digit[1], acc[2] + digit[2]];
      },
      ["", "", ""]
    )
    .join("\n");
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
    [7777, " _  _  _  _ \n  |  |  |  |\n  |  |  |  |"],
  ])("should print the LCD for %s", (input, expecteLcd) => {
    const lcd = generateLCD(input);
    expect(lcd).toBe(expecteLcd);
  });
});
