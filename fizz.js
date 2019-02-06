function fizz(num){
    var str = num.toString();
    if ((num%3==0 && num%5==0) || (str.includes("3") && str.includes("5")) ){
        return "FizzBuzz";
    }else if (num%3==0 || str.includes("3")){
        return "Fizz";
    }else if (num%5==0 || str.includes("5")){
        return "Buzz";
    }else{
        return num;
    }
}

module.exports = fizz;