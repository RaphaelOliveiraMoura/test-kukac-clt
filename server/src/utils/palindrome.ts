/**
 * Verifica se um dado valor é ou não um palíndromo
 * @param value 
 */
export function verifyIfIsPalindrome(value: number): boolean {
    const absoluteValue = Math.abs(value);
    const reversedValue = absoluteValue.toString().split('').reverse().join('');
    const isPalindrome = reversedValue == absoluteValue.toString();
    return isPalindrome;
}

/**
 * Gera uma lista com todos valores palíndromes dentro de um intervalo de números
 * @param startInterval 
 * @param finalInterval 
 */
export function generatePalindromeNumbers(
    startInterval: number = 0,
    finalInterval: number = 100): Array<number> {

    /**
     * Verifica se o intervalo digitado pelo usuário está ordenado
     * Caso não esteja, ele o ordena para pegar dentro de um intervalo
     */
    const firstValue = startInterval < finalInterval ? startInterval : finalInterval;
    const lastValue = startInterval < finalInterval ? finalInterval : startInterval;

    let palindromeValues: Array<number> = [];
    for(let value: number = firstValue; value <= lastValue; value++){
        if(verifyIfIsPalindrome(value)) palindromeValues.push(parseInt(<any>value));
    }

    return palindromeValues;

}