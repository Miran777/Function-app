import { Form, useNavigate } from "react-router-dom"

export const UpdatePost = ({id, title, body, userId, submitting}) => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    return (
        <>
        <button onClick={goBack} className="button" >Back</button>
        <Form method='post' action={`/posts/${id}/edit`} >
            <label className="page-subtitle">
                Title:
                <input className="input-in input-wrap" type="text" name="title" defaultValue={title} />
            </label>
            <label className="page-subtitle">
                Body:
                <input className="input-in input-wrap" type="text" name="body" defaultValue={body} />
            </label>
            <input type='hidden' name='userId' value={userId} />
            <input type='hidden' name='id' value={id} />
            <input className="button green" type="submit" value='Update post' disabled={submitting} />
        </Form>
        </>
    )
}