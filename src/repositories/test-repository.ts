import {HTTP_STATUSES} from "../constats/status"
import {db} from "./db"


export const testRepository = {
    deleteAllDB() {
        db.blogs = []
    }
}