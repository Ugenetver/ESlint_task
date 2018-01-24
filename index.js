const {createHash} = require('crypto');
const {CLIEngine} = require('eslint');

const HASH = '39458fb055c562bb70cfb0e5c4b854c2';

const cli = new CLIEngine();
const report = cli.executeOnFiles(['src/']);

const results = cli.getFormatter()(report.results);
console.log(results);

const resultsAsJSON = JSON.parse(cli.getFormatter('json')(report.results));
const messagesString = JSON.stringify(resultsAsJSON[0].messages);
const messageHash = createHash('md5').update(messagesString).digest('hex');
console.log(`target hash: ${HASH} | current hash: ${messageHash} | valid: ${HASH === messageHash}`);