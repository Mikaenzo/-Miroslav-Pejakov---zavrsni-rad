//Cetvrti zadatak

var i = 1;
for ( i = 1 ; i<=100 ; i++) {
    
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }else if (i%3===0) {
        console.log("Fizz");
}
    else if (i%5===0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}


//Peti zadatak

var arrNum = [2, 5, 9, 7];
var sum = arrNum.reduce(function(a, b){
    return a + b;
  });
  console.log(sum);