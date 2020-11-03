const timers = process.argv.slice(2);

const alarmClock = (times) => {
  for(const element of times) {
    if(isNaN(element) || element <= 0) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('BEEP');
    }, element * 1000);
  }
};

alarmClock(timers);