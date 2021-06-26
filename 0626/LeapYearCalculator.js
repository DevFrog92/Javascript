
function IsLeapYear(year){

  if (!new.target) throw new Error('Is not made by new constructor');

  this.year  = year;
  this.month = 2;
  this.days;

  switch(this.month){
    case 1: case 3:case 5: case 7: case 8: case 10: case 12:
      this.days = 31;
      break
    case 4: case 6: case 9: case 11:
      this.days =30;
      break
    case 2:
      // 윤년 계산 알고리즘 
      // 1. 연도가 4로 나누어 떨어지는 해는 윤년이다.
      // 2. 연도가 4로 나누어 떨어지지만 연도가 100으로 나누어 떨어지는 해는 평년이다.
      // 3. 연도가 400으로 나누어 떨어지는 해는 윤년이다.
      this.days = ((this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0)) ? 29 : 28
      break
    default:
      console.log('Invalid Month');
  }
}


is_leap_year = new IsLeapYear(2021);
console.log(is_leap_year.days);