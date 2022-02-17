돌의내구도 = [5, 3, 4, 1, 3, 8, 3];
독 = [{
    "이름" : "루비독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "4",
    },{
    "이름" : "피치독",
    "나이" : "95년생",
    "점프력" : "3",
    "몸무게" : "3",
    },{
    "이름" : "씨-독",
    "나이" : "72년생",
    "점프력" : "2",
    "몸무게" : "1",
    },{
    "이름" : "코볼독",
    "나이" : "59년생",
    "점프력" : "1",
    "몸무게" : "1",
    },
];

function through(stons,arr){
  let answer = [];
  for (const i of arr) {
    let falue = false;
    let position = 0;
    while (position < stons.length){
      position += parseInt(i['점프력'],10);
      stons[position-1] -= parseInt(i['몸무게'],10);
      if(stons[position-1] < 0){
        falue = true;
        break
      }
    };
    if(!falue){
      answer.push(i['이름']);
    };
  };
  return answer;
};

console.log(through(돌의내구도,독));

