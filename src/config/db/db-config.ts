import mongoose, { Error } from "mongoose";
require('dotenv').config()

const user = process.env.DBUSER
const password = process.env.DBPASSWORD

mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://${user}:${password}@uploadteste.dzftety.mongodb.net/?retryWrites=true&w=majority`)

let db = mongoose.connection;

export default db