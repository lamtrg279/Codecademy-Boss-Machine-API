const ideasRouter = require('express').Router();
const checkMillionDollarIdea = require('./checkMillionDollarIdea ');

module.exports = ideasRouter;

const { 
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('./db');

ideasRouter.param('id', (req, res, next, id) => {
   const idea = getFromDatabaseById('ideas', id);
   if (idea) {
    req.idea = idea;
    next();
   } 
   else{
       res.status(404).send();
   }
});

ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = addToDatabase('ideas', req.body);
    send.status(201).send(newIdea);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    const updatedInstance = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedInstance);
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
   const deleted = deleteFromDatabasebyId('ideas', req.params.id);
   res.status(204).send(); 
});
