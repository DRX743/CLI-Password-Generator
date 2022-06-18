const program = require('commander')

program.version('1.0.0').description('simple password generator')

program
// for choosing the length of the generated pass
    .option('-l, --length <number>', 'length of password', '8')
// for saving the pass
    .option('-s, --save', 'save password to password.txt')
// remove the numbers
    .option('-nn, --no-numbers', 'remove numbers')
// remove the symbols
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()
