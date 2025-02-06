const {Server} = require("socket.io");
const  jwt  = require("jsonwebtoken");
const { sendMessage } = require("./events_handlers/send_message")

socketInit = async (server, cors) => {
    const io = await new Server(server, {
        cors: cors
    })
    return io;
}

initEventHandlers = (io) => {
    io.use((socket, next) => {
        const token = socket.request.headers.token
        if (!token) {
            socket.disconnect(true);
            next(new Error("no token provided (socket.io)"))
        } else {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, result) => {
                if (err) {
                    socket.disconnect(true)
                    next(new Error("invalid token (socket.io)"))
                } else {
                    socket.userId = result.id;
                    next()
                }
            })
        }
    })
    io.on("connection", (socket) => {
        socket.on("message:send", sendMessage(io, socket))
        socket.on("disconnect", async () => {
            console.log(socket.id + " disconnected");
        })
    })
}
exports.setSocket = async (server, cors) => {
    const pivo = socketInit(server, cors);
    pivo.then((io) => {
        initEventHandlers(io)
    })
}