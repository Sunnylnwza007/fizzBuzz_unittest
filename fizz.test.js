const fizz = require("./fizz");

test('1', ()=> {
    expect(fizz(1)).toBe(1);
});

test('3', ()=> {
    expect(fizz(3)).toBe("Fizz");
});

test('5', ()=> {
    expect(fizz(5)).toBe("Buzz");
});

test('15', ()=> {
    expect(fizz(15)).toBe("FizzBuzz");
});

for (let i=1;i<=100;i++){
    const newFizz = fizz(i);
    let strFizz = i.toString();
    if (i%3==0 && i%5==0 || (strFizz.includes("3") && strFizz.includes("5"))){
        test('3 and 5', ()=> {
            expect(newFizz).toBe("FizzBuzz");
        });
    }else if (i%3==0 || strFizz.includes("3")){
        test('3', ()=> {
            expect(newFizz).toBe("Fizz");
        });
    }else if (i%5==0 || strFizz.includes("5")){
        test('5', ()=> {
            expect(newFizz).toBe("Buzz");
        });
    }else{
        test('other', ()=> {
            expect(newFizz).toBe(i);
        });
    }
   
}