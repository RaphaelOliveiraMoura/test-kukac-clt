import {
    verifyIfIsPalindrome,
    generatePalindromeNumbers
} from '../../src/utils/palindrome';

test('verify palindrome numbers function', () => {

    expect(verifyIfIsPalindrome(555)).toBe(true);
    expect(verifyIfIsPalindrome(5565)).toBe(false);
    expect(verifyIfIsPalindrome(5665)).toBe(true);
    expect(verifyIfIsPalindrome(0)).toBe(true);
    expect(verifyIfIsPalindrome(-521)).toBe(false);
    expect(verifyIfIsPalindrome(-525)).toBe(true);
    expect(verifyIfIsPalindrome(564156456)).toBe(false);
    expect(verifyIfIsPalindrome(111111)).toBe(true);

});

test('verify the generation of palindrome numbers inside a interval', () => {

    expect(generatePalindromeNumbers(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(generatePalindromeNumbers(10, 25)).toEqual([11, 22]);

});