const db_users = require("../../database/db_users");
const jwt = require("jsonwebtoken");
const {hashPassword, checkPassword} = require("../../database/hash_utils");

module.exports.registration = async (req, res) => {
    req.body.password = await hashPassword(req.body.password);
    db_users.createItem(
        req.body.login,
        req.body.password,
        req.body.email,
        (err, data) => {
            if (err) {
                console.error(err.message);
                res.json({ status: "regFail" });
            } else {
                console.log("Item created at " + data.lastID);
                res.json({ status: "regSuccess" });
            }
        }
    );
};

module.exports.login = async (req, res) => {
    db_users.checkItemLogin(req.body.login, async (err, result) => {
        if (err) {
            console.error(err.message);
            res.json({status: "error"});
        }
        if (result == null) {
            res.json({status: "logIncorrect"});
        } else {
            const match = await checkPassword(req.body.password, result.password);
            if (
                match
            ) {
                console.log(
                    `${req.body.login} connected with password ${req.body.password}!`
                );

                jwt.sign(
                    {id: result.id},
                    process.env.ACCESS_TOKEN_SECRET,
                    (err, token) => {
                        console.log(err, token);
                        if (err) return res.json({status: "razrabiDauni"});
                        res.json({token: token, status: "logSuccess"});
                    }
                );
            } else {
                res.json({status: "logIncorrect"});
                console.log("Invalid password");
                console.log(`From db : ${result.id}`);
            }
        }
    });
};
