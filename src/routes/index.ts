import express, {Request, Response, Express} from 'express'
import picturesRouter from './picture'

const routes = (app: Express) => {
    app.use(
        picturesRouter
    )
}

export default routes