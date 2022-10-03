// Bài 1: Viết một hàm có tham số truyền vào là một giá trị chuỗi. Kết quả trả về là một đoạn văn mới trong đó có các chữ cái đầu của mỗi từ là chữ viết hoa.
function uppercase(str) {
  const stringArr = str.split(" ");

  for (let i = 0; i < stringArr.length; i++) {
    let string = stringArr[i];
    let firstLetter = string.charAt(0).toUpperCase();
    let remainLetters = string.slice(1);
    stringArr[i] = firstLetter + remainLetters;
  }
  return stringArr.join(" ");
}
// console.log(uppercase("the quick brown fox"));

// Bài 2: Viết một hàm có tham số truyền vào là một giá trị chuỗi. Kết quả trả về là từ có nhiều có số ký tự dài nhất trong chuỗi đó.
function findLongestWord(str) {
  const stringArr = str.split(" ");
  let longestWord = stringArr[0];

  for (const item of stringArr) {
    if (item.length > longestWord.length) {
      longestWord = item;
    }
  }

  return longestWord;
}
// console.log(findLongestWord("Web Development Tutorial"));

// Bài 3: Giả sử bạn đi mua hàng và chi trả bằng tiền xu, bạn muốn ít phải tiêu những đồng xu có mệnh giá thấp nhất. Hãy viết một hàm để giải quyết vấn đề này, hàm nhận 2 tham số, tham số thứ nhất là số tiền mà bạn phải trả, tham số thứ hai là một mảng gồm các mệnh giá tiền xu mà bạn có. Kết quả trả về một mảng gồm các đồng tiền xu mà bạn phải trả.
function countAmountCoins(price, coins) {
  let orderedCoins = [...coins].sort((a, b) => b - a);
  let counter = {};
  let sumTotal = 0;
  let result = [];

  for (const coin of orderedCoins) {
    counter[coin] = 0;
  }

  for (const coin of orderedCoins) {
    while (true) {
      if (sumTotal + coin > price) {
        break;
      }

      sumTotal += coin;
      counter[coin] += 1;
    }
  }

  Object.keys(counter).forEach((key) => {
    if (counter[key] !== 0) {
      for (let i = 0; i < counter[key]; i++) {
        result.unshift(key);
      }
    }
  });

  return result;
}
// console.log(countAmountCoins(46, [25, 10, 5, 2, 1]));

// Bài 4: Viết hàm nhận tham số là một chuỗi kết quả trả về là kỹ tự đầu tiên không bị trùng lặp tìm được trong chuỗi đã truyền vào.
function findFirstMatchChar(str) {
  const charArr = str.split("");
  const visited = {};
  let uniqueChars = [];

  for (const char of charArr) {
    if (!visited[char]) {
      visited[char] = 1;
    } else {
      visited[char] += 1;
    }
  }

  Object.keys(visited).forEach((key) => {
    if (visited[key] === 1) {
      uniqueChars.push(key);
    }
  });

  const indexes = uniqueChars.map((c) => str.indexOf(c));

  return str.charAt(Math.min(...indexes));
}

// Bài 5: Viết một hàm để in ra thời gian hiện tại với định dạng là: Thứ hai, 04.51 PM
function showCurrentTime() {
  const today = new Date();
  const day = today.getDay();
  const daylist = [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư ",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ];
  let hour = today.getHours();
  const minute = today.getMinutes();
  let prepand = hour >= 12 ? "Chiều" : "Sáng";
  hour = hour >= 12 ? hour - 12 : hour;

  return `Thời gian hiện tại là: ${daylist[day]}, ${hour
    .toString()
    .padStart(2, "0")}.${minute.toString().padStart(2, "0")} ${prepand}`;
}

// Bài 6: Viết một hàm in ra của sổ console các ngày Chủ nhật mùng 1 tháng đầu tiên trong khoảng năm 2014 đến 2050.
function findNewYearSunday() {
  for (const year = 2014; year <= 2050; year++) {
    const d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
      console.log("1st January is being a Sunday " + year);
    }
  }
}

// Bài 7: Viết một hàm nhận tham số là một mảng các giá trị số được sắp xếp từ nhỏ đến lớn. Kiểm tra xem mảng này gồm các số diễn tiến theo cấp số cộng hay cấp số nhân. Nếu không phải một trong hai kiểu đó trả về undefined.
function checkNumberRule(numArr) {
  let rule = undefined;

  for (let i = 0; i < numArr.length; i++) {
    if (i + 2 >= numArr.length) break;

    if (numArr[i + 2] - numArr[i + 1] === numArr[i + 1] - numArr[i]) {
      rule = "plus";
    } else {
      rule = undefined;
    }
  }

  if (!rule) {
    for (let j = 0; j < numArr.length; j++) {
      if (j + 2 >= numArr.length) break;

      if (numArr[j + 2] / numArr[j + 1] === numArr[j + 1] / numArr[j]) {
        rule = "multiply";
      } else {
        rule = undefined;
      }
    }
  }

  if (rule === "plus") {
    return "Đây là dãy số theo cấp số cộng";
  } else if (rule === "multiply") {
    return "Đây là dãy số theo cấp số nhân";
  } else return undefined;
}

// Bài 8: Xây dựng hàm nhận vào một tham số là một mảng cho trước. Hàm thực hiện tìm giá trị nhỏ nhất trong mảng và trả về giá trị đó.
function minArray(arr) {
  let min = arr[0];
  for (const i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// Bài 9: Viết một hàm thực hiện các chức năng sau. Tạo cửa sổ promt tại trình duyệt và yêu cầu người dùng đoán đúng kết quả là một số ngẫu nhiên từ 1 đến 10. Có cửa sổ alert hiển thị thông báo kết quả đúng sau hoặc giá trị người dùng nhập vào không phải là một số hợp lệ.
function guessTheNumber() {
  const result = Math.ceil(Math.random() * 9);

  const guessNumber = +prompt("Đáp án đúng là?");

  if (isNaN(guessNumber)) {
    alert("Số nhập vào không hợp lệ");
    return;
  }

  if (guessNumber > 10 || guessNumber < 1) {
    alert("Số nhập vào phải là các giá trị từ 1 đến 10");
    return;
  }

  if (guessNumber === result) {
    alert("Chúc mừng bạn đã lựa chọn đáp án đúng");
  } else {
    alert("Kết quả không chính xác");
  }
}

// Bài 10: Viết hàm tính số ngày từ hiện tại tới ngày Giáng Sinh tiếp theo?
function countDaysTillChristmas() {
  const today = new Date();
  const cmas = new Date(today.getFullYear(), 11, 25);
  if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
  }
  const one_day = 1000 * 60 * 60 * 24;
  return `${Math.ceil(
    (cmas.getTime() - today.getTime()) / one_day
  )} days left until Christmas!`;
}

// Bài 11: Viết một trò chơi từ một hàm. Khi bắt đầu, hàm sẽ chọn ra một số ngẫu nhiên từ 1 đến 50. Người dùng sẽ nhập kết quả qua cửa sổ prompt. Nếu người dùng đoán sai, hiển thị cửa sổ alert thông báo là giá trị người dùng đã nhập cao hay thấp hơn kết quả đúng. Nếu người dùng trả lời đúng thì trả về kết quả là số lần họ đã đoán (Chú ý, nếu giá trị người dùng đưa vào là không hợp lý thì không tính đó là một lần đoán)
function findTheNumberGame() {
  const result = Math.ceil(Math.random() * 50);
  let guessNumber = +prompt("Đáp án đúng là?");
  let time = 0;

  while (guessNumber !== result) {
    if (isNaN(guessNumber)) {
      alert("Số nhập vào không hợp lệ");
    } else if (guessNumber > 50 || guessNumber < 1) {
      alert("Số nhập vào phải là các giá trị từ 1 đến 50");
    } else if (guessNumber > result) {
      alert("Đáp án của bạn lớn hơn kết quả");
      time++;
    } else if (guessNumber < result) {
      alert("Đáp án của bạn nhỏ hơn kết quả");
      time++;
    }

    guessNumber = +prompt("Đáp án đúng là?");
  }

  alert(`Kết quả chính xác. Bạn trả lời đúng sau ${time} lượt`);
}

// Bài 12: Viết một hàm để lấy được một giá trị ngẫu nhiên trong một khoảng quy định của một mảng.
function getRandomValueInSpecifiedRange(start, length, inputArray) {
  if (start < 0 || length > inputArray.length) {
    return undefined;
  }

  const range = inputArray.slice(start, start + length);
  const randomIndex = Math.floor(Math.random() * length);

  return range[randomIndex];
}

// Bài 13: Viết một hàm trả về các giá trị lặp lại trong một mảng và trả về các giá trị đó trong một mảng.
function findRepeatedValues(inputArr) {
  const result = [];

  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[i] === inputArr[j]) {
        if (result.indexOf(inputArr[i]) !== -1) {
          continue;
        }

        result.push(inputArr[i]);
      }
    }
  }

  return result;
}

// Bài 14: Viết một hàm sử dụng để kiểm tra một mảng là giá trị tham số truyền vào. Nếu các giá trị trong mảng truyền vào được sắp xếp theo thứ tự tăng dần hàm trả về kết quả là 1, theo thứ tự giảm dần hàm trả về kết quả là -1 còn nếu không theo trật tự nào thì trả về 0.
function checkAscDescNumbers(inputArr) {
  if (inputArr[0] === inputArr[1]) {
    return 0;
  }

  let result = inputArr[0] > inputArr[1] ? -1 : 1;

  if (result === 1) {
    for (let i = 1; i < inputArr.length; i++) {
      if (inputArr[i] >= inputArr[i + 1]) {
        result = 0;
        break;
      }
    }
  } else {
    for (let i = 1; i < inputArr.length; i++) {
      if (inputArr[i] <= inputArr[i + 1]) {
        result = 0;
        break;
      }
    }
  }

  return result;
}

// Bài 15: Viết một hàm nhận tham số là 2 mảng và trả về kết quả là một mảng gồm các giá trị chung có ở cả 2 mảng tham số truyền vào.
function findCommonValues(arr1, arr2) {
  const result = [];

  for (const value of arr1) {
    const match = arr2.find((val) => val === value);

    if (match) {
      result.push(value);
    }
  }

  return result;
}

// Bài 16: Viết một hàm nhận tham số là một mảng về trả về một mảng gồm các giá trị không bị trùng lặp của mảng đã truyền vào.
function createUniqueArray(arr) {
  return Array.from(new Set(arr));
}

// Bài 17: Viết một hàm nhận 2 tham số là 2 số và trả về một mảng có số phần tử bằng với tham số thứ nhất và giá trị phần tử là bằng tham số thứ 2.
function fillArray(length, value) {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(value);
  }

  return result;
}

// Bài 18: Viết một hàm nhận 3 tham số trong đó: tham số thứ nhất là một mảng, tham số thứ 2 và 3 là 2 số. Kết quả trả về một mảng có 2 giá trị ở 2 vị trí index tương ứng với tham số thứ 2 và thứ 3 đổi chỗ cho nhau. Trường hợp tham số truyền vào làm số index không hợp lệ hàm trả về false.
function switchArrayValuePosition(inputArr, index1, index2) {
  if (index1 >= inputArr.length || index2 >= inputArr.length) {
    return false;
  }

  const middle = inputArr[index1];
  inputArr[index1] = inputArr[index2];
  inputArr[index2] = middle;

  return inputArr;
}

// Bài 19: Viết một hàm nhận 2 tham số là 1 giá trị số. Nếu tham số thứ nhất lớn hơn tham số số thứ hai, hàm trả về một mảng gồm một dãy số giảm dần một khoảng bằng 1 từ tham số thứ nhất đến tham số thứ hai và người lại.
function rangeBetween(number1, number2) {
  const result = [];

  if (number1 > number2) {
    for (let i = number1; i >= number2; i--) {
      result.push(i);
    }
  } else {
    for (let i = number1; i <= number2; i++) {
      result.push(i);
    }
  }

  return result;
}

// Bài 20: Viết một hàm trả về kết quả theo định dạng ngày, tháng, năm. Hàm có nhận một tham số là một giá trị chuỗi và tham số này sẽ sử dụng để tạo dấu ngăn cách giữa các đơn vị thời gian. Nếu không có tham số thì định dạng mặc định là "29-09-2022"
function getFormatedDate(seperator = "-") {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  const year = today.getFullYear();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  return day + seperator + month + seperator + year;
}

// Bài 21: Viết một hàm nhận 2 tham số với tham số thứ nhất là tháng và tham số thứ 2 là năm. Kết quả trả về số ngày của tháng đó trong năm.
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// Bài 22: Viết một hàm nhận tham số là một giá trị chuỗi thời gian có định dạng như sau "29-09-2022". Hàm trả về giá trị true nếu ngày này là cuối tuần, trả lại false nếu không phải.
function isWeekend(date) {
  const [day, month, year] = date.split("-");

  const currentDate = new Date(year, +month - 1, +day);

  if (currentDate.getDay() == 6 || currentDate.getDay() == 0) {
    return true;
  } else {
    return false;
  }
}

// Bài 22: Viết một hàm nhận tham số lần lượt là giá trị ngày, tháng, năm sinh. Kết quả của hàm trả về tuổi theo giá trị tham số truyền vào. Nếu thời gian nhập vào là ở tương lai thì trả về undefined.
function calcAge(day, month, year) {
  const difference = Date.now() - new Date(year, month - 1, day);

  return Math.floor(difference / 1000 / 60 / 60 / 24 / 365);
}

// Bài 23: Viết một hàm nhận tham số là một mảng gồm các số, hàm trả về true nếu trong mảng đó có 1 số chứa số 7, trả về false nếu không có số nào chứa số 7.
function checkNumberSeven(inputArr) {
  return inputArr.some((num) => String(num).indexOf("7") !== -1);
}

// Bài 24: Bài toán chia vàng. Hải và Tùng cùng đi tìm kiếm kho báu, 2 bạn đựng số châu báu mà mình kiếm được vào các túi lớn nhỏ lẫn lộn và nhét chúng vào trong một cái ống tre để đeo sau lưng. Khi chia số của cải, 2 người quy định là chặt lấy 2 đầu ống che, đầu nào lấy ra được túi vàng lớn hơn thì lấy túi vàng đó, lần lượt cho đến khi hết vàng trong ống. Cho ống tre là một mảng, số vàng trong túi là các phần tử trong mảng đó, viết hàm để chia ra số vàng mà 2 người nhận được theo cách phân chia trên.
function distributeGold(pipe) {
  let dist1 = 0;
  let dist2 = 0;
  const copyPipe = [...pipe];

  while (copyPipe.length > 0) {
    if (copyPipe[0] > copyPipe[copyPipe.length - 1]) {
      dist1 += copyPipe.shift();
    } else {
      dist1 += copyPipe.pop();
    }

    if (copyPipe.length <= 0) {
      break;
    }

    if (copyPipe[0] > copyPipe[copyPipe.length - 1]) {
      dist2 += copyPipe.shift();
    } else {
      dist2 += copyPipe.pop();
    }
  }

  return [dist1, dist2];
}

// Bài 25: Viết một hàm nhận tham số là một mảng và trả về độ dài của mảng đó, nếu phần tử của mảng đó là mảng thì tính cả phần tử con của mảng đó.
function countNestedArray(inputArr) {
  let count = 0;

  for (const item of inputArr) {
    if (Array.isArray(item)) {
      count += countNestedArray(item);
    } else {
      count++;
    }
  }

  return count;
}

// Bài 26: Viết một hàm nhận tham số là một số, hàm kiểm tra xem số đó có phải là kết quả của một giai thừa hay không?
function isFactorial(number) {
  let i = 1;
  let count = 2;

  while (i < number) {
    i *= count;
    count++;
  }

  return i === number;
}

// Bài 27: Viết một hàm nhận tham số là một chuỗi có định dạng như sau "SheWalksToTheBeach" và trả về kết quả "She Walks To The Beach".
function insertWhitespace(string) {
  const upperCaseIndexes = [0];
  const splitedStrings = [];

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      upperCaseIndexes.push(i);
    }
  }

  for (let j = 0; j < upperCaseIndexes.length; j++) {
    let slice;

    if (j === upperCaseIndexes.length - 1) {
      slice = string.slice(upperCaseIndexes[j]);
    } else {
      slice = string.slice(upperCaseIndexes[j], upperCaseIndexes[j + 1]);
    }

    splitedStrings.push(slice);
  }

  return splitedStrings.join(" ");
}

// Bài 28: Viết một hàm sử dụng để tính tiền công của một nhân viên làm việc trong tuần. Tiền công mà bạn đó được trả là 10$ 1 giờ cho 8 tiếng làm việc, làm thêm giờ nhận 150% lương. Hàm nhận tham số là một mảng gồm giờ công mỗi ngày trong 1 tuần của bạn nhân viên đó và trả về số tiền công của tuần đó.
function calcWeeklySalary(table) {
  let result = 0;

  for (const hours of table) {
    if (hours === 0) {
      continue;
    }

    const overTime = hours - 8;
    result += 8 * 10 + overTime * 15;
  }

  return result;
}
