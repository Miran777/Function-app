import { Suspense } from "react"
import { Await, Link, useAsyncValue, useLoaderData, useNavigate } from "react-router-dom"


const PostItem = () => {
    const post = useAsyncValue() 
    return (
        <>
            <h2 className="page-title left">{post.title}</h2>
            <p className="page-subtitle">{post.body}</p>
        </>
    )
}
const CommentItem = () => {
    const comment = useAsyncValue() 
    return (
        <>
            <h3 className="page-p">{comment.email}</h3>
            <h4 className="page-p">{comment.name}</h4>
            <p className="page-p">{comment.body}</p>
        </>
    )
}


export const SinglePage = () => {
    const {post, id, comment} = useLoaderData()
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <div>
            <button className="button" onClick={goBack}>Back</button>
            <Suspense fallback={<h2 className="page-title">Post id Loading...</h2>}>
                <Await resolve={post}>
                    <PostItem />
                </Await>
            </Suspense>
            <Suspense fallback={<h2 className="page-subtitle">Comments is Loading...</h2>}>
                <Await resolve={comment}>
                    <CommentItem />
                </Await>
                <Link className="button green" to={`/posts/${id}/edit`}>Edit this post</Link>
            </Suspense>

        </div>
    )
}


async function getPostById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

async function getCommentsById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    return res.json()
}

export const pageLoader = async ({params}) => {
    const id = params.id


    return ({
        post: getPostById(id), 
        id,
        comment: getCommentsById(id)
    })
}