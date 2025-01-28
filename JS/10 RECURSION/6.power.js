

const calculateSubPower= (input, power) => {
    if(power === 0) {
        return 1;
    }
    if(power === 1) {
        return input;
    }

    return input * calculateSubPower(input, power - 1);
}

console.log(calculateSubPower(2, 3));