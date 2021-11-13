// For every input, alarm will beep after the input's value in seconds
const process = require("process");

// organizes array into only the inputted elements in ascending order
const args = process.argv.slice(2).sort();

// Helper function that calls the setTimeout function
const alarm = num => {
  return setTimeout(() => {
    process.stdout.write('\x07');
  }, num * 1000);
};

for (let i = 0; i < args.length; i++) {
  
  if (args[i] < 0 || typeof parseInt(args[i]) !== "number") {
    continue;
  }

  alarm(args[i]);
}