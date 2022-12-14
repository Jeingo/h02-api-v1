import {db, PostsType} from "./db"
import {v4 as uuid} from 'uuid'

export const postsRepository = {
    getAllPost() {
        return db.posts
    },
    getPostById(id: string) {
        const foundPost = db.posts.find(p => p.id === id)
        return foundPost
    },
    createPost(title: string, desc: string, content: string, blogId: string) {
        const foundBlog = db.blogs.find(b => b.id === blogId)
        if(foundBlog) {
            const createdPost = {
                id: uuid(),
                title: title,
                shortDescription: desc,
                content: content,
                blogId: blogId,
                blogName: foundBlog.name
            }
            db.posts.push(createdPost)
            return createdPost
        }
        return null
    },
    updatePost(id: string, title: string, desc: string, content: string, blogId: string) {
        const foundBlog = db.blogs.find(b => b.id === blogId)
        const foundPost = db.posts.find(p => p.id === id)
        if(foundPost && foundBlog) {
            foundPost.title = title
            foundPost.shortDescription = desc
            foundPost.content = content
            foundPost.blogId = blogId
            foundPost.blogName = foundBlog.name
            return foundPost
        }
        return null
    },
    deletePost(id: string) {
        const foundPost = db.posts.find(p => p.id === id)
        db.posts = db.posts.filter(p => p.id !== id)
        return foundPost
    }
}