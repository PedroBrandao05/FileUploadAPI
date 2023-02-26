import express from 'express'
import db from './config/db/db-config'
import routes from './routes'
require('dotenv').config()

const app = express()
const router = express.Router()
const port = process.env.PORT || 3000

db.on("error", console.log.bind(console, 'Connection Error'))
db.once("open", () => {console.log("Database connected")})

app.use(express.json())
routes(app)
app.use(router)

app.listen(port, () => { console.log(`Server started at http://localhost:${port}`)})
