// const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

//  var obj = new ObjectID();
// console.log(obj);


//DESTRUCTURING
// var user = {name: 'Sahil', age: 22};
// var {name} = user;
// console.log(name);
// DESTRUCTURING END


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Successfully connected to MongoDB server');
    
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))

    // })

    

    // db.collection('Users').insertOne({
    //     name: 'Sahil Rana',
    //     age: 22,
    //     location: 'Vadodara'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log("unable to insert the user in the collection ", err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // })


    
    
    client.close();
});