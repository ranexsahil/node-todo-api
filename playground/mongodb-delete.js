// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Successfully connected to MongoDB server');

    const db = client.db('TodoApp')

    //Delete Many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result)
    // })


    //Delete One
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result)
    // })


    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
    //     console.log(result)
    // })

    //Deleting many users
    // db.collection('Users').deleteMany({name: 'Sahil Rana'}).then((res) => {
    //     console.log(res)
    // })

    //finding and deleting a user
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5e09ecea2a400b91171286e6')
        }).then((result) => {
        console.log(JSON.stringify(result, undefined,2))
    })


    // client.close();
});