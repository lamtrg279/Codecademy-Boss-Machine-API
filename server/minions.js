const minionsRouter = require('express').Router();

module.exports = minionsRouter;

const { 
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('./db');

minionsRouter.param('minionId', (req, res, next, id) => {
    const minion = getFromDatabaseById('minion', id);
    if (minion) {
        req.minion = minion;
        next();
    }
    else {
        res.status(404).send();
    }
});

minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
    const newMinion = addToDatabase('minions', req.body);
    res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
   res.send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
   const updatedMinion = updateInstanceInDatabase('minions', req.body) ;
   res.send(updatedMinion);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('minions', req.params.minionId);    
    res.status(204).send();
});

