function sol(a){
  let result = new Set(a);
  return Array.from(result);
};
console.log(sol(['good','time','good','time','student']).join('\n'));