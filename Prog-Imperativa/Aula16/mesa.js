function FizzBuzz(a, b) {
    for (let i = 1; i <= 100; i++) {
        if(i%a==0){
            console.log('Fizz');
        }else if(i % b == 0) {
            console.log('Buzz');
        }else if(i % a == 0 && i % b == 0) {
            console.log('FizzBuzz');
        }else {
            console.log(i);
        }
            
    }
}

FizzBuzz(2, 6);