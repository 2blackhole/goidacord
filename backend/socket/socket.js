exports.initSocket = (io) => {
    io.on("connection", (socket) => {
        console.log("penis");
    })
}