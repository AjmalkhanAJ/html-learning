const {MongoClient} = require ('mongodb')
const client = new MongoClient('mongodb+srv://ajmal:ajmal%40123@ajmal.i78ik.mongodb.net/')
    client.connect()
    .then (()=>{
        console.log("connected")
    })
    .catch((error)=>console.log("failed",error))



    // const {MongoClient} = require ('mongodb')
    // const client = new MongoClient('mongodb+srv://ajmal:ajmal%40123@ajmal.i78ik.mongodb.net/')
    // client.db('txt').collection('clg').insertOne({
    //      name :'ajmal'
    //      email : ajmal@gmail.com
    // })

    // .then((res)=>{
    //     console.log(res)
    //     client.close()
    // })
    // .catch((err)=>console.log(err))