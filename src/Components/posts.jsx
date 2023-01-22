import { Suspense } from "react"
import { Link, useSearchParams, useLoaderData, Await, defer } from "react-router-dom"
import { PostsFilter } from "./postsFilter"

const Posts = () => {
    const {postList} = useLoaderData()
   const [searchParams, setSearchParams] = useSearchParams()

   const postQuery = searchParams.get('post') || ''
   const latest = searchParams.has('latest')
   
   const startsFrom = latest ? 80 : 1



    return (
        <section className="posts">
            <h2 className="page-title">Our Posts</h2>

            <PostsFilter setSearchParams={setSearchParams} latest={latest} postQuery={postQuery} />
            
            <Link to='/posts/new'><button className="button green mg-wrap">Add new post</button></Link>

            <Suspense fallback={<h2 className="page-subtitle">Loading...</h2>}>
                <Await resolve={postList}>
                    {
                        (resolvedPosts) => (<>
                        {
                            resolvedPosts.filter(
                                post => post.title.includes(postQuery) && post.id >= startsFrom
                            ).map(post => (
                                <Link key={post.id} to={`/posts/${post.id}`} >
                                    <li className="list-item ">{post.title}</li>
                                </Link>
                            ))
                        }
                        </>)
                    }
                </Await>
            </Suspense>


        </section>
    )
}


async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
        throw new Response('', {status: res.status, statusText: 'Not Found Page!'})
    }

    return res.json()
}

const postsLoader = async () => {


    return defer({
        postList: getPosts()
    })
}
 export { postsLoader, Posts } 