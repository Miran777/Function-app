import { useActionData, useLoaderData, useNavigation } from "react-router-dom"
import { UpdatePost } from '../Components/UpdatePost'

export const EditPost = () => {
    const {post, id} = useLoaderData()
    const navigation = useNavigation()
    const data = useActionData()


    return (
        <div> 
            {data?.message && <div className={`message ${data.message == 'All field are required!' ? 'red' : ''}`}>{data.message}</div>}
            <h2 className="page-title">Edit post {id}</h2>
            <UpdatePost {...post} submitting={navigation.state === 'submitting'}/>
        </div>
    )
}

const updatePost = async (post) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
        method: 'PUT',
        body: post
    })
    return res.json()
}

export const updatePostAction = async ({request}) => {
    const formData = await request.formData()
    const updatedPost = await updatePost(formData)

    if(!formData.get('title') || !formData.get('body')) return {message: 'All field are required!'}

    return { message: `Post ${updatedPost.id} was successfully updated!` }
}