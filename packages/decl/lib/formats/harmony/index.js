'use strict';

module.exports = {
    format: () => { throw new Error('Format method is not implemented for harmony format') },
    parse: require('./parse')
};
