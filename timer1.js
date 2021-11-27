// For every input, alarm will beep after the input's value in seconds
const process = require("process");

// organizes array into only the inputted elements in ascending order
const args = process.argv.slice(2);

// Helper function that calls the setTimeout function
const alarm = num => {
  const number = Number(num);
  if (isNaN(number) || number < 0) {
    return;
  }

  return setTimeout(() => {
    process.stdout.write('\x07');
  }, number * 1000);
};

for (const arg of args) {
  alarm(arg);
}