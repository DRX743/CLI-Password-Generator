#!usr/bin/env node
const program = require('commander');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const chalk = require('chalk');
const clipboardy = require('clipboardy');

const log = console.log;

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

const {length, save, numbers, symbols} = program.opts();

// Get the geenerated Password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if(save) {
    savePassword(generatedPassword)
}

// copy to the clipboard
clipboardy.writeSync(generatedPassword);

// Output the generated pass
log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
log(chalk.yellow('Password copied !'))