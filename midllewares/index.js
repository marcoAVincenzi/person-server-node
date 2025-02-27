const ObjectId = require('mongoose').Types.ObjectId

const validateId = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json({
            error: 'ID is invalid - _id: ' + req.params.id
        })
    }

    next();
}

const raiseRecord404Error = (req, res) => {
    res.status(404).json({
        error: 'Person not found - _id: ' + req.params.id
    })
}

const errorHandle = (error, req, res, next) => {
    res.status(500).json({ error })
}

module.exports = {
    validateId, raiseRecord404Error, errorHandle
}