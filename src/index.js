
module.exports = function check(str, bracketsConfig) {
  function getCloseEl (charElem, arr){
    let closeEl
    for (let i = 0; i < arr.length; i++){
      if (charElem === arr[i][0]) return arr[i][1];
    }
    return undefined;
  }
  // разделяем открывающие и закрывающие скобки
  let open = new Set();
  let close = new Set();
  bracketsConfig.forEach(element => {
    open.add(element[0]);
    close.add(element[1]);    
  });
  console.log(open);
  console.log(close);
// идём по строке 
  let lastChar = '';
  let stack = [];
  let strArr = str.split('');

  for (let i = 0; i<strArr.length; i++){
    let closebrec = getCloseEl(lastChar, bracketsConfig);  
      if (open.has(strArr[i]) && strArr[i] != closebrec){
        stack.push(strArr[i]);
        lastChar = strArr[i];
        console.log(stack);
      } else if (close.has(strArr[i])){
        if (lastChar === '') return false;
        if (strArr[i] === closebrec) {
            stack.pop();
            console.log(stack);
            lastChar = stack.length > 0? stack[stack.length - 1]:'';
            console.log('last=',lastChar)
        }
      }

   };
   console.log (stack.length)
    return (stack.length === 0);
}
