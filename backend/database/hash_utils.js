bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const checkPassword = async (password, realMotherfucker) => {
    return await bcrypt.compare(password, realMotherfucker);
}
module.exports = {hashPassword, checkPassword}