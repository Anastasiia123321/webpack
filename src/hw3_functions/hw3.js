export default function getMaxDigit(number) {
    const someNumber = number.toString();
    return Math.max(...someNumber);
}
