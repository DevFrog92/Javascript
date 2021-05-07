대기인원 = 14000605;
let day = 1200;
let hour = 100;
let minute = 15;
let count = 0;
function sol(num){
  console.log(num%day,parseInt(Math.floor(num/day),10));
    count += parseInt(Math.floor(num/day),10)*3600*12;
    num %= day;
    count += parseInt(Math.floor(num/hour),10)*3600;
    num %= hour;
    count += parseInt(Math.floor(num/minute),10)*60*10;
    num %= minute;
  if (num +2 >15){
    count+=60*15;
  }

  return count;
};

console.log(sol(대기인원));