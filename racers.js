let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 18;

if (registeredEarly &&  age > 18) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly) {
  console.log(`${raceNumber} will be at 9:30 am`);
} else if (age > 18 && !registeredEarly) {
  console.log(`${raceNumber} will be at 11:00 am`);
} else if (age < 18) {
  console.log(`${raceNumber} will be at 12:30 pm`);
} else {
  console.log('Please approach the registration desk');
}