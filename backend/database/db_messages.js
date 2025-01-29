const db = require("./database")

const createItem = (channel_id, type, content, text, time_stamp, callback) => {
    const sql = `INSERT INTO messages (channel_id, type, content, text, time_stamp, time_stamp_edited, visible) VALUES (?, ?, ?, ?, ?, ?, ?)`
    db.run(sql, [channel_id, type, content, text, time_stamp, null, 1], function (err) {
        callback(err, {lastID: this.lastID})
    })
}

const readItems = (channel_id, callback) => {
    const sql = `SELECT * FROM messages WHERE channel_id = ?`;
    db.get(sql, channel_id, callback)
}

const editVisibility = (id, visible, callback) => {
    const sql = `UPDATE messages SET visible = ? WHERE id = ?`;
    db.run(sql, [visible, id], callback)
}

const editText = (id, text, time_stamp_edited, callback) => {
    const sql = `UPDATE messages SET text = ?, time_stamp_edited = ? WHERE id = ?`;
    db.run(sql, [text, time_stamp_edited, id], callback)
}

const deleteItem = (id, callback) => {
    const sql = `DELETE FROM messages WHERE id = ?`;
    db.run(sql, id, callback)
}

exports.createItem = createItem;
exports.readItems = readItems;
exports.editVisibility = editVisibility;
exports.editText = editText;
exports.deleteItem = deleteItem;
