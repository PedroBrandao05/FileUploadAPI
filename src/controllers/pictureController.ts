import { pictures } from "../models/Picture";
import { IPicture } from "../models/Picture";
import { Request, Response } from "express";
import { v4 as uuid} from 'uuid'

class PictureController {

    static uploadPicture = async (req: Request, res: Response) => {
        const {name} = req.body
        const file = req.file
        const picture = new pictures({
            name,
            src: file?.path
        })
        picture.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} Fail on save picture`})
            } else {
                res.status(202).send("Arquivo salvo com sucesso")
            }
        })
    }
}

export default PictureController