module.exports.testA = 'A'

const mainB = require('./02_Bmain')
console.log('A', mainB);

module.exports.testA = 'AA'
