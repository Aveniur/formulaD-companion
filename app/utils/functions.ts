/**
 * Round a number to a specified number of decimal places using the locale of the user's browser.
 * @param {number} num - number - The number to round
 * @param {number} decimals - The number of decimal places to round to.
 */

export const roundNumber = (num: number, decimals: number) =>
  +num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
