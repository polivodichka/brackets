module.exports = function check() {
  let close = [')', ']', '}', '2', '4', '6'];
  let open = ['(', '[', '{', '1', '3', '5'];
  let vert_count = 0;
  let count_8 = 0;
  let count_7 = 0;
  
  let temp = '';
  
  let str = unpacking(arguments);
  for(let i = 0; i<str.length; i++){
    if(close.indexOf(str[i])>-1 || (str[i]==='|'&&vert_count%2!=0)|| (str[i]==='7'&&count_7%2!=0)|| (str[i]==='8'&&count_8%2!=0)){
      if((str[i] === '|'&&temp[temp.length-1]!='|') || (str[i] === '7'&&temp[temp.length-1]!='7')||(str[i] === '8'&&temp[temp.length-1]!='8'))
        return false;
      else if(str[i] === '|'&&temp[temp.length-1]==='|') {
        temp = temp.substring(0, temp.length - 1);
        vert_count--;
      }
      else if(str[i] === '7'&&temp[temp.length-1]==='7') {
        temp = temp.substring(0, temp.length - 1);
        count_7--;
      }
      else if(str[i] === '8'&&temp[temp.length-1]==='8') {
        temp = temp.substring(0, temp.length - 1);
        count_8--;
      }
      else if(temp[temp.length-1]!=open[close.indexOf(str[i])]) {
        return false;
      }
      else temp = temp.substring(0, temp.length - 1);
    }
    else {
      temp+=str[i];
      if (str[i] === '|') vert_count++;
      if (str[i] === '7') count_7++;
      if (str[i] === '8') count_8++;
    }
  }
  return temp.length>0?false:true;
}

function unpacking(){
  let answer = '';
  for (let i = 0; i<arguments.length; i++){
    if (typeof(arguments[i])==='string'){
      answer+=arguments[i]
    }
    else{
      for (let j = 0; j< arguments[i].length; j++){
        answer +=unpacking(arguments[i][j]);
      }
      
    }
  }
  return answer;
}

/*check('111115611111111222288888822225577877778775555666677777777776622222')*/