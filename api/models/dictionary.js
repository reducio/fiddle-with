const mongoose = require('mongoose');
const { WORD, TRANSFER } = require('../constants/dictionary');
const { USER, DICTIONARY } = require('../constants/models');

const userSchema = mongoose.Schema({
    [WORD]: {
        type: String,
        require: true
    },
    [TRANSFER]: {
        type: String,
        require: true
    },
    [DATE]: {
        type: Date,
        default: Date.now
    },
    [USER]: [{ type: mongoose.Types.ObjectId, ref: USER }]
});

module.exports = mongoose.model(DICTIONARY, userSchema);