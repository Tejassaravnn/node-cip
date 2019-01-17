const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/MatchO',(err,db) => {
  if(err){
    return console.log('Unable to connect to server ',err);
  }
  console.log('Connected to MongoDB');

  db.collection('Events').find().toArray().then((docs) => {
      console.log('Events');
      console.log(JSON.stringify(docs,undefined,5));
  }, (err) => {
      console.log('Unable to fetch ',err);
  });

});
