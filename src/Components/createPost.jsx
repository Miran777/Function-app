import { useAuth } from "../hooks/useAuth"
import { redirect, useNavigate, useNavigation } from "react-router-dom"
import { NewPost } from "./NewPost"

export const CreatePost = () => {
    const {signOut} = useAuth()
    const navigate = useNavigate()
    const navigation = useNavigation()

    return (
        <div> 
            <h2 className="page-title left">Create new post</h2>
            <NewPost submitting={navigation.state === 'submitting'}/>
            <button className="button mg-top" onClick={() => signOut(() => navigate('/', {replace: true}))}>Log Out</button>
        </div>
    )
}

const createPost = async ({title, body, userId}) => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, body, userId})
    })

    const newPost = await res.json()
    return newPost
}

export const createPostAction = async ({request}) => {
    const formData = await request.formData()
    const newPost = {
        title: formData.get('title'),
        body: formData.get('body'),
        userId: formData.get('userId')
    }
    const post = await createPost(newPost)

    return redirect('/posts/' + post.id)
}