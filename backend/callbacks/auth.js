const dbworker = require("../database/dbworker")

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
                res.json({"status" : "logSuccess", "user" : result})
                console.log(`${req.body.login} connected with password ${req.body.password}!`)
            }
            else {
                res.json({"status" : "logIncorrect"})
                console.log('Invalid password')
                console.log(`From db : ${result.id}`)
            }
        }
    })
}
