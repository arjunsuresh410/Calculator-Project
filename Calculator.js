var num = [ ];
function getNumber(numbers){
  num = num+numbers
  console.log(num)
  document.getElementById('result').innerHTML = num



  

}
function getResult(){ 
  num= eval(num)
  console.log(num)
  document.getElementById('result').innerHTML = num
}
function getEmpty(){
  window.location ="Calculator.html";
  document.getElementById('result').innerHTML = num
}
function getNegative(){
  if(num.length>0){
    if( num[0] == 0 ){
    }
    else{
    if( num[0]=='-'){
      num =  num.slice(1)
    document.getElementById('result').innerHTML = num
  }else{
    num = '-'+num
    document.getElementById('result').innerHTML = num
  }
}
}
}