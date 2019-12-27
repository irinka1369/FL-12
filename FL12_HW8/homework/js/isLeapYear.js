function isLeapYear(date) {
  let inputDate = new Date(date);
  let year = inputDate.getFullYear();
  if (isNaN(year)) {
    return "Invalid Date";
  } else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return `${year} is a leap year`;
    } else {
      return `${year} is not a leap year`;
    }
  }
}
isLeapYear("2020-03-04 00:00:34");
