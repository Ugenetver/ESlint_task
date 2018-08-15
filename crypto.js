const {createCipher, createDecipher} = require('crypto');
const fs = require('fs');

const [,, command, password] = process.argv;

if (!command || !password) {
    console.log('command line args required: encrypt|decrypt password');
    return;
}

console.log(`running operation: ${command} with password: ${password}`);

if (command === 'encrypt') {
    encrypt(password);
} else if (command === 'decrypt') {
    decrypt(password);
} else {
    console.log(`Unknown command: ${command}`);
}

function encrypt(password) {
    const cipher = createCipher('aes192', password);
    const input = fs.createReadStream('.eslintrc');
    const output = fs.createWriteStream('eslintrc_encrypted.txt');
    input.pipe(cipher).pipe(output);
}

function decrypt(password) {
    const decipher = createDecipher('aes192', password);
    const input = fs.createReadStream('eslintrc_encrypted.txt');
    const output = fs.createWriteStream('.eslintrc_decrypted');

    input.pipe(decipher).pipe(output);
}
