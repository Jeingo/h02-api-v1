import {Router, Request, Response} from 'express'
import {HTTP_STATUSES} from "../constats/status"
import {postsRepository} from "../repositories/posts-repository"
import {blogsRepository} from "../repositories/blogs-repository";
import {inputValidation} from "../middleware/input-validation";

export const postsRouter = Router({})

postsRouter.get('/', (req: Request, res: Response) => {
    const allPosts = postsRepository.getAllPost()
    res.status(HTTP_STATUSES.OK_200).json(allPosts)
})

postsRouter.get('/:id', (req: Request, res: Response) => {
    const foundPost = postsRepository.getPostById(req.params.id)

    if(!foundPost) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
        return
    }
    res.json(foundPost)
})

postsRouter.post('/',
    inputValidation,
    (req: Request, res: Response) => {
    const createdPost = postsRepository.createPost(req.body.title, req.body.shortDescription, req.body.content, req.body.blogId)
    res.status(HTTP_STATUSES.CREATED_201).json(createdPost)
})

postsRouter.put('/:id',
    inputValidation,
    (req: Request, res: Response) => {
    const updatedPost = postsRepository.updatePost(req.params.id, req.body.title, req.body.shortDescription, req.body.content, req.body.blogId)

    if(!updatedPost) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
        return
    }

    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
})

postsRouter.delete('/:id', (req: Request, res: Response) => {
    const deletedPost = postsRepository.deletePost(req.params.id)

    if(!deletedPost) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
        return
    }

    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
})