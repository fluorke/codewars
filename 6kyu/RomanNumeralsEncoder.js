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
  if (x == 0) return 0;
  if(x >= 5) {
    if(x > 8) return 10;
    return 5;
  } else if (x > 3) {
    return 5;
  } else return 1;
}


function solution(number){
  let x = 0, min = 1, str = "", mid = 5, max = 10;
  let minS = "I", midS = "V", maxS = "X";
  let count = 1;
  
  let n = (number).toString().split('').map(n => parseInt(n)).reverse();
  
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
    tempStr+=midS;
    break;
    case min:
    tempStr+=minS;
    break;
    case max:
    tempStr+=maxS;
    break;
    default: 0;
  }

  let count = 1;
  while(n[i] != x && n[i] != 0) {
    console.log(`${tempStr}`)

    if(minS != "M") {
      if(x > n[i]) {
        x--;
        tempStr += minS;
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
      tempStr = tempStr.split('').reverse().join('');
    }

  }
  if(n[i] != 0) {
    str += tempStr;
  } else if (n[3] == 0) {
    str += 'M';
  }
}
  
  return str.split('').reverse().join('');
}

