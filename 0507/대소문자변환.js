const islower = (a) => {return a.toLowerCase() === a}

function sol(a){
  let temp = a.split('');
  let result = '';
  for (const i of temp) {
    if(islower(i)){
      result += i.toUpperCase();
    }else {
      result += i.toLowerCase();
    };
  };
  return result;
};

console.log(sol('StuDY'));