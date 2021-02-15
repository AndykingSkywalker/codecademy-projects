const getSleepHours = day => {
  if (day = 'monday') {
    return 6;
  } else if (day = 'tuesday') {
    return 6;
  } else if (day = 'wednesday') {
    return 5;
  } else if (day = 'thursday') {
    return 3;
  } else if (day = 'friday') {
    return 1;
  } else if (day = 'saturday') {
    return 8;
  } else if (day = 'sunday') {
    return 2;
  } 

}

const getActualSleepHours = () => 8 + 8 + 8 + 9 + 10 + 8 + 8;

const getIdealSleepHours = idealHours => idealHours * 7; 

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours(8);

if (actualSleepHours === idealSleepHours){
  return console.log('You got the perfect amount of sleep!');
} else if (actualSleepHours > idealSleepHours) {
  return console.log('You got more sleep than you needed');
} else if (actualSleepHours < idealSleepHours) {
  return console.log('You got ' +(idealSleepHours - actualSleepHours) + 'hour(s) less sleep than you needed this week. Get some rest.');
}
} 
calculateSleepDebt();
