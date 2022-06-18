const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
    let chars = alpha;
    hasNumbers ? (chars += numbers) : '';
    hasSymbols ? (chars += symbols) : '';
    return generatePassword(length, chars);
}

const generatePassword = (length, chars) => {
    
}

module.exports = createPassword;