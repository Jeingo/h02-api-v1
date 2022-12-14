import {db} from "./db"

export const blogsRepository = {
    getAllBlogs() {
        return db.blogs
    },
    getBlogById(id: string) {
        const foundBlog = db.blogs.find(b => b.id === id)
        return foundBlog
    }
}