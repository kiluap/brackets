
module.exports = function check(str, bracketsConfig) {
  function getCloseEl (charElem, arr){
    let closeEl
    for (let i = 0; i < arr.length; i++){
      if (charElem === arr[i][0]) return arr[i][1];
    }
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
  let char = '';
  let lastChar = '';
  let stack = [];
  let strArr = str.split('');
 
  strArr.forEach(element => {
      if (open.has(element) && !close.has(element)){
        stack.push(element);
        lastChar = element;
      } else if (close.has(element)){
        if (lastChar !=='') {
          let closebrec = getCloseEl(lastChar, bracketsConfig);           
          if (element === closebrec) {
            stack.pop();
            lastChar = stack.length > 0? stack[stack.length - 1]:'';
          }
        } else return false
      }

   });
    return (stack.length === 0);
}
