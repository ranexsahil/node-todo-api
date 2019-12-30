// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Successfully connected to MongoDB server');

    const db = client.db('TodoApp')

    //------------------------------------------------------
    // db.collection('Todos').find({
    //     _id: new ObjectID('5e09ce28b32a5f77155a34fb')
    // }).toArray().then((docs) => {
       
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))

    // }, (err) => {
    //     console.log('Unable to fetch data ', err)
    // })
    //------------------------------------------------------

    // //------------------------------------------------------
    // db.collection('Todos').find().count().then((count) => {
       
    //     console.log(`Todos count : ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch data ', err)
    // })
    //------------------------------------------------------


    //------------------------------------------------------
    db.collection('Users').find({
        name : 'Sahil Rana'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2))
    })

    //------------------------------------------------------






    // client.close();
});