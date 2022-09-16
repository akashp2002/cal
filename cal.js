// to view content inside result whatever we click on the button
function displayNum(num){
    console.log(result);
    result.value +=num
} 

function allClear(){
    result.value=""
}
function evalExp(){
    result.value=eval(result.value)
}
function LastDigit(){
  result.value=result.value.slice(0,-1)
}