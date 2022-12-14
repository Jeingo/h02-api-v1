import {Router, Request, Response} from 'express'
import {HTTP_STATUSES} from "../constats/status"
import {blogsRouter} from "./blogs-router";

export const postsRouter = Router({})

postsRouter.get('/', (req: Request, res: Response) => {

})

postsRouter.post('/', (req: Request, res: Response) => {

})

postsRouter.get('/:id', (req: Request, res: Response) => {

})

postsRouter.put('/:id', (req: Request, res: Response) => {

})

postsRouter.delete('/:id', (req: Request, res: Response) => {

})