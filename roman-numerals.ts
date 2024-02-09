export const toRoman = (input: number): string => {
    const units = input % 10
    const romanUnits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    const tens = Math.floor(input / 10) % 10
    console.log(tens)
    const romanTens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    const hundreds = Math.floor(input / 100) % 10
    const romanHundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    const thousands = Math.floor(input / 1000) % 10
    const romanThousands = ['', 'M', 'MM', 'MMM']
    return romanThousands[thousands] + romanHundreds[hundreds] + romanTens[tens] + romanUnits[units]
  }
  