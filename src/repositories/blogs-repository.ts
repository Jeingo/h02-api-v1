import {db} from "./db"
import {v4 as uuid} from 'uuid'


export const blogsRepository = {
    getAllBlogs() {
        return db.blogs
    },
    getBlogById(id: string) {
        const foundBlog = db.blogs.find(b => b.id === id)
        return foundBlog
    },
    createBlog(name: string, desc: string, url: string) {
        const createdBlog = {
            id: uuid(),
            name: name,
            description: desc,
            websiteUrl: url
        }
        db.blogs.push(createdBlog)
        return createdBlog
    }
}