import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from 'express-fileupload';
import cors from 'cors'
import filePath from './meddlewares/filePathMiddleware.js'
import path from 'path'

const PORT = process.env.PORT || 3001
const DB_URL = `mongodb+srv://Pavel:Luky@cluster0.rvgopky.mongodb.net/sushi` 

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', router)  

app.use(fileUpload({}))           
app.use(express.static('static')) 

app.use(filePath(path.resolve(__dirname, 'images/')))    // правильный путь для картинок (только для формата)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})    
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()








