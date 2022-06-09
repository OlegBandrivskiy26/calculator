let curent = '';
btn1.onclick = function(){
    curent+='1';
    result.value = curent;
}
btn2.onclick = function(){
    curent+='2';
    result.value = curent;
}
btn3.onclick = function(){
    curent+='3';
    result.value = curent;
}
btn4.onclick = function(){
    curent+='4';
    result.value = curent;
}
btn5.onclick = function(){
    curent+='5';
    result.value = curent;
}
btn6.onclick = function(){
    curent+='6';
    result.value = curent;
}
btn7.onclick = function(){
    curent+='7';
    result.value = curent;
}
btn8.onclick = function(){
    curent+='8';
    result.value = curent;
}
btn9.onclick = function(){
    curent+='9';
    result.value = curent;
}
plus.onclick = function(){
    curent+='+';
    result.value = curent;
}
point.onclick = function(){
    curent+='.';
    result.value = curent;
}
minus.onclick = function(){
    curent+='-';
    result.value = curent;
}
multiplay.onclick = function(){
    curent+='*';
    result.value = curent;
}
divide.onclick = function(){
    curent+='/';
    result.value = curent;
}
procent.onclick = function(){
    curent = curent / 100 + '%';
    result.value = curent;
}
equl.onclick = function(){
    result.value = eval(curent);
}
clear.onclick = function(){
    curent='';
    result.value = curent;
}
plusMinus.onclick = function(){
    if(result.value>0){
        result.value = '-' + curent;
    }else if(result.value<0){
        result.value = '+' + curent;
    }
}