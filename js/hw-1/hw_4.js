// 2. Використовуючи конструкцію if..else, напишіть код, який отримує число через prompt, а потім виводить в alert:
// 1, якщо значення більше нуля,
// -1, якщо значення менше нуля,
// 0, якщо значення дорівнює нулю.
// Передбачається, що користувач вводить лише цифри.

const userNumber = prompt("Введіть число");

if (userNumber <= 0) {
  if (userNumber < 0) {
    alert("-1");
  } else {
    alert("0");
  }
} else {
  alert("1");
}
