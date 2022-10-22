const getSleepHours = (day) => {
  day = day.toLowerCase(); // eliminates CaSe-SeNSiTiVe

  // SWITCH METHOD
  switch (day) {
    case "sunday":
      return 6;
      break;
    case "monday":
      return 7;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 6;
      break;
    case "saturday":
      return 1100;
      break;
    default:
      return "Invalid day. Please, check your spelling.";
  }
};

/*
console.log(getSleepHours('SUNDAY')); // WORKED - printed 6
console.log(getSleepHours('WeDNESdAY')); // WORKED - printed 8
console.log(getSleepHours('SAturday')); // WORKED - printed 7
console.log(getSleepHours('Baby Friday')); // WORKED - printed Error
*/

const getActualSleepHours = () => {
  return (
    getSleepHours("Sunday") +
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday")
  );
};

// console.log(getActualSleepHours()); // WORKED - printed SUM: 45

const getIdealSleepHours = () => {
  let idealHours = 7; // ideal sleeping time per day: 7 hours
  return idealHours * 7; // multiplied by 7 days
};

// console.log(getIdealSleepHours()); // WORKED - printed ideal weekly sleeping hours: 49 total hours

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  // return actualSleepHours;
  let idealSleepHours = getIdealSleepHours();
  // return idealSleepHours;
  if (actualSleepHours === idealSleepHours) {
    console.log(
      "Congratulations! You've managed to sleep just the right amount of hours!"
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You need to get more sleep, you've missed your weekly ideal rest time by: " +
        (idealSleepHours - actualSleepHours) +
        " hours."
    );
  } else {
    console.log(
      "This week, you've sleep more than your ideal weekly hours. You've slept: " +
        (actualSleepHours - idealSleepHours) +
        " hours more than you should have."
    );
  }
};

calculateSleepDebt(); // step 11
