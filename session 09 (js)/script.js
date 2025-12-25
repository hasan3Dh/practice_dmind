function Avg(num){
    var sum = 0;
    for( var i = 0 ; i < num.length ; i++){
        sum += num[i];
    }
    return sum / num.length;
};
function variance(num){
    var sum2 = 0;
    for(var i = 0 ; i < num.length ; i++){
        sum2 += (num[i] - Avg(num))**2;
    }
    return sum2 / num.length;
};
var num = [10 , 10 , 20 , 30]
console.log(`avrage : ${Avg(num)}` , `variance : ${variance(num)}`);