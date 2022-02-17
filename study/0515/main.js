import _ from 'lodash'; // From 'node modules

const usersA = [
  {userId:'1', name: 'yongsu'},
  {userId:'2', name: 'yongjin'}
]

const usersB = [
  {userId:'1', name: 'yongsu'},
  {userId:'3', name: 'yongjin'}
]

const usersC = usersA.concat(usersB);
console.log(usersC);
console.log('uniqBy',_.uniqBy(usersC,'userId'));

const usersD = _.unionBy(usersA,usersB,'userId');
console.log(usersD);


const users = [
  {userId:'1', name: 'yongsu1'},
  {userId:'2', name: 'yongjin2'},
  {userId:'3', name: 'yongjin3'},
  {userId:'4', name: 'yongjin4'},
  {userId:'5', name: 'yongjin5'},
  {userId:'6', name: 'yongjin6'},
]

const foundUser = _.find(users,{name:'yongsu1'});
console.log(foundUser);
const foundUserIndex = _.findIndex(users,{name:'yongjin4'});
console.log(foundUserIndex);
_.remove(users,{name:"yongsu1"})
console.log(users)

import myData from './myData.json';

console.log(myData);
console.log(typeof myData);
const user = {
  name:'yongsu',
  age:30,
  emails:[
    'yongsu@gmail.com',
    'dkdpdldjdy@naver.com'
  ]
}

console.log('user',user);

// const str = JSON.stringify(user);
// console.log('str',str);
// console.log(typeof str);

// const obj = JSON.parse(str);
// console.log(obj)
// console.log(typeof obj)

localStorage.setItem('user',JSON.stringify(user));
// console.log(localStorage.getItem('user'));
// console.log(JSON.parse(localStorage.getItem('user')));
// localStorage.removeItem('user')

const str = localStorage.getItem('user');
const obj = JSON.parse(str);
obj.age = 22;
console.log(obj)
localStorage.setItem('user',JSON.stringify(obj));