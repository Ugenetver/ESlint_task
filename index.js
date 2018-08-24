const {createHash} = require('crypto');
const {CLIEngine} = require('eslint');
const stringify = require('json-stringify-deterministic');

const HASH = '1675edd44f4e848990c8773d1ecb2b1a';

const cli = new CLIEngine();
const report = cli.executeOnFiles(['src/']);

const results = cli.getFormatter()(report.results);
console.log(results);

const resultsAsJSON = JSON.parse(cli.getFormatter('json')(report.results));
const messagesString = stringify(prepareResult(resultsAsJSON[0].messages));
const messageHash = createHash('md5').update(messagesString).digest('hex');
console.log(HASH === messageHash ? 'SUCCESS' : 'FAIL');
console.log(`Hash: ${HASH}, current hash: ${messageHash}`);

function prepareResult(messages) {
    return messages.map((message) => Object.assign({}, message, {
        fix: undefined,
        message: message.nodeType === 'ForInStatement' ? message : undefined,
    }));
}
