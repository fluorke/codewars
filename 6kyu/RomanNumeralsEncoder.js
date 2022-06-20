const rome = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const range = (x) => {
  //console.log(`in range ==== x is ${x}`);
  if (x == 0) return 0;
 //let r = [1, 5, 10];
  if(x >= 5) {
    if(x > 8) return 10;
    return 5;
  } else if (x > 3) {
    return 5;
  } else return 1;
}

let number = 4;

// [3, 7, 2, 0]
let n = (number).toString().split('').map(n => parseInt(n)).reverse();
//console.log(`y is ${n}`)
//let n = [7,0,0,2];

console.log(n);
let x = 0, min = 1, str = "", mid = 5, max = 10;
let minS = "I", midS = "V", maxS = "X";
let count = 1;

for (let i = 0; i < n.length; i++) {
  if(i == 3) x = 1;
  else x = range(n[i]);
  let tempStr = "";
  switch(i) {
      case 0: 
        minS = "I";
        midS = "V";
        maxS = "X";
        break;
      case 1: 
        minS = "X";
        midS = "L";
        maxS = "C";
        break;
      case 2: 
        midS = "D";
        minS = "C";
        maxS = "M";
        break;
      case 3: 
        midS = "M";
        minS = "M";
        maxS = "M";
        break;
    }

  switch(x) {
    case mid:
    //str+=midS;
    tempStr+=midS;
    break;
    case min:
    //str+=minS;
    tempStr+=minS;
    break;
    case max:
    //str+=maxS;
    tempStr+=maxS;
    break;
    default: 0;
  }

  console.log(`x before while ${x}`)

  //console.log('before while', n[i], 'x is ' + x);
  let count = 1;
  while(n[i] != x && n[i] != 0) {
    //console.log(`while ==== temp is ${tempStr}, str is ${str}, x is ${x}`)

    if(minS != "M") {
      if(x > n[i]) {
        //str = minS + str;
        tempStr += minS;
        x--;
        console.log(`======= x is ${x}, tempStr is ${tempStr}`)
      } else {
        tempStr = minS + tempStr;
        x++;
      } 
    } else {
      if(count % 3 == 0 && count != 0) {
        tempStr += "DD";
        x++;
        count = 0;
      } else {
        tempStr += "M";
        x++;
        count++;
      }
      //console.log(`temp str is ${tempStr}`)
      tempStr = tempStr.split('').reverse().join('');
    }

    //console.log(`x is ${x}, count is ${count} tempStr ${tempStr}`);
    //str += minS;
  }

  //tempStr.split('').reverse().join('');
  if(n[i] != 0) {
    str += tempStr;
  } else if (n[3] == 0) {
    str += 'M';
  }
}
  
console.log(n, "\n");
console.log(str.split('').reverse().join(''));
//console.log(str);


