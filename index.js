import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT

import express from 'express'
import { router as testObjRoutes } from './routes/testObj.routes.js'

const app = express()

app.use(express.json())
app.use('/api', testObjRoutes)

app.listen(PORT, () => console.log(`Server listening on port:${PORT}`))
