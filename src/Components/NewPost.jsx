import { Form } from "react-router-dom"

export const NewPost = ({submitting}) => {

    return (
        <Form action="/posts/new" method="post">
            <label className="page-subtitle">
                Title:
                <input className="input-in input-wrap" type='text' name='title'/>
            </label>
            <label className="page-subtitle">
                Body:
                <input className="input-in input-wrap" type='text' name='body'/>
            </label>
            <input type='hidden' name='userId' value='1'/>
            <input className="button green" type="submit" value='Add post' disabled={submitting}/>
        </Form>
    )
}