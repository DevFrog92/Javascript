let data = ['   + -- + - + -   ',
'   + --- + - +   ',
'   + -- + - + -   ',
'   + - + - + - +   ']
let s ='';
for (const i of data) {
  // console.log(i.replace(/ /g,'').replace(/\+/g,1).replace(/-/g,0));
  // console.log(parseInt(i.replace(/ /g,'').replace(/\+/g,1).replace(/-/g,0),2));
  // console.log(String.fromCharCode(parseInt(i.replace(/ /g,'').replace(/\+/g,1).replace(/-/g,0),2)));
  s += String.fromCharCode(parseInt(i.replace(/ /g,'').replace(/\+/g,1).replace(/-/g,0),2));
};

console.log(s);