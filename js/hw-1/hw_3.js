// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе до консолі
//Рядок у форматі годин і хвилин
// 70 === 01:10

const userMessage = prompt("Введіть число (хв.):");
let consoleMinutes;
let consoleHours;

if (userMessage > 60) {
  const hours = Math.round(userMessage / 60);

  if (hours < 10) {
    consoleHours = "0" + hours;
  } else {
    consoleHours = hours;
  }

  const minutes = userMessage % 60;

  if (minutes < 10) {
    consoleMinutes = "0" + minutes;
  } else {
    consoleMinutes = minutes;
  }

  console.log(`${consoleHours}:${consoleMinutes}`);
}
