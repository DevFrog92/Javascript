// Set -> 집합
// 중복을 허용하지 않는다.

let s = new Set('abcde');
console.log(s.size);
s.add('f')
console.log(s);

let ss = new Set('abcde'.split(''));
for (const i of ss) {
  console.log(i)
}

ss.clear()
console.log(ss)