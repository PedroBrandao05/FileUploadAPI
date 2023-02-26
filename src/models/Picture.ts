import mongoose from "mongoose";

export interface IPicture {
    name: string,
    src: string
}

const pictureSchema = new mongoose.Schema<IPicture>({
    name: {type: String, required: true},
    src: {type: String, required: true}
})

export const pictures = mongoose.model('pictures', pictureSchema)