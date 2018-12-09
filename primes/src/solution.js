exports.sumPrimes = function (arr) {
    if (!Array.isArray(arr))
        throw new Error('error no array')
    let sum = 0;
    arr.forEach(el => {
        if (isNaN(el)){
            throw "error";
        }
        else if (isPrime(el))
            sum += el;
    });
    return sum;
}

const isPrime = (number) => {
    if (number < 0  || (number - Math.round(number) !== 0))
        return false;
    if (number === 1)
        return false;
    if( number === 2)
        return true;

    for ( let i=2; i*i<=number; i++)
        if (!(number % i) )
            return false;

    return true;
}

exports.isPrime = isPrime;