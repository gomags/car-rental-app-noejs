

const {MongoClient, ObjectId} = require('mongodb')
const dbUrl = "mongodb+srv://ccr_app:ccr_app@cluster0.vo5vzvs.mongodb.net"
const DB = "CCR"
// const client = new MongoClient(dbUrl, config_var.opts)

module.exports.connection_mongo = new MongoClient(dbUrl,  {useUnifiedTopology: true})
module.exports.mongo_DB = DB