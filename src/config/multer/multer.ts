import { Request } from 'express'
import multer from 'multer'

type DestinationCallback = (error: Error | null, destination: string) => void
type FileNameCallback = (error: Error | null, filename: string) => void

const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, callback: DestinationCallback): void => {
        callback(null, "uploads/")
    },
    filename: (req: Request, file: Express.Multer.File, callback: FileNameCallback): void => {
        callback(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage })

export default upload