const tasks = require('./../controllers/tasks.js');
const path = require('path');

module.exports = function(app){
  app.post('/task', tasks.create)
  app.delete('/task/:id', tasks.removeTask)
  app.get('/tasks', tasks.all)
  app.get('/task/:id', tasks.getOne)
  app.put('/task/:id', tasks.update)
  app.all('*', (req, res) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'));
  })
 

}
