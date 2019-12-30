// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Successfully connected to MongoDB server');

    const db = client.db('TodoApp')

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: ObjectID("5e09ea8e2a400b9117128604")
    // }, {
    //     $set: {
    //         completed : true
    //     }
    // }, {returnOriginal: false}).then((result) => {
    //     console.log(result)
    // })

    //findOneAndUpdate in the users collection

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5e09d019d1855578239182a9')
    }, {
        $inc : {
            age: 8
        },
        $set:{

            name: 'Sahil'
        }
    },{returnOriginal: false}).then((result) => {
        console.log(result)
    })



    // client.close();
});