module.exports = function check(str, bracketsConfig) {
  
  const stackArr = [];

  for (let i = 0; i < str.length; i++) {
    stackArr.push(str[i]);
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (stackArr[stackArr.length - 2] === bracketsConfig[j][0] && stackArr[stackArr.length - 1] === bracketsConfig[j][1]) {
        stackArr.pop();
        stackArr.pop();
      }
    }
  }

  // if (stackArr.length > 0) {
  //   return false;
  return stackArr.length > 0 ? false : true;    
};
