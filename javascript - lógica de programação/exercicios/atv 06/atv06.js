function recebe(num) {

    if (typeof num !== 'number') return num;

    if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz'
    } else if (num % 3 == 0) {
        return 'Fizz'
    } else if (num % 5 == 0) {
        return 'Buzz'
    } else if (num % 3 !== 0 && num % 5 !== 0) {
        return num
    }

}

    const num = Math.floor(Math.random() * 100)

    console.log(recebe(num));

    console.log(num);