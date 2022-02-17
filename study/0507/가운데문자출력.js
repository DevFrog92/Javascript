function sol(a){
  let n = a.length;
  if(n%2){
    return [a[parseInt(Math.floor(n/2),10)]];
  }else {
    console.log(parseInt(Math.floor(n/2),10));
    return [a[parseInt(Math.floor(n/2),10)-1],a[parseInt(Math.floor(n/2),10)]];
  }
};

console.log(sol('good').join(''));