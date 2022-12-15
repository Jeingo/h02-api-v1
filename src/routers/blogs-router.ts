import {Router, Request, Response} from 'express'
import {HTTP_STATUSES} from "../constats/status"
import {blogsRepository} from "../repositories/blogs-repository";
import {inputValidation} from "../middleware/input-validation";

export const blogsRouter = Router({})

blogsRouter.get('/', (req: Request, res: Response) => {
    const allBlogs = blogsRepository.getAllBlogs()
    res.status(HTTP_STATUSES.OK_200).json(allBlogs)
})

blogsRouter.get('/:id', (req: Request, res: Response) => {
    const foundBlog = blogsRepository.getBlogById(req.params.id)

    if(!foundBlog) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
        return
    }
    res.json(foundBlog)
})

blogsRouter.post('/',
    inputValidation,
    (req: Request, res: Response) => {
    const createdBlog = blogsRepository.createBlog(req.body.name, req.body.description, req.body.websiteUrl)
    res.status(HTTP_STATUSES.CREATED_201).json(createdBlog)
})

blogsRouter.put('/:id',
    inputValidation,
    (req: Request, res: Response) => {
    const updatedBlog = blogsRepository.updateBlog(req.params.id, req.body.name, req.body.description, req.body.websiteUrl)

    if(!updatedBlog) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
        return
    }

    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
})

blogsRouter.delete('/:id', (req: Request, res: Response) => {
    const deletedBlog = blogsRepository.deleteBlog(req.params.id)

    if(!deletedBlog) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
        return
    }

    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
})