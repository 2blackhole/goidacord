const dbworker = require("../database/dbworker")
const jwt = require("jsonwebtoken");

module.exports.registration = (req, res) => {
    dbworker.createItem(req.body.login, req.body.password, req.body.email, (err, data) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "regFail"})
        }
        else {
            console.log("Item created at " + data.lastID)
            res.json({"status" : "regSuccess"})
        }
    })
}

module.exports.login = (req, res) => {

    dbworker.checkItemLogin(req.body.login, (err, result) => {
        if (err) {
            console.error(err.message)
            res.json({"status" : "error"})
        }
        if (result == null) {
            res.json({"status" : "logIncorrect"})
        }
        else {
            if (result.login === req.body.login && result.password === req.body.password) {

                console.log(`${req.body.login} connected with password ${req.body.password}!`)

                jwt.sign({'id' : result.id}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
                    if (err) return res.json({"status" : "razrabiDauni"})
                    res.json({"token" : token, "status" : "logSuccess"})
                })
            }
            else {
                res.json({"status" : "logIncorrect"})
                console.log('Invalid password')
                console.log(`From db : ${result.id}`)
            }
        }
    })
}
