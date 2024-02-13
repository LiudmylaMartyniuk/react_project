const baseURL = 'https://jsonplaceholder.typicode.com'

const albums = '/albums'
const comments = '/comments'
const todos = '/todos'
const posts = '/posts'

const urls = {
    albums: {
        base: albums,
        // byId: (id) => `${albums}/${id}`,
    },
    comments: {
        base: comments,
        // byId: (id) => `${comments}/$m{id}`,
    },
    todos: {
        base: todos,
        // byId: (id) => `${todos}/${id}`,
    },
    posts: {
        base: posts,
        getPostById: (postId) => `${posts}/${postId}`,
    }
}

export {
    baseURL,
    urls
}