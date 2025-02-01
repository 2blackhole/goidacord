const db = require("./database");
const createItem = (user_id, server_id, callback) => {
    const sql = `INSERT INTO user_server (user_id, server_id) VALUES (?, ?)`
    db.run(sql, [user_id, server_id], callback)
}

const readItems = (user_id, callback) => {
    const sql = `SELECT * FROM user_server WHERE user_id = ?`;
    db.all(sql, [user_id], callback)
}

const deleteItem = (user_id, callback) => {
    const sql = `DELETE FROM user_server WHERE user_id = ?`;
    db.run(sql, user_id, callback)
}

const checkUser = (user_id, server_id, callback) => {
    const sql = `SELECT COUNT(*) AS count FROM user_server WHERE user_id = ? AND server_id = ?`
    db.get(sql, [user_id, server_id], callback)
}

exports.createItem = createItem;
exports.readItems = readItems;
exports.deleteItem = deleteItem;
exports.checkUser = checkUser;