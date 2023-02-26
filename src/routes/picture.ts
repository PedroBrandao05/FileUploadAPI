import express from 'express'
import PictureController from '../controllers/pictureController'
import upload from '../config/multer/multer'

const picturesRouter = express.Router()

picturesRouter
.post("/pictures", upload.single("file") ,PictureController.uploadPicture)

export default picturesRouter