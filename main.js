const addNums = (num1, num2) => {
    const sum = num1 + num2
    return sum
}
const multNum = (num1) => {
    const sum = num1 * 2
    return sum
}

const addedNum = addNums(4,14)
const doubleNum = multNum(addedNum)

console.log(doubleNum)