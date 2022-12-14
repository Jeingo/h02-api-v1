type BlogsType = {
    id: string
    name: string
    description: string
    websiteUrl: string
}

export const db:{blogs: Array<BlogsType>} = {
    blogs: [
        {
            id: '1',
            name: 'Name',
            description: 'Description',
            websiteUrl: 'URL'
        }
    ]
}