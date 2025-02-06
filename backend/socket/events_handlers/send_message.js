const db_messages = require('../../database/db_messages')
const { normRoomNaming } = require('../utils')

exports.sendMessage = (io, socket) => {
    return async (payload, callback) => {
        if (typeof callback !== "function") {
            return;
        }
        const message = {
            chanel_id: payload.chanel_id,
            type: payload.type,
            content: payload.content,
            text: payload.text,
            time_stamp: payload.time_stamp,
            visible: payload.visible
        }
        db_messages.createItem(message.chanel_id, message.type, message.content, message.text, message.time_stamp, (err, result) => {
            if (err) {
                console.error(err.message);
                callback({
                    status: "error sending message"
                })
            }
        })

        socket.broadcast.to(normRoomNaming(message.chanel_id)).emit("message:sent", message);
        callback({
            gyatus: "ok"
        })
    }
}