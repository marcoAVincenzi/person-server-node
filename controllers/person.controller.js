const express = require('express')
const router = express.Router()

const Person = require('../models/person.model')
const { generateCrudMethods } = require('../services')
const { validateId, raiseRecord404Error } = require('../midllewares')

const personCrud = generateCrudMethods(Person)

router.get('/', (req, res, next) => {
    personCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})

router.get('/:id', validateId, (req, res, next) => {
    personCrud.getById(req.params.id)
        .then(data => {
            if (!data) {
                raiseRecord404Error(req.res)
            }

            res.send(data)
        })
        .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    personCrud.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))
})

router.put('/:id', validateId, (req, res) => {
    personCrud.update(req.params.id, req.body)
        .then(data => {
            if (!data) {
                raiseRecord404Error(req.res)
            }

            res.send(data)
        })
        .catch(err => next(err))
})

router.delete('/:id', validateId, (req, res) => {
    personCrud.delete(req.params.id)
        .then(data => {
            if (!data) {
                raiseRecord404Error(req.res)
            }

            res.send(data)
        })
        .catch(err => next(err))
})

module.exports = router;