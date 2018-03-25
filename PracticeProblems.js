//delay function
function fetch(param1,cb){
  console.log(param1);
  setTimeout(cb,10000);
  
}

function add(value1) {
  return function(value2) {
    return value1 + value2;
  }
}
add(5)(7);


function add3(value1){
  return function(value2){
    return function (value3){
      return value1+value2+value3;
    }
  }
}

add3(2)(5)(7)
