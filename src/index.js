// Try edit message
/*Ⅰ
Ⅱ
Ⅲ
Ⅳ
Ⅴ
Ⅵ
Ⅶ
Ⅷ
Ⅸ
Ⅹ
 */
const RimNum = {
  Ⅰ: 1,
  Ⅱ: 2,
  Ⅲ: 3,
  Ⅳ: 4,
  Ⅴ: 5,
  Ⅵ: 6,
  Ⅶ: 7,
  Ⅷ: 8,
  Ⅸ: 9,
  Ⅹ: 10
};

function Calc(inputString) {
  try {
    let [a, op, b] = inputString.split(" ");

    if (a in RimNum) {
      a = RimNum[a];
    } else {
      a = parseInt(a);
    }
    if (b in RimNum) {
      b = RimNum[b];
    } else {
      b = parseInt(b);
    }
    if (a > 10 || b > 10) {
      throw new Error("lalala");
    }

    switch (op) {
      case "+":
        return a + b;

      case "-":
        return a - b;

      case "*":
        return a * b;

      case "/":
        return a / b;
      default:
        return 0;
    }
  } catch (e) {
    console.log(e);
  }
}

let res = Calc("Ⅳ + Ⅶ");
console.log(res);
