function sol(a){
  let result = '';
  for (const i of a) {
    if(!result.includes(i)){
      result+=i;
    };
  };
  return result;
};

console.log(sol('ksekkset'));